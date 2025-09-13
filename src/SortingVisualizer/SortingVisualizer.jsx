// src/SortingVisualizer/SortingVisualizer.jsx

import React from 'react';
import './SortingVisualizer.css';

// Colors
const PRIMARY_COLOR = 'turquoise';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 50; i++) {
      array.push(randomIntFromInterval(50, 400));
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        <h2>Sorting Visualizer 🎉</h2>
        <p>{array.length} bars generated</p>

        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: '5px',
              display: 'inline-block',
              margin: '0 1px',
            }}></div>
        ))}

        <div className="controls">
          <button onClick={() => this.resetArray()}>Generate New Array</button>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
