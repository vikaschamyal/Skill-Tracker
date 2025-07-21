// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import SkillsPage from './pages/SkillsPage';
import FlashcardPage from './pages/FlashcardPage';
import NotesPage from './pages/NotesPage';
import QuestionBank from './pages/QuestionBank'
import InterviewQuestions from './pages/InterviewQuestions';
import CSSGuide from './pages/CSSGuide';
import ES6ConceptsProject from './pages/ES6ConceptsProject';
import Footer from './components/Footer';
import Responsive from './pages/Responsive';
import LogicQuestions from './pages/LogicQuestions';


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  

  return (
    <Router>
      
      {isAuthenticated && <Navbar />}
      <div className="flex">
        {isAuthenticated && <Sidebar />}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            {isAuthenticated && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/css-guide" element={<CSSGuide />} />
                <Route path="/projects/es6" element={<ES6ConceptsProject />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/flashcards" element={<FlashcardPage />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route path="/react" element={<QuestionBank />} />
                <Route path="/interview" element={<InterviewQuestions />} />
                <Route path="/responsive" element={<Responsive />} />
                <Route path="/LogicQues" element={<LogicQuestions />} />
                

              </>
              
            )}

            <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
          </Routes>
          {isAuthenticated && <Footer />}
        </div>
      </div>
    </Router>
  );
}

export default App;
