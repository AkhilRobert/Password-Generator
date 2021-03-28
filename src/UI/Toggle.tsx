import { Component } from 'react';
import styles from './styles/toggle.module.scss';

interface PropType {
  checked: boolean;
  onChange: () => void;
  id: string;
}

class ToggleButton extends Component<PropType, any> {
  render() {
    return (
      <label className={styles.switch} htmlFor={this.props.id}>
        <input
          type="checkbox"
          className={styles.input}
          checked={this.props.checked}
          onChange={this.props.onChange}
          id={this.props.id}
        />
        <span className={[styles.slider, styles.round].join(' ')}></span>
      </label>
    );
  }
}

export default ToggleButton;
