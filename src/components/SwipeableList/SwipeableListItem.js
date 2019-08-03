import React from 'react';
import './SwipeableListItem.scss';

class SwipeableListItem extends React.Component {
  // DOM Refs
  listElement;
  wrapper;
  background;

  // Drag & Drop
  dragStartX = 0;
  left = 0;
  dragged = false;

  // FPS Limit
  startTime;
  fpsInterval = 1000 / 60;

  constructor(props) {
    super(props);

    this.listElement = null;
    this.wrapper = null;
    this.background = null;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onDragStartMouse = this.onDragStartMouse.bind(this);
    this.onDragStartTouch = this.onDragStartTouch.bind(this);
    this.onDragEndMouse = this.onDragEndMouse.bind(this);
    this.onDragEndTouch = this.onDragEndTouch.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.onClicked = this.onClicked.bind(this);

    this.onSwiped = this.onSwiped.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onDragEndMouse);
    window.addEventListener('touchend', this.onDragEndTouch);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onDragEndMouse);
    window.removeEventListener('touchend', this.onDragEndTouch);
  }

  onDragStartMouse(evt) {
    // start
    this.onDragStart(evt.clientX);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  onDragStartTouch(evt) {
    // start
    const touch = evt.targetTouches[0];
    this.onDragStart(touch.clientX);
    window.addEventListener('touchmove', this.onTouchMove);
  }

  onDragStart(clientX) {
    this.dragged = true;
    this.dragStartX = clientX;
    this.listElement.className = 'ListItem';
    this.startTime = Date.now();
    requestAnimationFrame(this.updatePosition);
  }

  onDragEndMouse(evt) {
    window.removeEventListener('mousemove', this.onMouseMove);
    this.onDragEnd();
  }

  onDragEndTouch(evt) {
    window.removeEventListener('touchmove', this.onTouchMove);
    this.onDragEnd();
  }

  onDragEnd() {
    if (this.dragged) {
      this.dragged = false;

      const threshold = this.props.threshold || 0.3;

      if (this.left < this.listElement.offsetWidth * threshold * -1) {
        this.left = -this.listElement.offsetWidth * 2;
        this.wrapper.style.maxHeight = 0;
        this.onSwiped();
      } else if (this.right > this.listElement.offsetWidth * threshold * -1) {
        this.right = -this.listElement.offsetWidth * 2;
        this.wrapper.style.maxHeight = 0;
        this.onSwiped();
        this.listElement.className = 'BouncingListItemLeft';
        this.listElement.style.transform = `translateX(${this.right}px)`;

        return;
      } else if (this.left > this.listElement.offsetWidth * threshold * -1) {
        this.left = 0;
      }

      this.listElement.className = 'BouncingListItem';
      this.listElement.style.transform = `translateX(${this.left}px)`;
    }
  }

  onMouseMove(evt) {
    const left = evt.clientX - this.dragStartX;
    // console.log('mouse left: ', left);
    if (left < 0) {
      this.left = left;
    } else {
      this.right = left;
    }
  }

  onTouchMove(evt) {
    const touch = evt.targetTouches[0];
    const left = touch.clientX - this.dragStartX;
    // console.log('touch left: ', left);
    if (left < 0) {
      this.left = left;
    }
  }

  updatePosition() {
    if (this.dragged) requestAnimationFrame(this.updatePosition);

    const now = Date.now();
    const elapsed = now - this.startTime;
    // console.log('dragged: ', this.dragged);
    // console.log('elapsed:  ', elapsed);

    if (this.left < 0 && this.dragged && elapsed > this.fpsInterval) {
      console.log('this.left: ', this.left);
      this.listElement.style.transform = `translateX(${this.left}px)`;

      const opacity = (Math.abs(this.left) / 100).toFixed(2);
      if (opacity < 1 && opacity.toString() !== this.background.style.opacity) {
        this.background.style.opacity = opacity.toString();
      }
      if (opacity >= 1) {
        this.background.style.opacity = '1';
      }

      this.startTime = Date.now();
    } else if (this.right > 0 && this.dragged && elapsed > this.fpsInterval) {
      console.log('this.right: ', this.right);
      this.listElement.style.transform = `translateX(${this.right}px)`;

      const opacity = (Math.abs(this.right) / 100).toFixed(2);
      if (
        opacity < 1 &&
        opacity.toString() !== this.backgroundLeft.style.opacity
      ) {
        this.backgroundLeft.style.opacity = opacity.toString();
      }
      if (opacity >= 1) {
        this.backgroundLeft.style.opacity = '1';
      }

      this.startTime = Date.now();
    }
  }

  onClicked() {
    if (this.props.onSwipe) {
      this.props.onSwipe();
    }
  }

  onSwiped() {
    if (this.props.onSwipe) {
      this.props.onSwipe();
    }
  }

  render() {
    return (
      <>
        <div className="Wrapper" ref={div => (this.wrapper = div)}>
          <div ref={div => (this.background = div)} className="Background">
            {this.props.background ? (
              this.props.background
            ) : (
              <span>Delete</span>
            )}
          </div>
          <div
            ref={div => (this.backgroundLeft = div)}
            className="BackgroundLeft"
          >
            <span>Delete</span>
          </div>
          <div
            onClick={this.onClicked}
            ref={div => (this.listElement = div)}
            onMouseDown={this.onDragStartMouse}
            onTouchStart={this.onDragStartTouch}
            className="ListItem"
          >
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

export default SwipeableListItem;
