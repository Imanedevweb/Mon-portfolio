import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Assets/styles/index.scss';
import Header from "./components/Header/Header"
import HomePage from './Pages/HomePage/HomePage';
import ProjectsList from './components/ProjectList/ProjectList';
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import AboutMe from './components/About/AboutMe';
import Footer from "./components/Footer/Footer";
import reportWebVitals from './reportWebVitals';


// Créez une racine (root) avec createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Utilisez la méthode render sur la nouvelle racine
root.render(
  <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Projets" element={<ProjectsList />} />
          <Route path="projets/:id" element={<ProjectDetails />} />
          <Route path="/about-me" element={<AboutMe />}/>
        </Routes>
        <Footer />
      </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
