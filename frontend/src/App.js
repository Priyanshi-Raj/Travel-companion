import "./App.css";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Budget from "./components/Budget";
import SignUp from "./components/SignUp";
import LocalRegisteration from "./components/LocalRegisteration";
// import Header from './components/header/Header';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/local" element={<LocalRegisteration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
