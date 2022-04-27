import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Dashboard from '../src/Dashboard/dashboard'


<BrowserRouter>
      <Routes>
   
           <Route path="dsashboard" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>


reportWebVitals();
