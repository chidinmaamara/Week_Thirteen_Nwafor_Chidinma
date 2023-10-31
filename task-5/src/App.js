import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header /> 
        <Routes>
          <Route exact path="/" element={<CommentList />} />
          <Route path="/comments" element={<CommentList />} />
          <Route path="/add-comment" element={<CommentForm />} />
        </Routes>
    </div>
  );
}

export default App;