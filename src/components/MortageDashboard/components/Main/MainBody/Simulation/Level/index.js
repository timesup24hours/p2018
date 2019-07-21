import React from 'react';
import './index.css';
import LevelButton from './LevelButton';

export default class Level extends React.Component {
  state = {
    levels: [
      { label: 'Conservative', id: 1, active: false },
      { label: 'Balanced', id: 2, active: false },
      { label: 'Mortgage', id: 3, active: true },
      { label: 'Extreme', id: 4, active: false }
    ]
  };

  handleOnClick = (e, value) => {
    if (value.id !== 3) return;
    const { levels } = this.state;
    levels.forEach(d => {
      d.active = false;
      if (d.label === e.target.id) {
        d.active = true;
      }
    });
    this.setState({ levels });
  };

  render() {
    const { levels } = this.state;
    return (
      <div className="mainBody_level flex_center">
        <div className="mainBody_level_body">
          {levels.map((value, i) => {
            return (
              <LevelButton
                key={`${value.label}${i}`}
                value={value}
                handleOnClick={this.handleOnClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
