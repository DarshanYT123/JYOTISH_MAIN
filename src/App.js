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

function App() {
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
        <Routes>
          <Route path='/' element={<Home cut={cut}/>} />
          <Route path='/chatastrologer' element={<Astrologers/>} />
          <Route path='/talkastrologer' element={<TalkAstrologer/>} />
          <Route path='/freekundali' element={<FreeKundali />} />
          <Route path='/horoscope' element={<Horoscope />} />
          <Route path='/report' element={<Report />} />
          <Route path='/report24' element={<Report24 />} />
          <Route path='/pooja' element={<BookAPooja />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/manokamnapooja' element={<Pooja />} />
          <Route path='/blogdetails' element={<BlogDetails />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/payment' element={<Payment />} />


        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
