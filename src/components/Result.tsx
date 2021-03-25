import { Component } from 'react';
import styles from './styles/Length.module.scss';

interface propType {
  value: string;
}

class Result extends Component<propType, any> {
  render() {
    return (
      <div className={styles.container}>
        <h3>{this.props.value}</h3>
      </div>
    );
  }
}

export default Result;
