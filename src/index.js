import React from 'react';
import {render} from 'react-dom';
import data from './data'
import App from './App';
import './index.css';
//вывод приложения
render(<App data={data} />, document.getElementById('root'));
