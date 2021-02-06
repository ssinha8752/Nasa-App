import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Header from './Components/Header'
import Landing from './Components/Landing'

function App() {
  return (
  <BrowserRouter>
    <div>
      <Route component={Header} path="/" exact/>
      <Route component={Landing} path="/login" exact/>
    </div>
  </BrowserRouter>
    );
}

export default App;
