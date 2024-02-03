import React from 'react'

const TabNav = ({ id, title, activeTab, setActiveTab }) => {
     const handleClick = () => {
          setActiveTab(id);
     };

     return (
          <li onClick={handleClick} className={" cursor-pointer rounded-full px-3  md:px-10 py-2.5  text-[color:var(--Pure-White,#FFF)] text-[14px] md:text-[18px] font-Lexend not-italic font-bold leading-[normal]  " + (activeTab === id ? "bg-[#FFA300] text-white rounded-full  border-transparent text-[color:var(--Pure-White,#FFF)] text-[14px] md:text-[18px] font-Lexend not-italic font-bold leading-[normal] shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)]  " : "border-transparent  text-black text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] md:text-[18px] font-Lexend not-italic font-medium leading-[normal]")}>
               {title}
          </li>
     )
}

export default TabNav