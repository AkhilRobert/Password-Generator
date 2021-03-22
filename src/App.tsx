import React, {ChangeEvent, Component} from 'react';
import './App.scss';

import Settings, {ID} from "./components/Settings";
import Length from "./components/Length";
import Result from "./components/Result";

interface StateType {
    currentText: string,
    length: number,
    options: Options
}

interface Options {
    upperCaseEnabled?: boolean,
    lowerCaseEnabled?: boolean,
    numbersEnabled?: boolean,
    specialSymbolEnabled?: boolean
}


class App extends Component<any, StateType> {

    state = {
        currentText: "Click Generate",
        length: 16,
        options: {
            upperCaseEnabled: true,
            lowerCaseEnabled: false,
            numbersEnabled: true,
            specialSymbolEnabled: false,
        }
    }

    getPassword = () => {
        this.setState({
            currentText: "TODO"
        })
    }

    lengthChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({length: parseInt(event.target.value)})
    }

    optionChangeHandler(event: ChangeEvent<HTMLInputElement>, id: ID) {
        switch (id) {
            case ID.UPPERCASE:
                this.setState((state, _) => ({options: {upperCaseEnabled: !state.options.upperCaseEnabled}}))
                break;
            case ID.LOWERCASE:
                this.setState((state, _) => ({options: {upperCaseEnabled: !state.options.lowerCaseEnabled}}))
                break;
            case ID.NUMBER:
                this.setState((state, _) => ({options: {upperCaseEnabled: !state.options.numbersEnabled}}))
                break;
            case ID.SPECIAL:
                this.setState((state, _) => ({options: {upperCaseEnabled: !state.options.specialSymbolEnabled}}))
                break;
        }
    }

    render() {
        return (
            <div>
                <Result value={this.state.currentText}/>
                <Length length={this.state.length} onChange={this.lengthChangeHandler}/>
                <Settings lowerCaseEnabled={this.state.options.lowerCaseEnabled}
                          numbersEnabled={this.state.options.numbersEnabled}
                          upperCaseEnabled={this.state.options.upperCaseEnabled}
                          specialSymbolEnabled={this.state.options.specialSymbolEnabled}
                />
                <button onClick={this.getPassword}>Generate password</button>
            </div>
        );
    }

    private generateRandomPassword(up: number, low: number, num: number, special: number): string {

        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
        const numbers = '0123456789'
        const specialCharacters = '~!@#$%^&*()_+/{}|[]\\<>,.?'
        let finalString = '';

        finalString += this.generateRandom(up, upperCase);
        finalString += this.generateRandom(low, lowerCase);
        finalString += this.generateRandom(num, numbers);
        finalString += this.generateRandom(special, specialCharacters);

        return finalString;
    }

    private generateRandom(count: number, data: string): string {
        let finalString = ''
        for (let i = 0; i < count; i++) {
            finalString += data.charAt(Math.floor(Math.random() * data.length))
        }

        return finalString
    }
}

export default App;
