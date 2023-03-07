import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/Components/App'
import './index.css'
import { BrowseRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowseRouter>
        <App />
    </BrowseRouter>
);
