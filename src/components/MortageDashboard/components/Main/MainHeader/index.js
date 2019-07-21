import React from 'react';
import './index.css';
import HeaderName from './HeaderName';
import Stepper from './Stepper';
import Continue from './Continue';

export default class MainHeader extends React.Component {
  state = {
    currentStep: 3,
    stepData: [
      { label: '', checked: true, current: false, step: 1, last: false },
      { label: '', checked: true, current: false, step: 2, last: false },
      {
        label: 'Simulation',
        checked: false,
        current: true,
        step: 3,
        last: false
      },
      { label: '', checked: false, current: false, step: 4, last: false },
      { label: '', checked: false, current: false, step: 5, last: true }
    ]
  };

  handleOnClick = () => {
    let { currentStep, stepData } = this.state;
    if (currentStep >= 5) return;
    this.setState({ currentStep: currentStep + 1 }, () => {
      const newStepData = stepData.map(d => {
        if (this.state.currentStep - 1 === d.step) {
          d.checked = true;
          d.current = false;
        }
        if (this.state.currentStep === d.step) {
          d.checked = false;
          d.current = true;
        }
        return d;
      });
      this.setState({ stepData: newStepData });
    });
  };

  render() {
    const { stepData, currentStep } = this.state;
    return (
      <div className="main_header">
        <HeaderName />
        <Stepper stepData={stepData} currentStep={currentStep} />
        <Continue handleOnClick={this.handleOnClick} />
      </div>
    );
  }
}
