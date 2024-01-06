import React from 'react'

const TabNav = ({ id, title, activeTab, setActiveTab }) => {
     const handleClick = () => {
          setActiveTab(id);
     };

     return (
          <li onClick={handleClick} className={" cursor-pointer rounded-[6px]   px-10 py-2.5  text-[color:var(--Pure-White,#FFF)] text-[18px] font-Lexend not-italic font-bold leading-[normal]  " + (activeTab === id ? "bg-[#FFA300] text-white rounded-[4px] shadow-[0px_4px_10px_0px_rgba(174,174,174,0.25)] border-transparent text-[color:var(--Pure-White,#FFF)] text-[18px] font-Lexend not-italic font-bold leading-[normal] " : "border-transparent  text-black text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] font-Lexend not-italic font-medium leading-[normal]")}>
               {title}
          </li>
     )
}

export default TabNav