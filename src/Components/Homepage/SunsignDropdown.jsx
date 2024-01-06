import React, {useState} from 'react'

const SunsignDropdown = ({selected , setSelected}) => {
    const [isActive , SetIsActive ]=useState(false)
    const option =
    [ 
      "Arise", 
      "Taurus",
      "Gemini",
      "Cancer",
      "Virgo",
      "Libra",
      "Scorpio",

    //    {
    //     name:"Arise",
    //     // path:"/"
    // },
    // {
    //     name:"Taurus",
    //     // path:"/"
    // },
    // {
    //     name:"Gemini",
    //     // path:"/"
    // },
    // {
    //     name: "Cancer",
    //     // path:"/"
    // },
    // {
    //     name:"Virgo",
    //     // path:"/"
    // },
    // {
    //     name:"Libra",
    //     // path:"/"
    // },
    // {
    //     name: "Scorpio",
    //     // path:"/"
    // },
       

    ]
  return (
    <>
    <div className='group hover:border-[#FFD893] border border-[#773101] rounded-[6px] w-[200px] h-[47px] py-2  relative  z-[100]' >
        <div className='text-[#3A3A3A] text-[16px] not-italic font-medium leading-normal' 
        
        onClick={(e)=> SetIsActive(!isActive)}> 
      
      {selected }
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none" className='absolute bottom-[20px] right-[20px]    '>
<path d="M1.55859 1L7.73284 6.61948C8.462 7.28313 9.65518 7.28313 10.3844 6.61948L16.5586 1" stroke="#3A3A3A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            {/*<span className='fas fa-caret-down  text-[#A8642A]  ml-[8rem] w-[1.5rem] h-[1.5rem]  bg-[#1A477A]  rounded-r-full'></span>*/}
        </div>

                    {isActive && (
                         
                             <div className="absolute top-[46px] bg-[#F3F3F3] group-hover:border-[#FFD893] border border-[#773101] rounded-[6px] w-[200px] h-auto py-1 text-[#3A3A3A] text-[16px] not-italic font-medium leading-normal  ">

                           
                              
                               
                                {option.map((option) =>(
                                     <div  className=" dropdown-item p-[5px] cursor-pointer hover:bg-[#FFD893]  "
                                      onClick={(e)=>{ 
                                        setSelected(option)
                                        SetIsActive(false);
                                      }
                                     }>
                                        {option}

                                      {/* <h1 className="cursor-pointer ">{option.name}</h1> */}
                                    
                                       {/* <a  href={option.path}>   <h1 className="cursor-pointer ">{option.name}</h1></a>  */}
                                     </div>
                                ))}

                            
                             
                         </div>
                     
                    )}

       

    </div>
    </>
  )
}

export default SunsignDropdown