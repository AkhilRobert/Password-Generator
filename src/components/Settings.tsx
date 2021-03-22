import React, {Component} from 'react';
import Options from "../UI/Options";

interface SettingsProps {
    upperCaseEnabled: boolean,
    lowerCaseEnabled: boolean,
    numbersEnabled: boolean,
    specialSymbolEnabled: boolean,
}

export enum ID {
    UPPERCASE,
    LOWERCASE,
    NUMBER,
    SPECIAL
}

class Settings extends Component<SettingsProps, any> {
    render() {
        return (
            <div>
                <p>Settings</p>
                <Options id={"uppercase"}
                         text={"uppercase"}
                         enabled={this.props.upperCaseEnabled}
                />
                <Options id={"lowercase"}
                         text={"lowercase"}
                         enabled={this.props.lowerCaseEnabled}
                />
                <Options
                    id={"number"}
                    text={"number"}
                    enabled={this.props.numbersEnabled}
                />
                <Options
                    id={"special_characters"}
                    text={"special characters"}
                    enabled={this.props.specialSymbolEnabled}
                />
            </div>
        );
    }
}

export default Settings;
