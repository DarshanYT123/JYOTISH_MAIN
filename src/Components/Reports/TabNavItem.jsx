import React from 'react'

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
     const handleClick = () => {
          setActiveTab(id);
     };

     return (
        <div className='p-1'>
          <li onClick={handleClick} className={" cursor-pointer rounded-full text-lg font-medium font-['Lexend'] px-7 py-3 not-italic  leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? "bg-[#FFA300] text-white border-transparent " : " border-transparent  text-neutral-700 text-lg font-medium font-['Lexend'] not-italic leading-[normal] tracking-[0.32px] capitalize")}>
               {title}
          </li>
          </div>
     )
}

export default TabNavItem