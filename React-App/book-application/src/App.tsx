import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BookPageMain from './components/BookList/BookPageMain.jsx'; 
import Header from './components/BookList/Header.jsx'; 
import  HomePage  from "./components/Home/HomePage.jsx";
import NavigationButtons from './components/Navigation/Navigation.jsx';
import { V } from 'vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P.js';

// class KeyValue<K , V >{
//   key : K;
//   value : V;

//   constructor(key : K ,value : V ) {
//     this.key = key;
//         this.value = value;
//   }
// }
function mergeObjects<T , U>(obj1 : T , obj2 : U) : T & U{
  return {...obj1 , ...obj2};
}

function App() {
  debugger;
  const user = { role: 454 ,name: "Alice", age: 30 };
  const job = { role: "Developer", salary: 50000 };
  const merged = mergeObjects(user , job);
  console.log(merged);
  // const pairs : KeyValue<string, number>[] = [];

  // pairs.push(new KeyValue<string, number>("age", 25));
  // pairs.push(new KeyValue<string, number>("height", 100));

  // pairs.forEach(p => {
  //   console.log(`${p.key}: ${p.value}`);
  // });

  return (
    <>
     {/* <Router>
     <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/:id" element={<HomePage></HomePage>}></Route>
        <Route path="/books" element={<BookPageMain></BookPageMain>}></Route>
        <Route path='*' element={<HomePage />}></Route>
      </Routes>
      <NavigationButtons></NavigationButtons>
     </Router> */}
    </>
  );
}

export default App
