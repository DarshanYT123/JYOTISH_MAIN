import React from 'react'

const TabNavItem = ({ id, title,image, activeTab, setActiveTab }) => {
     const handleClick = () => {
          setActiveTab(id);
     };
     const navi = [
        {
            image: "./img/",
            name: "Rudraksha",
        },
        {
            image: "./img/Rp2.svg",
            name: "Shivling",
        },
        {
            image: "./img/Rp3.svg",
            name: "Rudraksha",
        },
        {
            image: "./img/Rp4.svg",
            name: "Rudraksha",
        },
        {
            image: "./img/Rp5.svg",
            name: "Rudraksha",
        },
        {
            image: "./img/Rp6.svg",
            name: "Rudraksha",
        },
    
    ]

     return (
        <>
          {/* <li onClick={handleClick} className={" cursor-pointer rounded-[6px] text-[16px] font-Poppins px-10 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " + (activeTab === id ? "bg-[#47A5E4] text-white border-transparent " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize")}>
               {title}
          </li> */}
            <div className="w-full      ">

        
                            <div onClick={handleClick} className={"flex flex-col justify-center items-center gap-[15px] group "+ (activeTab === id ? "group" : "")}>
                                <div className={"w-[100px] h-[100px] rounded-full border-[3px]  overflow-hidden flex justify-center items-center duration-500"+ (activeTab === id ? "border-[4px] duration-500  border-[#FFA300]" : "")}>
                                    <img src={image} alt="asdf" className="  " />
                                </div>
                                <h1 className={" font-Lexend text-[16px] font-[500]"+ (activeTab === id ? "  text-[#FFA300] duration-500" : "")}>{title}</h1>
                            </div>






        </div>
        </>
     )
}

export default TabNavItem