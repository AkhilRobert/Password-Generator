import { Component } from 'react';
import styles from './styles/options.module.scss';
import ToggleButton from '../UI/Toggle';

interface OptionsProps {
  id: string;
  text: string;
  enabled: boolean;
  onChanged: () => void;
}

class Options extends Component<OptionsProps, any> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.right__side}>
          <label className={styles.label} htmlFor={this.props.id}>
            {this.props.text}
          </label>
        </div>
        <div className={styles.left__side}>
          <ToggleButton
            checked={this.props.enabled}
            onChange={this.props.onChanged}
            id={this.props.id}
          />
        </div>
      </div>
    );
  }
}

export default Options;
