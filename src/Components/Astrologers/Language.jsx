import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Language = () => {
  //const [isOpen, setIsOpen] = useState(false);

  const [languageinfo, setLanguageinfo]=useState({
      language:[],
      response:[],
  })

  const handleChange = (e)=>{

    //destructuring

     const {value,checked} =e.target;
     const {language} = languageinfo;

     console.log(`${value} is ${checked}`);

     //the user cheak cheakbox 
     if(checked){

      setLanguageinfo(
        {
          language:[...language,value],
          response:[...language,value],
          
        }
      )
      //case 2: 
      } else {
        setLanguageinfo({
          language:language.filter(
            (e) => e !==value
          ),
          response:language.filter(
            (e)=> e !==value
          )
          })
        }
  }
  return (
    <>
    <div className=" group relative z-10 inline-block ">
    <div>
      <button
        //onClick={() => setIsOpen(!isOpen)}
        type="button"
        class="lg:px-4 md:px-2 text-[#FFFF]  lg:text-[18px] md:text-[16px]"
      >
      Language
      </button>
      <IoMdArrowDropdown
        size={15}
        className="text-white absolute lg:bottom-[0.1rem] lg:left-[6rem] md:bottom-[0.1rem] md:left-[5rem] h-5 w-5"
      />
    </div>
   
   
    
      <nav className="flex absolute top-10 -right-[3.3rem]  items-center justify-center border-[#FFF] bg-[#FFF] my-5 w-[11rem]  border border-solid shadow-[rgba(141,141,141,0.25)_0px_4px_10px_0px] invisible  rounded  transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
        <div className="flex flex-col gap-2  cursor-pointer px-2  ">
          
          <div className="flex items-center mb-2">
            <input
              id="Hindi"
              type="checkbox"
              name="Hindi"
              value="Hindi"
              onChange={
                handleChange
            }
              class="accent-[#EA9500] bg-grey w-4 h-4"
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
             Hindi
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="English"
              type="checkbox"
              name="English"
              value="English"
              onChange={
                handleChange
            }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
             English
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="Gujarati"
              type="checkbox"
              name="Gujarati"
              value="Gujarati"
              onChange={
                handleChange
            }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
             Gujarati
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="Bengali"
              type="checkbox"
              name="Bengali"
              value="Bengali"
              onChange={
                handleChange
            }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
              Bengali
            </label>
          </div >
          <div className="flex items-center mb-2">
            <input
              id="Marathi"
              type="checkbox"
              name="Marathi"
              value="Marathi"
              onChange={
                handleChange
            }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
           Marathi
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="Tamil"
              type="checkbox"
              name="Tamil"
              value="Tamil"
              onChange={
                handleChange
            }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
          Tamil
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              id="Telugu"
              type="checkbox"
              name="Telugu"
              value="Telugu"
              onChange={
                handleChange
            }
              class="accent-[#EA9500] bg-grey w-4 h-4 "
            />
            <label
              for="default-checkbox"
              className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
            >
          Telugu
            </label>
          </div>

        

          
          </div>
        </nav>
      
      
   
    </div>
  </>

  )
}

export default Language