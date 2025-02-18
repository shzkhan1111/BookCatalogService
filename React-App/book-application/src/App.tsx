import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BookPageMain from './components/BookList/BookPageMain.jsx'; 
import Header from './components/BookList/Header.jsx'; 
import  HomePage  from "./components/Home/HomePage.jsx";
import NavigationButtons from './components/Navigation/Navigation.jsx';

function App() {
  return (
    <>
     <Router>
     <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/:id" element={<HomePage></HomePage>}></Route>
        <Route path="/books" element={<BookPageMain></BookPageMain>}></Route>
        <Route path='*' element={<HomePage />}></Route>
      </Routes>
      <NavigationButtons></NavigationButtons>
     </Router>
    </>
  );
}

export default App
