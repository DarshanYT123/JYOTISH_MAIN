import React, { useState } from "react";

const Login = (props) => {

    const [userInput, setUserInput] = useState('');
    const [isChecked, setIsChecked] = useState(false);
  
    const handleChange = (e) => {
      setUserInput(e.target.value);
      
    };
     const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isChecked) {
            // Perform the action when the user agrees to terms and conditions
            alert('You agreed to the terms and conditions. Form submitted!');
            // You can also trigger any further actions or send data to the server.
          } else {
            alert('Please agree to the terms and conditions before submitting.');
          }
        
        console.log(userInput)
        console.log(isChecked)
    }

    //close
    const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    window.location.reload()
  };
    
    return(
        <>
        <div>
        {isVisible && (
        <form onSubmit={handleSubmit} className="z-10">
        <div className="flex justify-center items-center pt-10 fixed z-40  top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 ">
        <div className="border-[color:var(--grey-1,#A1A1A1)]  w-[314px] h-[363px] md:w-[674px] md:h-[523px] shadow-[1px_3px_26px_0px_rgba(32,32,32,0.20)] rounded-[5px] border-[0.2px] border-solid bg-[#F3F3F3]">
       <div className="flex justify-end pt-3 pr-3 " onClick={props.closePopup}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" onClick={handleClose}  className="cursor-pointer" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#C7C7C7"/>
      </svg>
      </div>
<div className="md:py-9 py-1">
    <h1 className="text-[color:var(--Secondry-Color,#773101)] font-Lexend text-[20px] md:text-[26px] not-italic font-medium leading-[normal]">Log in / Sign Up</h1>
</div>
<div className="flex flex-col items-center justify-center  pt-5">
    <div className="flex flex-col md:justify-start md:items-start ">
        <label className="text-[color:var(--Black-text-color,#3A3A3A)]  text-start text-[12px] md:text-[20px] font-Lexend not-italic font-medium leading-[normal]">Email or Mobile No</label>
       <div className="py-2 flex justify-start">
        <input type="text"
        value={userInput} 
        onChange={handleChange}
        
        className="md:w-[402px] px-2   md:h-[45px] w-[222px] h-[45px] text-[color:var(--grey-1,#A1A1A1)] text-[12px] font-Lexend not-italic font-normal leading-[normal]" placeholder="Email or Mobile No Here...."/>
        </div>
        <div className="py-5 flex flex-row justify-center items-center  ">
        <input 
         type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
         className="bg-[#FFA300] "
       
        
        />
        <p className="text-[color:var(--Black-text-color,#3A3A3A)] pl-2 md:pl-4 text-[12px] md:text-[14px] font-Lexend not-italic font-medium leading-[normal]">I Agree All Terms & Conditions</p>
    </div>

   
   
    <div className="flex justify-center items-center md:pt-7">
        <button className="text-[color:var(--Pure-White,#FFF)] px-10 md:px-[10.5rem] py-3 rounded-[5px] bg-[#FFA300] text-[14px] md:text-[16px] font-Lexend not-italic font-semibold leading-[normal]">Get OTP</button>
    </div>

    <div className="pt-2">
        <p className="text-[color:var(--Black-text-color,#3A3A3A)] text-[10px] md:text-[14px] font-Lexend not-italic font-normal leading-[normal]">You will receive a 4 digit code for verification</p>
    </div>
     
     
      
    </div>
    <div className="flex flex-row justify-center gap-x-6 py-4 items-center">
            <img src="/img/Google.svg" className=" w-5 md:w-10 cursor-pointer" />
            <img src="/img/Facebook.svg" className=" w-6 md:w-10 cursor-pointer"/>
        </div>
</div>
        </div>
        </div>
        </form>
         )}
        </div>
        </>
    )
}

export default Login
// return(props.trigger) ? (
//     <div className="popup fixed top-0 left-0 w-[100%] h-[100vh] bg-[#F3F3F3] flex justify-center items-center ">
//         <div className="popup-inner relative p-[32px] w-[100%] max-w-[640px] bg-[#FFF] ">
//             <button className="close-btn absolute top-[16px] right-[16px] " >X</button>
//             {props.children}
//         </div>
//     </div>

// ) : "";