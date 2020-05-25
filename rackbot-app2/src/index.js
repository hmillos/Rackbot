import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
