import React from 'react';

import styles from './index.css';

// export default ({ CustomhandleOnClick }) => {
//   let spanRef;
//   const handleOnClick = e => {
//     if (CustomhandleOnClick) CustomhandleOnClick(e);
//     spanRef.classList.toggle(styles.trigger);
//   };
//   return (
//     <div className={styles.wrapper} onClick={handleOnClick}>
//       <div className={styles.spanWrapper}>
//         <span ref={ref => (spanRef = ref)} className={styles.stick} />
//       </div>
//     </div>
//   );
// };

export default class MaterialDesignBurgerMenu extends React.Component {
  state = {};

  handleOnClick = e => {
    if (this.props.CustomhandleOnClick) this.props.CustomhandleOnClick(e);
    this.spanRef.classList.toggle(styles.trigger);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.props.open && this.spanRef.classList.contains(styles.trigger)) {
      this.spanRef.classList.remove(styles.trigger);
    } else if (
      this.props.open &&
      !this.spanRef.classList.contains(styles.trigger)
    ) {
      this.spanRef.classList.add(styles.trigger);
    }
  }

  render() {
    return (
      <div className={styles.wrapper} onClick={this.handleOnClick}>
        <div className={styles.spanWrapper}>
          <span ref={ref => (this.spanRef = ref)} className={styles.stick} />
        </div>
      </div>
    );
  }
}
