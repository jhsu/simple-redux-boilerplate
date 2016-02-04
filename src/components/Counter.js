import React, { Component, PropTypes } from 'react';
import Seamstress from 'react-seamstress';
import classes from './Counter.css';

const styleConfig = {
  styles: {
    ':base': ['counter-container'],
    '[counter=0]': classes.zero,
    '::numLabel': classes.numLabel,
    '::counterEven': classes.counterEven,
  }
};

class Counter extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  render() {
    let styles = this.props.computedStyles;
    return (
      <div {...styles.root}>
        <div {...styles.numLabel}>{this.props.counter}</div>
        {/* Below, the even or odd statement is simply used to demonstrate how one could
        easily use a ternary operator to conditionally show an 'even' or 'odd' string
        based on the counter's value on state. */}
        <div {...styles.counterEven}>{this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
        <br />
        <div className="counter-buttons">
          <button onClick={() => {this.handleDecrement();}}>-</button>
          <button onClick={() => {this.handleIncrement();}}>+</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default Seamstress.createContainer(Counter, styleConfig)
