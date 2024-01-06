import React,{useState} from 'react'

const DailyDropdown = ({selected1 , setSelected1}) => {
    const [isActive1 , SetIsActive1 ]=useState(false)
    const option1 =
    [
      "Arise", 
    "Taurus",
    "Gemini",
    "Cancer",
    "Virgo",
    "Libra",
    "Scorpio",
       

    ]
  return (
    <>
    <div className='group hover:border-[#FFD893] border border-[rgba(161, 161, 161, 0.80)] rounded-[6px] w-[200px] h-[47px] py-2  relative  z-[90]' >
        <div className='text-[#3A3A3A] text-[16px] not-italic font-medium leading-normal' 
        
        onClick={(e)=> SetIsActive1(!isActive1)}> 
      
      {selected1 }
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none" className='absolute bottom-[20px] right-[20px]    '>
<path d="M1.55859 1L7.73284 6.61948C8.462 7.28313 9.65518 7.28313 10.3844 6.61948L16.5586 1" stroke="#3A3A3A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            {/*<span className='fas fa-caret-down  text-[#A8642A]  ml-[8rem] w-[1.5rem] h-[1.5rem]  bg-[#1A477A]  rounded-r-full'></span>*/}
        </div>

                    {isActive1 && (
                         
                             <div className="absolute top-[46px] bg-[#F3F3F3] group-hover:border-[#FFD893] border border-[#773101] rounded-[6px] w-[200px] h-auto py-1 text-[#3A3A3A] text-[16px] not-italic font-medium leading-normal  ">

                           
                              
                               
                                {option1.map((option1) =>(
                                     <div className="dropdown-item p-[5px] cursor-pointer bg-[#F3F3F3] hover:bg-[#FFD893]  "
                                      onClick={(e)=>{ 
                                        setSelected1(option1)
                                        SetIsActive1(false);
                                      }
                                     }>
                                        {option1}
                                    
                                       {/* <a  href={option1.path}>   <h1 className="cursor-pointer ">{option1.name}</h1></a>  */}
                                     </div>
                                ))}

                            
                             
                         </div>
                     
                    )}

       

    </div>
    </>
  )
}

export default DailyDropdown