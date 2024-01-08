import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katieZaferesImg from './images/katie-zaferes.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card img={katieZaferesImg} rating="5.0" reviewCount={6} country="USA" title="Life Lessons with Katie Zaferes" price={136} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
