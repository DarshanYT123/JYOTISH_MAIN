import React, { useState ,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSortDown } from "react-icons/fa";

const initialState = {
  name: "",
  Birthplace: "",


}


const KundaliDob = () => {

  const optionsData = [
    { value: 'Male', label: 'Male' },
    { value: 'Famle', label: 'FeMale' },
    { value: 'Other', label: 'Other' },
  ];

  const [state, setState] = useState(initialState);
  // gender

  const [selectedOption, setSelectedOption] = useState('');
  const [birthdate , setBirthdate] =useState('null')
  const [time , setTime] =useState('null')


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setBirthdate(event.target.value);
    setTime(event.target.value)

   
    console.log(time)
   
    
  };

  


  const [validations, setValidations] = React.useState({
    name: '',
    Birthplace: ''

  })


  const validateAll = () => {
    const { name, Birthplace } = state
    const validations = { name: '', Birthplace: '' }

    let isValid = true

    if (!name) {
      validations.name = 'Name is required'
      isValid = false
    }

    //const nameRegex = /^[a-zA-Z]+$/;

    if (name && name.length < 3 || name.length > 50) {
      validations.name = 'Name must contain between 3 and 50 characters'
      isValid = false
    }

    //birth place
    // const bplaceRegex = /^[a-zA-Z]+$/;
    // if (Birthplace && bplaceRegex.test(Birthplace)) {
    //   validations.emailid = 'Birth place'
    //   isValid = false
    // }

    if (!isValid) {
      setValidations(validations)
    }



    return isValid

  }

  const validateOne = (e) => {
    const { name } = e.target
    const value = state[name]
    let message = ''

    if (!value) {
      message = `${name} is required`;
      // toast.error(message)
    }

    if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
      message = 'Name must contain between 3 and 50 characters'
      // toast.error(message)
    }
    // const bplaceRegex = /^[a-zA-Z]+$/;
    // if (value && name === 'Birthplace' && bplaceRegex.test(value)) {
    //   message = 'valid Birth place'
    //   toast.error(message)
    // }
    setValidations({ ...validations, [name]: message })
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    // setValues({...values, [name]: value })
  }

  const { name, Birthplace } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    //setLoading("");

    const isValid = validateAll();

    if (!isValid) {
      return false;
    }



    alert(JSON.stringify(state));
  }
  const {
    name: nameVal,



  } = validations

  const [data,setData] = useState({});
    const options = [
      "Semester 2","Semester 3","Semester 4","Semester 5","Semester 6","Semester 7","Semester 8"
    ];
    const onOptionChangeHandler = (event) => {
      setData(event.target.value);
      console.log(
          "User Selected Value - ",
          event.target.value
      );
  };

  const textInput = React.useRef();
  return (
    <>
    {/* desktop and tablet */}
    <div className='hidden md:block lg:block'>
      <div className='pt-10'>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="py-5 md:py-5 relative">
          <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
            Get Your Kundli by Date Of Birth
          </h1>
        </div>

        <div className=" py-10 border-[0.2px] border-[#A1A1A1] lg:mx-auto md:mx-auto lg:w-[80%] md:w-[100%] bg-[#FAFAFA] rounded-[5px]">
          <div className=''>
          <form onSubmit={handleSubmit}  className="">
          
            <div className="flex lg:space-x-20  md:space-x-20   items-center justify-center lg:pl-20 md:pl-20">
              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  onBlur={validateOne}
                  tabIndex={1}
                  required
                  aria-describedby="emailHelp"
                  className="p-3 rounded-[4px]  hover:border-[color:var(--grey-1,#FFA300)] focus:border-[color:var(--grey-1,#FFA300)] outline-none  border-[1px] border-solid  lg:w-[500px] lg:h-[45px]  md:w-[230px] md:h-[45px] "

                  autoComplete="off"

                  placeholder="Name"
                />
                <div className="absolute lg:-bottom-[110px] lg:left-[300px] md:bottom-[315px] md:left-[130px] z-10 font-semibold  text-[10px] text-[#FF0000]">{nameVal}</div>
              </div>

              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="selectOption"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                  Gender
                </label>
                <div className="flex justify-center relative min-w-[198px] px-1 h-[40px]">
               <select   className=" pl-12 rounded-[5px] border appearance-none p-2 w-[100%]   text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
              id="selectOption"
              value={selectedOption}
              onChange={handleSelectChange}
               >
               <option className="">Gender</option>
               {optionsData.map((option) => {
                return (
                    <option >
                        {option.label}
                    </option>
                );
               })}
               </select>
               <div  className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1 right-9 flex items-center justify-center ">
                <span  className="text-[20px] text-black  "><FaSortDown /></span>
               </div>
               </div>
                
              </div>
              <div>

              </div>

            </div>

            {/* section 2 */}

            <div className="flex lg:space-x-20 md:space-x-20 items-center justify-center lg:pl-20 md:pl-20">
              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                  Birth Place
                </label>
                <input
                  type="text"
                  id="Birthplace"
                  name="Birthplace"
                  value={Birthplace}
                  onChange={handleInputChange}
                  onBlur={validateOne}
                  tabIndex={3}
                  required
                  aria-describedby="Birthplace"
                  className="p-3 rounded-[4px] hover:border-[color:var(--grey-1,#FFA300)] border-[1px] focus:border-[color:var(--grey-1,#FFA300)] outline-none   lg:w-[500px] lg:h-[45px] md:w-[230px] md:h-[45px] "

                  autoComplete="off"

                  placeholder="Birth place"
                />
                {/* <div className="text-[10px] text-[#FF0000]">{nameVal}</div> */}
              </div>

              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                  Birth Date
                </label>
                <input
                  type="date"
                  id="date"
                  name='date'
                  onChange={handleSelectChange}
                  value={birthdate}
                  required
                  className=' className=" px-5 p-3 rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] focus:border-[color:var(--grey-1,#FFA300)] outline-none  border-[1px] border-solid lg:w-[200px] lg:h-[45px] md:w-[200px] md:h-[45px]'
                />
              </div>
              <div>

              </div>

            </div>

            {/* end section */}

            {/* third section */}

            <div className="flex lg:space-x-[4.7rem] md:space-x-[4.7rem] items-center justify-center lg:pl-20 md:pl-12">
              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                  Birth Time
                </label>
                <input
                  type="time"
                  id="time"
                  name='time'
                  onChange={handleSelectChange}
                  value={time}
                  required
                  className=' className=" px-5 p-3 rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] focus:border-[color:var(--grey-1,#FFA300)] outline-none  border-[1px] border-solid  lg:w-[200px] lg:h-[45px] md:w-[230px] md:h-[45px]'
                />
              </div>

              <div className="   pt-10">
                <button type="sumbit" className=" lg:px-44 md:px-2 py-2.5  border bg-[#FFA300] rounded-[5px] text-[#FFF] text-[16px] leading-normal font-semibold font-Lexend" >Generate Horoscope</button>
              </div>
              <div>

              </div>

            </div>

            {/* ============= */}
          </form>
          </div>
        </div>

      </div>
      </div>

       {/*end desktop and tablet */}

       {/* small device view */}
       <div className='block md:hidden lg:hidden '>
      <div className=' '>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="py-5  relative">
          <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[1.2rem]  not-italic font-semibold leading-normal">
            Get Your Kundli by Date Of Birth
          </h1>
        </div>

        <div className=" py-10 border-[0.2px] border-[#A1A1A1] mx-auto md:w-[16rem] bg-[#FAFAFA] rounded-[5px]">
          <div className=''>
          <form onSubmit={handleSubmit}  className="mx-auto">
          
            <div className="flex flex-col    items-center justify-center ">
              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  onBlur={validateOne}
                  tabIndex={1}
                  required
                  aria-describedby="emailHelp"
                  className="p-3 rounded-[4px]  hover:border-[color:var(--grey-1,#FFA300)] focus:border-[color:var(--grey-1,#FFA300)] outline-none  border-[1px] border-solid  w-[200px] h-[45px] "

                  autoComplete="off"

                  placeholder="Name"
                />
                <div className="absolute lg:-bottom-[110px] lg:left-[300px] md:bottom-[315px] md:left-[130px] z-10 font-semibold  text-[10px] text-[#FF0000]">{nameVal}</div>
              </div>

              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="selectOption"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                  Gender
                </label>
                <div className="flex justify-center relative min-w-[198px] px-1 h-[40px]">
               <select   className=" pl-12 rounded-[5px] border appearance-none p-2 w-[100%]   text-[18px] text-[color:var(--02,#363636)] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize "
              id="selectOption"
              value={selectedOption}
              onChange={handleSelectChange}
               >
               <option className="">Gender</option>
               {optionsData.map((option) => {
                return (
                    <option >
                        {option.label}
                    </option>
                );
               })}
               </select>
               <div  className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1 right-9 flex items-center justify-center ">
                <span  className="text-[20px] text-black  "><FaSortDown /></span>
               </div>
               </div>
                
              </div>
              <div>

              </div>

            </div>

            {/* section 2 */}

            <div className="flex flex-col    items-center justify-center">
              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                  Birth Place
                </label>
                <input
                  type="text"
                  id="Birthplace"
                  name="Birthplace"
                  value={Birthplace}
                  onChange={handleInputChange}
                  onBlur={validateOne}
                  tabIndex={3}
                  required
                  aria-describedby="Birthplace"
                  className="p-3 rounded-[4px] hover:border-[color:var(--grey-1,#FFA300)] border-[1px] focus:border-[color:var(--grey-1,#FFA300)] outline-none w-[200px] h-[45px]   "

                  autoComplete="off"

                  placeholder="Birth place"
                />
                {/* <div className="text-[10px] text-[#FF0000]">{nameVal}</div> */}
              </div>

              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                  Birth Date
                </label>
                <input
                  type="date"
                  id="date"
                  name='date'
                  onChange={handleSelectChange}
                  value={birthdate}
                  required
                  className=' className=" px-5 p-3 rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] focus:border-[color:var(--grey-1,#FFA300)] outline-none  border-[1px] border-solid w-[200px] h-[45px]'
                />
              </div>
              <div>

              </div>

            </div>

            {/* end section */}

            {/* third section */}

            <div className="flex flex-col    items-center justify-center">
              <div className="flex flex-col  space-y-2 py-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                >
                  Birth Time
                </label>
                <input
                  type="time"
                  id="time"
                  name='time'
                  onChange={handleSelectChange}
                  value={time}
                  required
                  className=' className=" px-5 p-3 rounded-[4px] border-[color:var(--grey-1,#A1A1A1)] focus:border-[color:var(--grey-1,#FFA300)] outline-none  border-[1px] border-solid  w-[200px] h-[45px]'
                />
              </div>

              <div className="   pt-10">
                <button type="sumbit" className=" px-6 py-2.5  border bg-[#FFA300] rounded-[5px] text-[#FFF] text-[16px] leading-normal font-semibold font-Lexend" >Generate Horoscope</button>
              </div>
              <div>

              </div>

            </div>

            {/* ============= */}
          </form>
          </div>
        </div>

      </div>
      </div>

       {/* end small device view */}
    </>
  )
}

export default KundaliDob