import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import '../sass/index.scss';

import PublicRoutes from './PublicRoutes';

const rootElement = document.getElementById('app');

render (<PublicRoutes />, rootElement);
