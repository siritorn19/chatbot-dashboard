import React from 'react';
// import { Helmet } from 'react-helmet';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Signin from './components/Signin';
import User from './components/User';
import Navbar from './components/Navbar'
import Signin from './components/Signin';
import './App.css';


export default function App() {
  // console.log(process.env.REACT_APP_X_API_KEY);
  // const token = localStorage.getItem('accessToken');

  // if(!token) {
  //   return <Signin />
  // }

  return (
    <div className="wrapper">
      <header>
        <Navbar/>
      </header>
    
      {/* <BrowserRouter>
          <Route path="/User">
            <User />
          </Route>
          <Route path="/">
            <User />
          </Route>
      </BrowserRouter> */}
      {/* <Signin/> */}
      <User />
    </div>
  );
}