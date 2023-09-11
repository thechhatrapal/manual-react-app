// import validator from "validator";
// import isEmail from "validator/lib/isEmail";
// import { TripleMe } from "./TripleMe";

// console.log('isthere', validator.isEmail('john@gmail.com'))
// console.log('isthere', isEmail('john@gmail.com'))
// console.log('tripleme', TripleMe(30))

import React from 'react'
import ReactDom from 'react-dom/client'
import './styles/main.scss'
function App() {
  return (
    <div className='App'>App</div>
  )
}

export default App

// const el = document.getElementById("app");

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<><App /></>);
if (module.hot) {
    module.hot.accept()
}