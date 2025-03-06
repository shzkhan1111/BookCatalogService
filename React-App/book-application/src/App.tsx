import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BookPageMain from './components/BookList/BookPageMain.jsx'; 
import Header from './components/BookList/Header.jsx'; 
import  HomePage  from "./components/Home/HomePage.jsx";
import NavigationButtons from './components/Navigation/Navigation.jsx';
import { useSelector } from "react-redux";
import { RootState } from './store/store.js';
import LoginPage from './components/Authentication/LoginPage.jsx';
import ProtectedRoute from './route-gaurds/ProtectedRoute.js';
import { logout } from './store/authSlice.js';
import LoginPage from './components/Authentication/re';



function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <>
     <Router>
     <Header></Header>
     {/* {isAuthenticated &&  <LogoutPage />} */}
      <Routes>
        
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />}></Route>
        <Route path="/:id" element={<HomePage />}></Route>
        <Route path="/books" element={<ProtectedRoute element={<BookPageMain />} />}></Route>
        <Route path="/register" element={<RegisterFormPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='*' element={<HomePage />}></Route>
      </Routes>
      {isAuthenticated && <NavigationButtons />}
     </Router>
    </>
  );
}

export default App
