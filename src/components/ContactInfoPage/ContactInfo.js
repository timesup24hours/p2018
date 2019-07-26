import React from 'react';
import styles from './index.module.css';

class ContactInfo extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(result => {
        this.setState({ users: result });
      });
  }
  render() {
    return (
      <div className={`${styles.container}`}>
        <div className={styles.card}>
          <div>Name: Huanlin Huang</div>
          <div>Phone: 415-361-9522</div>
          <div>email: huanlinhuang@gmail.com</div>
        </div>
      </div>
    );
  }
}
export default ContactInfo;
