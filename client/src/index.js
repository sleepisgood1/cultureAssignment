import React from 'react';
import App from './component/App.jsx';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App tab="home"/>);
