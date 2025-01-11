import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
  return (
  <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="*" element={<NotFound />} /> 
   </Routes>
   <Footer/>
  </>
  );
}

export default App;
