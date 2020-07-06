import React from 'react';
import classNames from 'classnames'

import './Badge.scss'; // Styles

const Badge = ({ color, userClick, className }) => <div onClick={userClick} className={classNames('badge',  {[`badge--${color}`]: color}, className)}></div>

export default Badge;