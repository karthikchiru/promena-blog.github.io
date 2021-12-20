import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const ProgressCircle = (props) => {
  const { radius, stroke, progress } = props
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className='progressCircleWrapper'
    >
      <circle

        // stroke='blue'
        fill='transparent'
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        // strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

ProgressCircle.propTypes = {
  radius: PropTypes.number,
  stroke: PropTypes.number,
  progress: PropTypes.number
};

ProgressCircle.defaultProps = {
  radius: 15,
  stroke: 2
};

export default ProgressCircle;
