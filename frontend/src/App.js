
import './App.css';
import Landing from './components/Landing'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import Header from './components/header/Header';

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Landing />} />
        
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
