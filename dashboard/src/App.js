import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,  } from 'react-router-dom';
import Signin from './SigIn';
import adminDashboard from './adminDashboard';

export default function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
          <Route path="/adminDashboard">
            <adminDashboard />
          </Route>
          <Route path="/">
            <adminDashboard />
          </Route>
      </BrowserRouter>
    </div>
  );
}