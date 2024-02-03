import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState,useEffect } from "react";
import Home from './Components/Homepage/Home';
import Footer from './Components/Footer/Footer';
import Astrologers from './Components/Astrologers/Astrologers';
import TalkAstrologer from './Components/TalkAstrologer/TalkAstrologer';
import FreeKundali from './Components/FreeKundali/FreeKundali';
import Horoscope from './Components/Horoscope/Horoscope';
import Report from './Components/Reports/Report';
import Report24 from './Components/Report2024/Report24';
import BookAPooja from './Components/BookPooja/BookAPooja';
import Cart from './Components/Cart/Cart';
import Pooja from './Components/Manokamna pooja/Pooja';
import BlogDetails from './Components/BlogDescription/BlogDetails';
import Blogs from './Components/BlogsPage/Blogs';
import Payment from './Components/Payment/Payment';
import ProductsPage from './Components/Products/ProductsPage';
import Login from './Components/Navbar/Login';
import ScrollToTop from './Components/Cart/ScrollToTop'

function App() {
  const [action, setAction] = useState("");
  const [balance, setbalance] = useState(1000);

  let bal = balance;
  // CODE FOR HOME PAGE (Balance) START
  function cut() {
    setbalance(() => {
      return bal - 50;
    })
  }


  
  return (
    <div className="App bg-[#F8F8F8] ">
   
      <Navbar balance={balance}/>
      <Router>
      <ScrollToTop />

        <Routes>
        <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home cut={cut}/>} />
          <Route path='/chatastrologer' element={<Astrologers/>} />
          <Route path='/talkastrologer' element={<TalkAstrologer/>} />
          <Route path='/freekundali' element={<FreeKundali />} />
          <Route path='/horoscope' element={<Horoscope />} />
          <Route path='/report' element={<Report setAction={setAction} action={action} />} />
          <Route path='/report24' element={<Report24 />} />
          <Route path='/pooja' element={<BookAPooja />} />
          <Route path='/cart' element={<Cart setAction={setAction} action={action} />}  />
          <Route path='/manokamnapooja' element={<Pooja />} />
          <Route path='/blogdetails' element={<BlogDetails />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/product' element={<ProductsPage />} />


        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
