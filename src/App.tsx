import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'



import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';



function App() {
  return (
    <>
    <Router>
      <main>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Routes> 
      </main>
    </Router>
    </>
  );
}

export default App;
