import React from 'react';
import * as PIXI from 'pixi.js';
import anime from 'animejs';

import './index.scss';
const colors = ['75F4F4', '90E0F3', 'B8B3E9', 'D999B9'];

class MouseClickPixi extends React.Component {
  stageRef = React.createRef();
  componentDidMount() {
    this.app = new PIXI.Application({
      transparent: true,
      antialias: true
    });
    this.stageRef.current.appendChild(this.app.view);
    this.app.renderer.view.style.display = 'block';
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
    this.app.start();
  }
  pop = event => {
    let mouse_x = event.clientX,
      mouse_y = event.clientY,
      particles = [],
      spread = 100;

    for (let i = 0; i < 50; i++) {
      let particle = new PIXI.Graphics();
      let rand = anime.random(1, colors.length);
      particle.beginFill('0x' + colors[rand - 1]);
      particle.drawCircle(0, 0, 4);
      particle.endFill();
      particle.x = mouse_x;
      particle.y = mouse_y;
      particles.push(particle);
      this.app.stage.addChild(particle);
    }
    anime({
      targets: particles,
      x() {
        return anime.random(mouse_x - spread, mouse_x + spread);
      },
      y() {
        return anime.random(mouse_y - spread, mouse_y + spread);
      },
      alpha: { delay: 300, duration: 500, value: 0 },
      easing: 'easeOutQuint',
      complete: () => {
        for (let particle of particles) {
          this.app.stage.removeChild(particle);
        }
      }
    });
  };
  render() {
    return (
      <div className="MouseClickPixi">
        <div ref={this.stageRef} onClick={this.pop} />
      </div>
    );
  }
}

export default MouseClickPixi;
