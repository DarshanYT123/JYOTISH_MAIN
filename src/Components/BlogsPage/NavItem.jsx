import React from 'react'

const NavItem = ({ id, title, activeTab, setActiveTab }) => {
     const handleClick = () => {
          setActiveTab(id);
     };

     return (
        <div className='p-1'>
          <li onClick={handleClick} className={"cursor-pointer rounded-full lg:text-[16px] lg:font-medium md:text-[12px] md:font-light font-['Lexend'] lg:px-4 lg:py-3 md:px-2 md:py-1 not-italic  leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? "bg-[#FFA300] text-white border-transparent " : " border-transparent  text-neutral-700 lg:text-[16px] lg:font-medium md:text-[12px] md:font-light font-['Lexend'] not-italic leading-[normal] tracking-[0.32px] capitalize")}>
               {title}
          </li>
          </div>
     )
}

export default NavItem