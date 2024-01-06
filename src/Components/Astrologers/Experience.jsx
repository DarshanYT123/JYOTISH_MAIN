import React ,{useState}  from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import ProgressBar from './ProgressBar'
 
const Experience = ({ progressPercentage }) => {
    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
        setShowOptions(!showOptions);
      };
  return (
   <>
   <div class="relative inline-block text-left" onClick={handleClick} >
      <div>
        <button
          onClick={handleClick}
          type="button"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <div className=''>
            <section className="inline-flex gap-1 items-center text-left cursor-pointer">
              <h3 className="text-xs text-[#FFFF]">Experience
              <IoMdArrowDropdown size={15} className='text-white absolute bottom-[0.1rem] left-[5rem] h-5 w-5'/>
              </h3>
            </section>
          </div>
        </button>
      </div>

      {showOptions ? (
        
        <div class=" absolute left-0 z-10 mt-2 w-56 h-48 border border-[#0000] origin-top-right rounded-md bg-white shadow-lg pt-10 py-10" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div className="flex items-center justify-center">
            <span> Experience In Years</span>
          </div>
         <div className='w-50 mt-4 px-3'>
						<ProgressBar progressPercentage={50} />

					</div>
          <div className="flex gap-28 text-right px-3 pt-1">
                <span>1</span>
                <span>Above 20</span>


            </div>
          <div className="pt-8 text-[#FFA300] flex items-center justify-center">
                <span>15 years</span>

            </div>
      </div>

      ) : null}
    </div>

 
   </>
  )
}

export default Experience