import React, {Component} from 'react';
import styles from './options.module.scss'

interface OptionsProps {
    id: string,
    text: string,
    enabled: boolean,
}

class Options extends Component<OptionsProps, any> {
    render() {
        return (
            <div>
                <label className={styles.label} htmlFor={this.props.id}>{this.props.text}</label>
                <input className={styles.input}
                       type="checkbox" id={this.props.id}
                       checked={this.props.enabled}
                />
            </div>
        );
    }
}

export default Options;
