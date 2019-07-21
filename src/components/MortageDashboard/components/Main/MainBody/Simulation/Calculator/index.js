import React from 'react';
import InputRange from './InputRange';
import './index.css';
import Period from './Period';
import Buttons from './Buttons';
import { convertToPercentage, takeNumberOnly } from './util';

const initialState = {
  mortage: 200000,
  downPayment: 0,
  displayValue: 0,
  interestRate: 3,
  yearValue: 15,
  monthlyPayment: 0
};
export default class Calculator extends React.Component {
  state = initialState;

  targetOnchange = value => {
    this.setState({ mortage: value });
  };
  initialDepositOnchange = value => {
    // const downPayment = this.state.mortage * value * 0.01;
    this.setState({ downPayment: value, displayValue: value });
  };
  monthlyPaymentOnchange = value => {
    this.setState({ interestRate: value });
  };

  // https://www.wikihow.com/Calculate-Mortgage-Payments
  monthlyPayment = ({ mortage, downPayment, interestRate, year }) => {
    if (downPayment !== 0 && downPayment === undefined) {
      downPayment = this.state.downPayment;
    }
    const rate = takeNumberOnly(interestRate, false);

    const decimalRate = rate / 10000;
    const monthlyInterestRate = decimalRate / 12;
    const totalMonths = year * 12;
    // console.log({ decimalRate, monthlyInterestRate, totalMonths, downPayment });
    const upper =
      monthlyInterestRate * Math.pow(monthlyInterestRate + 1, totalMonths);
    const down = Math.pow(monthlyInterestRate + 1, totalMonths) - 1;

    const monthlyPayment = (mortage - downPayment) * (upper / down);
    this.setState({ monthlyPayment });
    // console.log({ monthlyPayment, mortage, downPayment, interestRate, year });
    if (this.props.renderProp)
      this.props.renderProp({
        monthlyPayment,
        mortage,
        downPayment,
        interestRate,
        year
      });
  };

  handleOnClick = e => {
    let { yearValue } = this.state;
    if (e.target.id === 'increase') {
      yearValue = yearValue + 5;
      if (yearValue > 30) return;
      this.setState({ yearValue });
    } else {
      yearValue = yearValue - 5;
      if (yearValue < 5) return;
      this.setState({ yearValue });
    }
    this.monthlyPayment({
      mortage: this.state.mortage,
      interestRate: this.state.interestRate,
      year: yearValue
    });
  };

  handleCancel = () => {};
  handleDefault = () => {
    this.monthlyPayment({
      mortage: this.state.mortage,
      interestRate: this.state.interestRate,
      year: this.state.yearValue
    });
    // this.setState(initialState, () => {
    //   this.monthlyPayment({
    //     mortage: this.state.mortage,
    //     interestRate: this.state.interestRate,
    //     year: this.state.yearValue
    //   });
    // });
  };

  render() {
    return (
      <div className="mainBody_calculator flex_center">
        <div className="mainBody_calculator_body">
          <div className="mainBody_calculator_target">
            <InputRange
              name="Mortgage"
              value={this.state.mortage || 0}
              onChange={this.targetOnchange}
              id="target"
              min={0}
              max={1000000}
              edit={true}
              mortage={this.state.mortage}
              downPayment={this.state.downPayment}
            />
          </div>
          <div className="mainBody_calculator_deposit">
            <InputRange
              name="Down Payment"
              displayValue={this.state.displayValue}
              value={this.state.downPayment || 0}
              onChange={this.initialDepositOnchange}
              id="initialDeposit"
              min={0}
              max={
                this.state.mortage < this.state.downPayment
                  ? this.state.downPayment
                  : this.state.mortage
              }
              edit={true}
              mortage={this.state.mortage}
              downPayment={this.state.downPayment}
            />
          </div>
          <div className="mainBody_calculator_payment">
            <InputRange
              name="Interest Rate"
              value={this.state.interestRate}
              onChange={this.monthlyPaymentOnchange}
              id="monthlyPayment"
              min={1}
              max={999}
              percent={true}
              edit={false}
            />
          </div>
          <Period
            year={this.state.yearValue}
            handleOnClick={this.handleOnClick}
          />
          <Buttons
            handleCancel={this.handleCancel}
            handleDefault={this.handleDefault}
          />
        </div>
      </div>
    );
  }
}
