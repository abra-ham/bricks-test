import React from 'react';
import icons from './iconList';

const Icon = ({ name, ...props }) => <img src={icons[name]} {...props} />

export default Icon;
