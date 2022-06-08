import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import './styles/routes.scss';

const Routing = () => {
  const [text, setText] = useState('');

  const testFun = (test = 'about') => {
    setText(test);
  }


  return (
    <Router>
      
        <Header />
          <div className='mainWrap'>
            <div  className={'circle circleTop ' + text}></div>
            <div  className={'circle circleBottom ' + text}></div>
          <Routes>
            <Route path={"/about"} element={<About testFun={testFun} />} />
            <Route path={"/project/:id"} element={<Project testFun={testFun} />} />
            <Route path="*" element={<Navigate to="/about" />} />
            
          </Routes>
          </div>
        
    </Router>
  );
};
export default Routing;

