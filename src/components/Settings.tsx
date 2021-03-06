import { Component } from 'react';
import Options from '../UI/Options';

interface SettingsProps {
  upperCaseEnabled: boolean;
  lowerCaseEnabled: boolean;
  numbersEnabled: boolean;
  specialSymbolEnabled: boolean;
  changeHandler: (id: ID) => void;
}

export enum ID {
  UPPERCASE,
  LOWERCASE,
  NUMBER,
  SPECIAL,
}

class Settings extends Component<SettingsProps, any> {
  render() {
    return (
      <div>
        <p>Settings</p>
        <Options
          id={'uppercase'}
          text={'include uppercase'}
          enabled={this.props.upperCaseEnabled}
          onChanged={() => this.props.changeHandler(ID.UPPERCASE)}
        />
        <Options
          id={'lowercase'}
          text={'include lowercase'}
          enabled={this.props.lowerCaseEnabled}
          onChanged={() => this.props.changeHandler(ID.LOWERCASE)}
        />
        <Options
          id={'number'}
          text={'inculde number'}
          enabled={this.props.numbersEnabled}
          onChanged={() => this.props.changeHandler(ID.NUMBER)}
        />
        <Options
          id={'special_characters'}
          text={'include symbols'}
          enabled={this.props.specialSymbolEnabled}
          onChanged={() => this.props.changeHandler(ID.SPECIAL)}
        />
      </div>
    );
  }
}

export default Settings;
