import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './index.css';
import Home from './Frontpage/Home';
import Search from './components/search';
import Info from './components/Info';
import VirtualModel from "./components/VirtualModel"
import reportWebVitals from './reportWebVitals';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                     <Route
                        path="/search"
                        element={<Search />}
                    />
                     <Route
                        path="/Virtual-Garden"
                        element={<VirtualModel />}
                    />
                     <Route
                        path="/search/info"
                        element={<Info />}
                    />
                     <Route
                        path="/about"
                        element={<About />}
                    />
                     
                  {/*<Route
                        path="/contactus"
                        element={<ContactUs />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    /> */}
                </Routes>
            </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
