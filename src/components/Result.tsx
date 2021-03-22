import React, {Component} from 'react';

interface propType {
    value: string,
}

class Result extends Component<propType, any> {
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
            </div>
        );
    }
}

export default Result;
