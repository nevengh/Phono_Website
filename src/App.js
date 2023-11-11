import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Module/Home/Home';
import About from './Module/About/About';
import LogIn from './Module/LogIn/LogIn';

function App() {
  return (
    <>
    
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/login' element={<LogIn/>} />
      </Routes>
    </>
  );
}

export default App;
