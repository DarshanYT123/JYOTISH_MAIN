import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Skills = () => {
 // const [isOpen, setIsOpen] = useState(false);
  const [skillsinfo , setSkillsinfo] =useState({

      skills:[],
      response:[],
  });

   const handleChange= (e) =>{
        //Destucuring

        const {value,checked} = e.target;
        const {skills} = skillsinfo;

        console.log(`${value} is ${checked}`);

          //the user cheak the cheakbox

        if(checked){

          setSkillsinfo(
            {
              skills:[...skills,value],
              response:[...skills,value]
            }
          )
          //case 2
        }else{
          setSkillsinfo(
            {
              skills: skills.filter(
                (e) => e !== value
               ),

               response: skills.filter(
                (e)=> e !== value
               )
            }
          )
        }

   }
  return (
    <>
      <div className=" group relative z-10 inline-block">
      <div>
        <button
          //onClick={() => setIsOpen(!isOpen)}
          type="button"
          class="lg:px-4 md:px-2 lg:text-[18px] md:text-[16px] text-[#FFFF] cursor-pointer "
        >
         Skills
        </button>
        <IoMdArrowDropdown
          size={15}
          className="text-white absolute lg:bottom-[0.1rem] lg:left-[3.5rem] md:bottom-[0.1rem] md:left-[3rem] h-5 w-5"
        />
      </div>
     
      
      
        <nav tabindex="0" className="flex absolute top-10 -right-[3.3rem] items-center justify-center border-[#FFF] bg-[#FFF] border border-solid my-5 w-[11rem]   shadow-[rgba(141,141,141,0.25)_0px_4px_10px_0px] invisible  rounded  transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
          <div className="flex flex-col gap-2  cursor-pointer px-2  ">
            
            <div className="flex items-center mb-2">
              <input
                id="Vedic"
                type="checkbox"
                name="Vedic"
                value="Vedic"
                onChange={
                  handleChange
              }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
               Vedic
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Astrology"
                type="checkbox"
                name="Astrology"
                value="Astrology"
                onChange={
                  handleChange
              }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
                Astrology
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Vastu"
                type="checkbox"
                name="Vastu"
                value="Vastu"
                onChange={
                  handleChange
              }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
                Vastu
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Prashna"
                type="checkbox"
                name="Prashna"
                value="Prashna"
                onChange={
                  handleChange
              }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
                Prashna
              </label>
            </div >
            <div className="flex items-center mb-2">
              <input
                id="Kundali"
                type="checkbox"
                name="Kundali"
                value="Kundali"
                onChange={
                  handleChange
              }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
              Kundali
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                id="Counsellor"
                type="checkbox"
                name="Counsellor"
                value="Counsellor"
                onChange={
                  handleChange
              }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
              Counsellor
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Tarot Reading"
                type="checkbox"
                name="Tarot Reading"
                value="Tarot Reading"
                onChange={
                  handleChange
              }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
             Tarot Reading
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Nadi"
                type="checkbox"
                name="Nadi"
                value="Nadi"
                onChange={
                  handleChange
              }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
            Nadi
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                id="Numerology"
                type="checkbox"
                name="Numerology"
                value="Numerology"
                onChange={
                  handleChange
              }
                class="accent-[#EA9500] bg-grey w-4 h-4 "
              />
              <label
                for="default-checkbox"
                className="px-2 text-[#000] font-Poppins text-[16px] not-italic font-normal leading-[244%] "
              >
            Numerology
              </label>
            </div>
            </div>
          </nav>
        
        
      
      </div>
    </>

  )
}

export default Skills
