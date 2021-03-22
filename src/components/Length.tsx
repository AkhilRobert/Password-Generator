import React, {ChangeEvent, Component} from 'react';

interface propType {
    length: number,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

class Length extends Component<propType, any> {


    render() {
        return (
            <div>
                <p>length: {this.props.length}</p>
                <input type="range" min={0} max={50} value={this.props.length}
                       onChange={event => this.props.onChange(event)}/>
            </div>
        );
    }
}

export default Length;
