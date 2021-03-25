import { ChangeEvent, Component } from 'react';

interface propType {
  length: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class Length extends Component<propType, any> {
  render() {
    return (
      <div>
        <p>length: {this.props.length}</p>
        <span>8</span>
        <input
          type="range"
          min={8}
          max={50}
          value={this.props.length}
          onChange={(event) => this.props.onChange(event)}
        />
        <span>50</span>
      </div>
    );
  }
}

export default Length;
