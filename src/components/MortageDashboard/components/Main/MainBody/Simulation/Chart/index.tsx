import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './index.scss';
import Performance from './Performance';
import Rate from './Rate';
import BarChart from './BarChart';

import options from './BarChart/options';
import settingDataSets from './BarChart/settingDataSets';
import {
  calcInterest,
  calcNewPrincipal,
  convertToDollarFormat
} from '../Calculator/util';
import { getSummaryData } from './util';

export interface PaymentArray {
  loanBalance: number;
  principlePaid: number;
  interestPaid: number;
  month: number;
}

interface Props {
  data: {
    monthlyPayment: number;
    mortage: number;
    downPayment: number;
    interestRate: number;
    year: number;
  };
  setData: Function;
  barData: {};
}

const getFirstHalfYearOrLatterHalf = (
  index: number,
  selectedIndex: number,
  isFirstSixMonths: boolean
): boolean => {
  if (isFirstSixMonths) {
    return index >= selectedIndex * 12 && index < selectedIndex * 12 + 6;
  } else {
    return index >= selectedIndex * 12 + 6 && index < selectedIndex * 12 + 12;
  }
};

const Chart = ({ data, setData }: Props): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isFirstSixMonths, setIsFirstSixMonths] = React.useState(true);
  const years = Array.from({ length: data.year ? data.year : 15 }, () => 0);

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(): void {
    setAnchorEl(null);
  }

  const yearOnClickToggle = (event: React.MouseEvent<HTMLElement>): void => {
    const node = event.currentTarget;
    if (node!.classList.contains('mainBody_chart_year_left')) {
      if (!node!.classList.contains('year_active')) return;
      const otherNode = document.querySelector('.mainBody_chart_year_right');
      node.classList.toggle('year_active');
      otherNode!.classList.toggle('year_active');
      setIsFirstSixMonths(true);
    } else {
      const otherNode = document.querySelector('.mainBody_chart_year_left');
      if (!node!.classList.contains('year_active')) return;
      node.classList.toggle('year_active');
      otherNode!.classList.toggle('year_active');
      setIsFirstSixMonths(false);
    }
  };

  function handleMenuItemClick(
    event: React.MouseEvent<HTMLElement>,
    index: number
  ): void {
    setSelectedIndex(index);
    setAnchorEl(null);
  }

  // console.log('data: ', data);
  const paymentDataArray: PaymentArray[] = [];
  const monthlyInterestArray = [];
  const monthlyPrincipleArray = [];
  const monthlyNewBlanceArray = [];
  if (data.year)
    for (let i = 0; i < data.year * 12; i++) {
      const interestPaidMonthly = calcInterest({
        rate: data.interestRate,
        loanPrincipal:
          paymentDataArray.length === 0
            ? data.mortage - data.downPayment
            : paymentDataArray[i - 1].loanBalance
      });
      const newBalance = calcNewPrincipal({
        loanPrincipal:
          paymentDataArray.length === 0
            ? data.mortage - data.downPayment
            : paymentDataArray[i - 1].loanBalance,
        repayment: data.monthlyPayment,
        interest: interestPaidMonthly
      });
      monthlyInterestArray.push(Number(interestPaidMonthly.toFixed(2)));
      monthlyPrincipleArray.push(
        Number((data.monthlyPayment - interestPaidMonthly).toFixed(2))
      );
      monthlyNewBlanceArray.push(
        Number(newBalance.toFixed(2)) < 0 ? 0 : Number(newBalance.toFixed(2))
      );
      const paymentData = {
        loanBalance:
          Number(newBalance.toFixed(2)) < 0 ? 0 : Number(newBalance.toFixed(2)),
        principlePaid: Number(
          (data.monthlyPayment - interestPaidMonthly).toFixed(2)
        ),
        interestPaid: Number(interestPaidMonthly.toFixed(2)),
        month: i + 1
      };
      paymentDataArray.push(paymentData);
    }
  const currentSelectedMonthlyInterestArray = monthlyInterestArray.filter(
    (data, index): boolean =>
      getFirstHalfYearOrLatterHalf(index, selectedIndex, isFirstSixMonths)
  );
  const currentSelectedMonthlyPrincipleArray = monthlyPrincipleArray.filter(
    (data, index): boolean =>
      getFirstHalfYearOrLatterHalf(index, selectedIndex, isFirstSixMonths)
  );
  const currentSelectedMonthlyNewBlanceArray = monthlyNewBlanceArray.filter(
    (data, index): boolean =>
      getFirstHalfYearOrLatterHalf(index, selectedIndex, isFirstSixMonths)
  );

  // console.log('monthlyInterestArray: ', monthlyInterestArray);
  // console.log('monthlyPrincipleArray: ', monthlyPrincipleArray);
  // console.log('monthlyNewBlanceAbalancerray: ', monthlyNewBlanceArray);

  const paymentBarChartData = [
    { label: 'Principle($)', data: currentSelectedMonthlyPrincipleArray },
    { label: 'Interest($)', data: currentSelectedMonthlyInterestArray }
  ];
  // console.log(paymentBarChartData);

  const biggestInterest = Math.max(...currentSelectedMonthlyInterestArray);
  const biggestPrinciple = Math.max(...currentSelectedMonthlyPrincipleArray);

  if (paymentDataArray.length) {
    let yAxis = Math.max(biggestInterest, biggestPrinciple);
    yAxis = Math.ceil(yAxis);
    options.scales.yAxes[0].ticks.max = yAxis;
    options.scales.yAxes[0].ticks.stepSize = 500;
    options.scales.yAxes[0].ticks.callback = function(
      value,
      index,
      values
    ): string {
      // const newValue = Number(value / 1000);
      // return `$${value}k        `;
      return `$${value}        `;
    };
  }
  const firstHalf = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const latterHalf = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const barData = {
    labels: isFirstSixMonths ? firstHalf : latterHalf,
    datasets: settingDataSets(paymentBarChartData, true)
  };

  const summaryData = getSummaryData({ paymentDataArray });
  // console.log('summaryData: ', summaryData);

  // calc total from array
  const totalInterestPaid = monthlyInterestArray.reduce((a, c) => a + c, 0);
  const totalPrinciplePaid = monthlyPrincipleArray.reduce((a, c) => a + c, 0);

  return (
    <div className="mainBody_chart">
      <div className="mainBody_chart_container">
        <div className="mainBody_chart_left">
          <div className="mainBody_chart_left_header">
            <div>Year</div>
            <div
              className="chart_left_active"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              {selectedIndex ? selectedIndex + 1 : 1}
            </div>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {years.map(
                (option, index): JSX.Element => (
                  <MenuItem
                    key={index}
                    selected={index === selectedIndex}
                    onClick={(event: React.MouseEvent<HTMLElement>): void =>
                      handleMenuItemClick(event, index)
                    }
                  >
                    {index + 1}
                  </MenuItem>
                )
              )}
            </Menu>
          </div>
          <BarChart
            selectedIndex={selectedIndex}
            data={data}
            paymentDataArray={paymentDataArray}
            barData={barData}
            setData={setData}
          />
          <div className="mainBody_chart_years ">
            <div
              className="mainBody_chart_year_left year_active"
              onClick={yearOnClickToggle}
            >
              1 ~ 6 months
            </div>
            <div
              className="mainBody_chart_year_right "
              onClick={yearOnClickToggle}
            >
              7 ~ 12 months
            </div>
          </div>
        </div>
        <div className="mainBody_chart_right">
          <div className="mainBody_chart_history">SUMMARY</div>
          <div className="mainBody_chart_info">
            <Performance
              name="Total interest paid"
              year={`${data.year || 15}y`}
              percent={
                totalInterestPaid
                  ? `${convertToDollarFormat(totalInterestPaid)}`
                  : '+35.2%'
              }
              color="red"
            />
            <Performance
              name="Total principal paid"
              year={`${data.year || 15}y`}
              percent={
                totalPrinciplePaid
                  ? `${convertToDollarFormat(data.mortage - data.downPayment)}`
                  : '+65.2%'
              }
            />
            <Performance
              name="Interest + Principal"
              year={
                data.year
                  ? `Paid off by ${data.year + new Date().getFullYear()}`
                  : new Date().getFullYear()
              }
              percent={
                totalPrinciplePaid
                  ? `${convertToDollarFormat(
                      data.mortage - data.downPayment + totalInterestPaid
                    )}`
                  : '-20.2'
              }
              color="black"
            />
            <Rate percent={33} />
          </div>

          <div className="mainBody_chart_moreView">
            <div>View More</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chart;
