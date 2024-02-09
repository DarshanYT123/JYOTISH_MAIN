import React,{useState} from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Expertise from "../Astrologers/Expertise";
import Skills from "../Astrologers/Skills";
import Experience from "../Astrologers/Experience";
import Language from "../Astrologers/Language";
import Price from "../Astrologers/Price";
import Short from "../Astrologers/Short";
import AstrologersReaders from "../Astrologers/AstrologersReaders";
import ExpertAstrologer from "../Astrologers/ExpertAstrologer";
import SimpleSteps from "../Astrologers/SimpleSteps";
import Testimonial from "../Testimonials/Testimonial";
import Faq from "../FreeKundali/Faq";
import TalkAstrologerscard from "./TalkAstrologerscards";
import { FaStar } from "react-icons/fa";
import {Data} from './data'
import { IoMdArrowDropdown } from "react-icons/io";
import Trusted2 from "../Footer/Trusted2";
const TalkAstrologer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  

  // Handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle changes in the checkbox selection
  const handleCheckboxChange = (value) => {
    if (selectedCheckboxes.includes(value)) {
      setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== value));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    }
  };

  // Perform filtering based on search term and selected checkboxes
  const filteredData = Data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCheckboxes.length === 0 || selectedCheckboxes.includes(item.name) || selectedCheckboxes.includes(item.lang)) 
   
    
     
  );
  



    const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },

  
  };
  return (
    <>
    <div className="lg:px-16 md:px-10 px-10">
        <div className="pt-10">
            <h2 className="flex flex-row justify-start items-center text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Lexend not-italic font-medium leading-[normal] ">Home <span className="px-3"> <FaArrowRightLong /></span> <span className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-inter not-italic font-medium leading-[normal]"> Talk With Astrologer</span></h2>
        </div>
    <div className="py-5 md:py-5">
    <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
    Astrologers
        </h1>
  </div>



 
        
      <TalkAstrologerscard/>
        <ExpertAstrologer />
        <SimpleSteps />
        <Testimonial/>
<Faq/>
  </div>   
  <Trusted2/>
  </>
  );
};

export default TalkAstrologer
