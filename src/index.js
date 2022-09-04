import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from './reportWebVitals';
import Root from './route';
import { BrowserRouter } from 'react-router-dom';
import Movie from './pages/movie_TV';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
    <BrowserRouter>
   <Root />
    
   </BrowserRouter>
    </div>
);
reportWebVitals();
