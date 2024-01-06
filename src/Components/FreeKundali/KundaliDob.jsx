import React, { useState, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
//import { useHistory } from 'react-router-dom';
import { redirect, useNavigate } from "react-router-dom";

const KundaliDob = () => {
  //const history = useHistory();
  const navigate = useNavigate();
  const [data, setData] = useState(undefined);
  const [data2, setData2] = useState(undefined);
  const [data3, setData3] = useState(undefined);
  const [data4, setData4] = useState(undefined);
  const [data5, setData5] = useState(undefined);
  const [data6, setData6] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedTab,setSelectedTab] = useState(0)
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";
  {
    console.log(userName);
  }
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";
  {
    console.log(userPassword);
  }

 
  const Day = ["Day","1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
  const Month = ["Month", "1", "2","3","4","5","6","7","8","9","10","11","12"];
  const Year = ["Year", "1", "2","3","4","5","6","7","8","9","10","11","12"];
  const Second = ["Second", "1", "2","3","4","5","6","7","8","9","10","11","12"];
  const Minute = ["Minute", "1", "2","3","4","5","6","7","8","9","10","11","12"];
  const Hours = ["Hours", "1", "2","3","4","5","6","7","8","9","10","11","12"];
  const options = ["Admin", "User"];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
  };
  const onOptionChangeHandler2 = (event) => {
    setData2(event.target.value);
  };
  const onOptionChangeHandler3 = (event) => {
    setData3(event.target.value);
  };

  const onOptionChangeHandler4 = (event) => {
    setData4(event.target.value);
  };
  const onOptionChangeHandler5 = (event) => {
    setData5(event.target.value);
  };
  const onOptionChangeHandler6 = (event) => {
    setData6(event.target.value);
  };


  return (
    <div className="">
      <div className="py-5 md:py-5">
    <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
    Get Your Kundli by Date Of Birth 
        </h1>
  </div>
   <div className="flex flex-row justify-center space-x-3 px-7 items-center shadow-[0px_-4px_12px_0px_rgba(0,0,0,0.25)_inset,0px_4px_7px_0px_rgba(0,0,0,0.25)_inset] rounded-[6px] border-[1.5px] border-solid border-[rgba(161,161,161,0.50)]">
      <div className=" py-7">
      <form action="">
              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                 Name
                </label>
                <input
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                  className="p-3 rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] border-[1.5px] border-solid  w-[743px] h-[45px]"
                  type="text"
                  autoComplete="off"
                  name="email"
                  placeholder="Name"
                />
              </div>
              <div className="flex justify-start  py-4 items-center">
              <div className=" flex flex-row items-center   w-[309px] px-0.5 h-[40px] bg-white border-[1.5px] border-[#A1A1A1] rounded-[4px] ">
              <div onClick={() => {setSelectedTab(0)}}  className={selectedTab == 0 ? "w-[50%] flex justify-center items-center h-[36px] bg-[#04B4DB] rounded-[3px] ": "w-[50%] flex justify-center items-center  bg-white rounded-sm"}>
              <p className={selectedTab == 0 ? "text-white font-Lexend  text-[color:var(--Pure-White,#FFF)] text-[14px] not-italic font-semibold leading-[normal]" : "text-black  text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Lexend not-italic font-normal leading-[normal]"}>Male</p>
              </div>
              <div onClick={() => {setSelectedTab(1)}}  className={selectedTab == 1 ? "w-[50%] flex justify-center items-center h-[36px] bg-[#04B4DB] rounded-[3px] ": "w-[50%] flex justify-center items-center  bg-white rounded-sm"}>
              <p className={selectedTab == 1 ? "text-white font-Lexend  text-[color:var(--Pure-White,#FFF)] text-[14px] not-italic font-semibold leading-[normal]" : "text-black  text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Lexend not-italic font-normal leading-[normal]"}>Female</p>
              </div>
              </div>
              </div>
              <div className="flex flex-row justify-between items-center py-2.5 ">
                <div className="flex flex-col justify-center relative min-w-[210px] h-[50px]">
                  <div className="flex justify-start py-2">
                              <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start  text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                 Day
                </label>
                </div>
                <div>
    <select
                    onChange={onOptionChangeHandler}
                    value={data}
                    name="role"
                    className="   text-start rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] border-[1.5px] border-solid appearance-none p-3 w-[100%] bg-[#FFF] text-[color:var(--grey-1,#A1A1A1)] text-[14px] font-Lexend not-italic font-normal leading-[normal] "
                  >
                    {Day.map((dayitem, index) => {
                      return (
                        <option key={index}>
                          <h2 className="text-[#0D0D0D] text-lg not-italic font-medium leading-[normal]">
                            {dayitem}
                          </h2>
                        </option>
                      );
                    })}
                  </select>
                  </div>
                  <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute top-5 right-0 flex items-center justify-center ">
                    <span className="text-[30px] text-black  ">
                    <GoChevronDown color="#A1A1A1" />
                                        </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center relative min-w-[210px] h-[50px]">
                  <div className="flex justify-start py-2">
                              <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start  text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                 Month
                </label>
                </div>
                <div>
    <select
                    onChange={onOptionChangeHandler2}
                    value={data2}
                    name="role"
                    className="   text-start rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] border-[1.5px] border-solid appearance-none p-3 w-[100%] bg-[#FFF] text-[color:var(--grey-1,#A1A1A1)] text-[14px] font-Lexend not-italic font-normal leading-[normal] "
                  >
                    {Month.map((monthitem, index) => {
                      return (
                        <option key={index}>
                          <h2 className="text-[#0D0D0D] text-lg not-italic font-medium leading-[normal]">
                            {monthitem}
                          </h2>
                        </option>
                      );
                    })}
                  </select>
                  </div>
                  <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute top-5 right-0 flex items-center justify-center ">
                    <span className="text-[30px] text-black  ">
                    <GoChevronDown color="#A1A1A1" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center relative min-w-[210px] h-[50px]">
                  <div className="flex justify-start py-2">
                              <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start  text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                 Year
                </label>
                </div>
                <div>
    <select
                    onChange={onOptionChangeHandler3}
                    value={data3}
                    name="role"
                    className="   text-start rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] border-[1.5px] border-solid appearance-none p-3 w-[100%] bg-[#FFF] text-[color:var(--grey-1,#A1A1A1)] text-[14px] font-Lexend not-italic font-normal leading-[normal] "
                  >
                    {Year.map((yearitem, index) => {
                      return (
                        <option key={index}>
                          <h2 className="text-[#0D0D0D] text-lg not-italic font-medium leading-[normal]">
                            {yearitem}
                          </h2>
                        </option>
                      );
                    })}
                  </select>
                  </div>
                  <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute top-5 right-0 flex items-center justify-center ">
                    <span className="text-[30px] text-black  ">
                    <GoChevronDown color="#A1A1A1" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center py-7 ">
                <div className="flex flex-col justify-center relative min-w-[210px] h-[50px]">
                  <div className="flex justify-start py-2">
                              <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start  text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                 Hours
                </label>
                </div>
                <div>
    <select
                    onChange={onOptionChangeHandler4}
                    value={data4}
                    name="role"
                    className="   text-start rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] border-[1.5px] border-solid appearance-none p-3 w-[100%] bg-[#FFF] text-[color:var(--grey-1,#A1A1A1)] text-[14px] font-Lexend not-italic font-normal leading-[normal] "
                  >
                    {Hours.map((hoursitem, index) => {
                      return (
                        <option key={index}>
                          <h2 className="text-[#0D0D0D] text-lg not-italic font-medium leading-[normal]">
                            {hoursitem}
                          </h2>
                        </option>
                      );
                    })}
                  </select>
                  </div>
                  <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute top-5 right-0 flex items-center justify-center ">
                    <span className="text-[30px] text-black  ">
                    <GoChevronDown color="#A1A1A1" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center relative min-w-[210px] h-[50px]">
                  <div className="flex justify-start py-2">
                              <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start  text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                 Minute
                </label>
                </div>
                <div>
    <select
                    onChange={onOptionChangeHandler5}
                    value={data5}
                    name="role"
                    className="   text-start rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] border-[1.5px] border-solid appearance-none p-3 w-[100%] bg-[#FFF] text-[color:var(--grey-1,#A1A1A1)] text-[14px] font-Lexend not-italic font-normal leading-[normal] "
                  >
                    {Minute.map((minuteitem, index) => {
                      return (
                        <option key={index}>
                          <h2 className="text-[#0D0D0D] text-lg not-italic font-medium leading-[normal]">
                            {minuteitem}
                          </h2>
                        </option>
                      );
                    })}
                  </select>
                  </div>
                  <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute top-5 right-0 flex items-center justify-center ">
                    <span className="text-[30px] text-black  ">
                    <GoChevronDown color="#A1A1A1" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center relative min-w-[210px] h-[50px]">
                  <div className="flex justify-start py-2">
                              <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start  text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                 Second
                </label>
                </div>
                <div>
    <select
                    onChange={onOptionChangeHandler6}
                    value={data6}
                    name="role"
                    className="   text-start rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] border-[1.5px] border-solid appearance-none p-3 w-[100%] bg-[#FFF] text-[color:var(--grey-1,#A1A1A1)] text-[14px] font-Lexend not-italic font-normal leading-[normal] "
                  >
                    {Second.map((seconditem, index) => {
                      return (
                        <option key={index}>
                          <h2 className="text-[#0D0D0D] text-lg not-italic font-medium leading-[normal]">
                            {seconditem}
                          </h2>
                        </option>
                      );
                    })}
                  </select>
                  </div>
                  <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute top-5 right-0 flex items-center justify-center ">
                    <span className="text-[30px] text-black  ">
                    <GoChevronDown color="#A1A1A1" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                 Birth Place
                </label>
                <input
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                  className="p-3 rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] border-[1.5px] border-solid  w-[743px] h-[45px]"
                  type="text"
                  autoComplete="off"
                  name="email"
                  placeholder="Birth Place"
                />
              </div>
              <div className="pt-4">
              <button className="w-[750px] font-Lexend py-2.5 flex justify-center items-center rounded-[16px] bg-[#04B4DB] text-[color:var(--Pure-White,#FFF)] text-[16px] not-italic font-semibold leading-[normal] ">Generate Horoscope</button>
              </div>
            </form>
      </div>
      <div className=" w-[70rem] ">
        <img src="/img/circleimg.png" alt="" />
      </div>

      </div>
</div>   
  );
};

export default KundaliDob
