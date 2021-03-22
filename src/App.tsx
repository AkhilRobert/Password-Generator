import React, {ChangeEvent, Component} from 'react';
import './App.scss';


interface StateType {
    currentText: string,
    upCount: number,
    lowCount: number,
    numCount: number,
    specialCount: number
}

enum Value {
    UPPER,LOWER, NUMBER, SPECIAL
}

class App extends Component<any, StateType> {

    state = {
        currentText: "bullshit",
        upCount: 0,
        lowCount: 0,
        numCount: 0,
        specialCount: 0,
    }

    getPassword = () => {
        this.setState({
            currentText: this.generateRandomPassword(this.state.upCount, this.state.lowCount, this.state.numCount, this.state.specialCount)
        })
    }

    private generateRandomPassword(up: number, low: number, num: number, special: number): string  {

        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
        const numbers = '0123456789'
        const specialCharacters = '~!@#$%^&*()_+/{}|[]\\'
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

    eventHandler = (event: ChangeEvent<HTMLInputElement>, value: Value) => {
        switch (value) {
            case Value.UPPER:
                this.setState({upCount: parseInt(event.target.value)})
                break;
            case Value.LOWER:
                this.setState({lowCount: parseInt(event.target.value)})
                break;
            case Value.NUMBER:
                this.setState({numCount: parseInt(event.target.value)})
                break;
            case Value.SPECIAL:
                this.setState({specialCount: parseInt(event.target.value)})
                break;
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.currentText}</h1>
                <input type="number" placeholder={"no of upperCase"} onChange={event => this.eventHandler(event, Value.UPPER)}/>
                <input type="number" placeholder={"no of lower"} onChange={event => this.eventHandler(event, Value.LOWER)}/>
                <input type="number" placeholder={"no of special"} onChange={event => this.eventHandler(event, Value.SPECIAL)}/>
                <input type="number" placeholder={"no of number"} onChange={event => this.eventHandler(event, Value.NUMBER)}/>
                <button onClick={this.getPassword}>Generate password</button>
            </div>
        );
    }
}

export default App;
