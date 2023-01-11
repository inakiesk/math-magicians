import React from 'react';
import CalculatorBtn from './CalculatorBtn';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
    };
  }

  render() {
    const { display } = this.state;
    return (
      <div className="calculator">
        <div className="displayScreen">
          {display}
        </div>
        <div className="calcBody">
          <div className="calcRow">
            <CalculatorBtn value="Hello World" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
