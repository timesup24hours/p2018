import React from 'react';
import InputRange from './InputRange';
import './index.css';
import Period from './Period';
import Buttons from './Buttons';

const initialState = {
  targetValue: 50000,
  initialDepositValue: 20000,
  monthlyPaymentValue: 2000,
  yearValue: 7
};
export default class Calculator extends React.Component {
  state = initialState;

  targetOnchange = value => {
    this.setState({ targetValue: value });
  };
  initialDepositOnchange = value => {
    this.setState({ initialDepositValue: value });
  };
  monthlyPaymentOnchange = value => {
    this.setState({ monthlyPaymentValue: value });
  };

  handleOnClick = e => {
    let { yearValue } = this.state;
    if (e.target.id === 'increase') {
      this.setState({ yearValue: yearValue + 1 });
    } else {
      if (yearValue <= 1) return;
      this.setState({ yearValue: yearValue - 1 });
    }
  };

  handleCancel = () => {};
  handleDefault = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <div className="mainBody_calculator flex_center">
        <div className="mainBody_calculator_body">
          <div className="mainBody_calculator_target">
            <InputRange
              name="Target"
              value={this.state.targetValue}
              onChange={this.targetOnchange}
              id="target"
              min={5000}
              max={100000}
            />
          </div>
          <div className="mainBody_calculator_deposit">
            <InputRange
              name="Initial deposit"
              value={this.state.initialDepositValue}
              onChange={this.initialDepositOnchange}
              id="initialDeposit"
              min={1}
              max={30000}
            />
          </div>
          <div className="mainBody_calculator_payment">
            <InputRange
              name="Monthly payment"
              value={this.state.monthlyPaymentValue}
              onChange={this.monthlyPaymentOnchange}
              id="monthlyPayment"
              min={1}
              max={8000}
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
