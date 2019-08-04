import React from 'react';
import DatePicker from 'react-mobile-datepicker';
import { convertDate } from './util';
import Button from '@material-ui/core/Button';

import './index.scss';

class MobileDatePicker extends React.Component {
  state = {
    time: new Date(),
    isOpen: true,
    theme: 'ios'
  };

  handleToggle = isOpen => () => {
    this.setState({ isOpen });
  };

  handleThemeToggle = theme => () => {
    this.setState({ theme, isOpen: true });
  };

  handleSelect = time => {
    this.setState({ time, isOpen: false });
  };

  render() {
    return (
      <div className="MobileDatePicker">
        <div className="MobileDatePicker-display">
          <p className="select-time ">
            {convertDate(this.state.time, 'YYYY-MM-DD')}
          </p>
          <div></div>
          <Button
            variant="contained"
            className="select-btn sm"
            onClick={this.handleThemeToggle('default')}
          >
            default
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="select-btn sm"
            onClick={this.handleThemeToggle('dark')}
          >
            dark
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="select-btn sm"
            onClick={this.handleThemeToggle('ios')}
          >
            ios
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="select-btn sm"
            onClick={this.handleThemeToggle('android')}
          >
            android
          </Button>
          <Button
            className="select-btn sm"
            onClick={this.handleThemeToggle('android-dark')}
          >
            android-dark
          </Button>
          <input type="date" />
        </div>
        <DatePicker
          showCaption
          showHeader
          value={this.state.time}
          theme={this.state.theme}
          isOpen={this.state.isOpen}
          onSelect={this.handleSelect}
          onCancel={this.handleToggle(false)}
        />
      </div>
    );
  }
}

export default MobileDatePicker;
