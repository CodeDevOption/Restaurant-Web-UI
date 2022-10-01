import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)