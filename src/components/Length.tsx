import { ChangeEvent, Component } from 'react';
import styles from './styles/Length.module.scss';

import styled from 'styled-components';

interface propType {
  length: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  percentage: number;
}

class Length extends Component<propType, any> {
  render() {
    return (
      <div className={styles.container}>
        <p>
          length: <span>{this.props.length}</span>
        </p>
        <div className={styles.range__container}>
          <div>8</div>
          <StyledRangeSlider
            percentage={this.props.percentage}
            type="range"
            min={8}
            max={50}
            value={this.props.length}
            onChange={(event) => this.props.onChange(event)}
          />
          <div>50</div>
        </div>
      </div>
    );
  }
}

export default Length;

const StyledRangeSlider = styled.input<{ percentage: number }>`
  display: block;
  -webkit-appearance: none;
  height: 5px;
  width: 400px;
  border-radius: 5px;
  outline: none;
  background: ${(props) =>
    `linear-gradient(to right, #1b01e4, #1b01e4 ${props.percentage}%, #4d4f6c ${props.percentage}%, #4d4f6c 100%)`};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #fff;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
  }

  // Firefox
  &::-moz-range-thumb {
    -webkit-appearance: none;
    background-color: #fff;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
  }
`;
