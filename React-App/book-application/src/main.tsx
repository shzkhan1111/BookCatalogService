import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import store from "./store/store.js";
import { Provider } from 'react-redux';

const rootElement = document.getElementById("root");


if(rootElement){
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <App></App>
      </Provider>
    </StrictMode>
  )
}
else{
  console.log("Page Not Created ")
}