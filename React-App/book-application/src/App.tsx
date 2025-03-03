import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BookPageMain from './components/BookList/BookPageMain.jsx'; 
import Header from './components/BookList/Header.jsx'; 
import  HomePage  from "./components/Home/HomePage.jsx";
import NavigationButtons from './components/Navigation/Navigation.jsx';
import { V } from 'vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P.js';

//overloading 
// function SomeFunction(arg: number): number;
// function SomeFunction(arg: string): string;
// function SomeFunction(): void;
// function SomeFunction(arg? : number | string) : number | string | void{
//   if(typeof arg === "number"){
//     return arg * 10;
//   }
//   if(typeof arg === "string"){
//     return arg.substring(0,2)
//   }
//   console.log("Written inside the function ")
//   return
// }

//generics 
// function SomeFunction<T>(arg : T) : T{

//   if(typeof arg == "string"){
//     console.log(arg.substring(0,2))
//   }
//   return arg;
// }
// interface LengthWise {
//   length: number;
// }
// function getLength<T extends LengthWise>(arg : T) : number{
//   console.log(arg.length)
//   return arg.length
// }
class Box<Y>{
  private v: Y
  
  constructor(v1 : Y) {
    this.v = v1;
  }

  getValue() : Y{
    if(typeof this.v === "string"){
      console.log(this.v.substring(0,5))
      return this.v
    }
    
    console.log("Not a string")

    return this.v
  }

}
function App() {
  let b = new Box<number>(5)
  let c = new Box<string>("4dedded")

  b.getValue();
  c.getValue()


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
