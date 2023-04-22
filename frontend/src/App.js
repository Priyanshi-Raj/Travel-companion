import "./App.css";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from "./components/Footer/Footer";
import Budget from "./components/Budget";
import SignUp from "./components/Choice";
import Signup from "./components/Signup";
import LocalRegisteration from "./components/LocalRegisteration";
import Chat from "./components/Chat";
import CardPage from "./components/CardPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up/signup" element={<Signup />} />
        <Route path="/cardpage" element={<CardPage />} />
        <Route path="/local" element={<LocalRegisteration />} />
      </Routes>
      {/* <MessengerCustomerChat pageId="100091854913747" appId="574453728119891" /> */}
      <Chat />
      <Footer />
    </>
  );
}

export default App;
