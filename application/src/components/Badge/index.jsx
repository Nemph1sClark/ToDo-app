import React from 'react';
import classNames from 'classnames' // A module to use 'className' more easier

import './Badge.scss'; // Styles

const Badge = ({ color, onClick, className }) => <div onClick={onClick} className={classNames('badge',  {[`badge--${color}`]: color}, className)}></div>

export default Badge;