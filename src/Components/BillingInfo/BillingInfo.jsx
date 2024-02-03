import React, { useState } from 'react'
import { useStepContext } from '../Cart/StepContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EastIcon from '@mui/icons-material/East';

const BillingInfo = () => {
  const { stepNo, setStepNo } = useStepContext();

  const [values, setValues] = React.useState({
    name: '',
    lname: '',
    MobileNo: '',
    Email: '',
    address1: '',
    address2: '',
    PostalCode: '',
    City: '',
    State: ''
  })

  const [validations, setValidations] = React.useState({
    name: '',
    lname: '',
    MobileNo: '',
    Email: '',
    PostalCode: '',

  })

  const prev = () => {
    setStepNo(stepNo - 1)
}

  // const next = () => {
  //   setStepNo(stepNo + 1)
  // }

  const validateAll = () => {

    const { name, lname, MobileNo, Email, address1, address2, PostalCode, City, State } = values
    const validations = { name, lname, MobileNo, Email, PostalCode }

    let isValid = true

    //first name validation
    if (!name) {
      validations.name = 'Name is required'
      isValid = false
    }

    if (name && name.length < 3 || name.length > 50) {
      validations.name = 'Name must contain between 3 and 50 characters'
      isValid = false
    }

    // last name validation
    if (!lname) {
      validations.lname = 'Name is required'
      isValid = false
    }

    if (lname && lname.length < 3 || lname.length > 50) {
      validations.lname = 'Last Name must contain between 3 and 50 characters'
      isValid = false
    }
    //  phone number validation

    if (!MobileNo) {
      validations.MobileNo = 'Email is required'
      isValid = false
    }

    if (MobileNo && MobileNo.length < 10 || MobileNo.length > 10) {
      validations.MobileNo = 'In valid Mobile number..'
      isValid = false
    }


    //Email validation

    if (!Email) {
      validations.Email = 'Email is required'
      isValid = false
    }


    if (Email && !/\S+@\S+\.\S+/.test(Email)) {
      validations.Email = 'Email format must be as example@mail.com'
      isValid = false
    }

    //Pin code validation


    if (!PostalCode) {
      validations.PostalCode = 'Postal Code  is required'
      isValid = false
    }
    const zipCodeRegex = /^\d{6}(-\d{4})?$/;

    if (PostalCode && !zipCodeRegex.test(PostalCode)) {
      validations.Email = 'Postal code invalid'
      isValid = false
    }

    return isValid
  }

  //

  const validateOne = (e) => {
    const { name } = e.target
    const value = values[name]
    let message = '';

    if (!value) {

      message = `${name} is required`
      //toast.error(message)
    }
    //first name
    if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
      message = 'Name must contain between 3 and 50 characters'
      // toast.error(message)
    }
    //last name
    if (value && name === 'lname' && (value.length < 3 || value.length > 50)) {
      message = 'last  Name must contain between 3 and 50 characters'
      //toast.error(message)
    }

    // Mobile number
    if (value && name === 'MobileNo' && (value.length < 10 || value.length > 10)) {
      message = 'Invalid Mobile No..'
      //toast.error(message)
    }

    //Email 
    if (value && name === 'Email' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'Email format must be as example@mail.com'
      //toast.error(message)
    }


    //postal code 
    const zipCodeRegex = /^\d{6}(-\d{4})?$/;
    if (value && name === 'PostalCode' && !zipCodeRegex.test(value)) {
      message = 'Postal code in valid'
      // toast.error(message)
    }





    setValidations({ ...validations, [name]: message })
  }

  //handle change

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  //   handlesubmit

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = validateAll()
    setStepNo(stepNo + 1)

    if (!isValid) {
      return false
    }
    alert(JSON.stringify(values))
  }

  const { name, lname, MobileNo, Email, PostalCode } = values
  const {
    name: nameVal,
    lname: lnameVal,
    MobileNo: MobVal,
    Email: emailVal,
    PostalCode: codeVal
  } = validations

  return (

    <>
      <div className=' lg:px-16 md: md:px-10 lg:pt-10 md:pt-5 relative'>
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
        <div className="py-5 md:py-5">
          <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
            Billing Details
          </h1>
        </div>


        <form onSubmit={handleSubmit} className="">
          <div className=" flex lg:flex-row md:flex-col md:mx-auto gap-4 items-center justify-center">
            {/* left */}

            <div className='border-[0.2px] bg-[#FAFAFA] rounded-[5px] lg:w-[100%] md:w-[100%] h-auto'>

              <div className="lg:py-2 md:py-2 px-4">
                <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[14px] md:text-[14px] not-italic font-semibold leading-normal">
                  Billing Details
                </h1>
              </div>


              {/* section1  */}

              <div className="flex lg:space-x-10  md:space-x-10   items-center justify-center  lg:pl-10 md:pl-10">
                <div className="flex flex-col  space-y-2 py-2">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[18px] font-Lexend not-italic font-medium leading-[normal]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    onBlur={validateOne}
                    tabIndex={1}
                    required

                    aria-describedby="emailHelp"
                    className="p-3 font-Lexend text-[#A1A1A1]  text-[14px] font-normal leading-normal not-italic  rounded-[4px]  hover:border-[color:var(--grey-1,#FFA300)] focus:border-[color:var(--grey-1,#FFA300)] outline-none bg-[#FFF]  border-[1px] border-solid  lg:w-[390px] lg:h-[45px]  md:w-[305px] md:h-[45px] "

                    autoComplete="off"

                    placeholder=" First Name Here...."
                  />
                  <div className="absolute lg:bottom-[392px] lg:left-[100px] md:bottom-[430px] md:left-[100px] font-semibold z-10 text-[10px] text-[#FF0000]">{nameVal}</div>
                </div>

                <div className="flex flex-col  space-y-2 py-2">
                  <label
                    htmlFor="selectOption"
                    className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                  >
                    Last  Name
                  </label>

                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={lname}
                    onChange={handleChange}
                    onBlur={validateOne}
                    tabIndex={2}

                    aria-describedby="emailHelp"
                    className="p-3 font-Lexend text-[#A1A1A1]  text-[14px] font-normal leading-normal not-italic rounded-[4px]  hover:border-[color:var(--grey-1,#FFA300)] focus:border-[color:var(--grey-1,#FFA300)] outline-none  border-[1px] border-solid  lg:w-[390px] lg:h-[45px]  md:w-[305px] md:h-[45px] "

                    autoComplete="off"
                    required
                    placeholder="Last Name Here...."
                  />
                  <div className="absolute lg:bottom-[392px] lg:left-[550px] md:bottom-[430px] md:left-[480px] font-semibold z-10 text-[10px] text-[#FF0000]">{lnameVal}</div>
                </div>
                <div>

                </div>

              </div>

              {/* ==============end section1======================= */}


              {/* section2  */}

              <div className="flex lg:space-x-10  md:space-x-10   items-center justify-center  lg:pl-10 md:pl-10">
                <div className="flex flex-col  space-y-2 py-2">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[18px] font-Lexend not-italic font-medium leading-[normal]"
                  >
                    Mobile No.
                  </label>
                  <input
                    type="number"
                    id="MobileNo"
                    name="MobileNo"
                    value={MobileNo}
                    onChange={handleChange}
                    onBlur={validateOne}
                    tabIndex={3}
                    required
                    aria-describedby="emailHelp"
                    className="-webkit-apperance:none; p-3 font-Lexend text-[#A1A1A1]  text-[14px] font-normal leading-normal not-italic  rounded-[4px]  hover:border-[color:var(--grey-1,#FFA300)] focus:border-[color:var(--grey-1,#FFA300)] outline-none bg-[#FFF]  border-[1px] border-solid  lg:w-[390px] lg:h-[45px]  md:w-[305px] md:h-[45px] "

                    autoComplete="off"

                    placeholder=" Mobile no Here...."
                  />
                  <div className="absolute lg:bottom-[320px] lg:left-[100px] md:bottom-[340px] md:left-[100px] font-semibold z-10 text-[10px] text-[#FF0000]">{MobVal}</div>
                </div>

                <div className="flex flex-col  space-y-2 py-2">
                  <label
                    htmlFor="selectOption"
                    className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                  >
                    Email
                  </label>

                  <input
                    type="text"
                    id="Email"
                    name="Email"

                    value={Email}
                    onChange={handleChange}
                    onBlur={validateOne}
                    tabIndex={4}
                    required
                    aria-describedby="emailHelp"
                    className="p-3 font-Lexend text-[#A1A1A1]  text-[14px] font-normal leading-normal not-italic rounded-[4px]  hover:border-[color:var(--grey-1,#FFA300)] focus:border-[color:var(--grey-1,#FFA300)] outline-none  border-[1px] border-solid  lg:w-[390px] lg:h-[45px]  md:w-[305px] md:h-[45px] "

                    autoComplete="off"

                    placeholder="Email Here...."
                  />
                  <div className="absolute lg:bottom-[300px] lg:left-[550px] md:bottom-[340px] md:left-[480px] font-semibold z-10 text-[10px] text-[#FF0000]">{emailVal}</div>
                </div>
                <div>

                </div>

              </div>

              {/* ==============end section2======================= */}

              {/* ==============   section3 =====================  */}
              <div className="lg:py-2 md:py-2 px-4">
                <h1 className=" text-left text-[var(--Secondry-Color,#773101)] font-Lexend text-[14px] md:text-[14px] not-italic font-semibold leading-normal">
                  Shipping Address
                </h1>
              </div>

              <div className="flex lg:space-x-10  md:space-x-10   items-center justify-center  lg:pl-10 md:pl-10">
                <div className="flex flex-col  space-y-2 py-2">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[18px] font-Lexend not-italic font-medium leading-[normal]"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    //value={address1} 
                    onChange={handleChange}
                    onBlur={validateOne}
                    tabIndex={5}
                    required
                    aria-describedby="emailHelp"
                    className="p-3 font-Lexend text-[#A1A1A1]  text-[14px] font-normal leading-normal not-italic  rounded-[4px]  hover:border-[color:var(--grey-1,#FFA300)] focus:border-[color:var(--grey-1,#FFA300)] outline-none bg-[#FFF]  border-[1px] border-solid  lg:w-[390px] lg:h-[45px]  md:w-[305px] md:h-[45px] "

                    autoComplete="off"

                    placeholder=" House no , flat no , etc"
                  />
                  {/* <div className="text-[10px] text-[#FF0000]">{nameVal}</div> */}
                </div>

                <div className="flex flex-col  space-y-2 py-2">
                  <label
                    htmlFor="selectOption"
                    className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                  >
                    Address Line 2
                  </label>

                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    //value={address2} 
                    onChange={handleChange}
                    //onBlur={validateOne}
                    tabIndex={6}
                    required
                    aria-describedby="emailHelp"
                    className="p-3 font-Lexend text-[#A1A1A1]  text-[14px] font-normal leading-normal not-italic rounded-[4px]  hover:border-[color:var(--grey-1,#FFA300)] focus:border-[color:var(--grey-1,#FFA300)] outline-none  border-[1px] border-solid  lg:w-[390px] lg:h-[45px]  md:w-[305px] md:h-[45px] "

                    autoComplete="off"

                    placeholder="Land mark , street , Building No etc"
                  />
                </div>
                <div>

                </div>

              </div>

              {/* ===============end section3====================== */}



              {/* ===============section4========================== */}


              <div className="flex lg:space-x-10  md:space-x-10   items-center justify-center  lg:pl-10 md:pl-10">
                <div className="flex flex-col  space-y-2 py-2">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[18px] font-Lexend not-italic font-medium leading-[normal]"
                  >
                    Postal Code
                  </label>
                  <input
                    type="number"
                    id="PostalCode"
                    name="PostalCode"
                    value={PostalCode}
                    onChange={handleChange}
                    onBlur={validateOne}
                    tabIndex={7}
                    required
                    aria-describedby="emailHelp"
                    className="p-3 font-Lexend text-[#A1A1A1]  text-[14px] font-normal leading-normal not-italic  rounded-[4px]  hover:border-[color:var(--grey-1,#FFA300)] focus:border-[color:var(--grey-1,#FFA300)] outline-none bg-[#FFF]  border-[1px] border-solid  lg:w-[245px] lg:h-[45px]  md:w-[190px] md:h-[45px] "

                    autoComplete="off"

                    placeholder=" Postal code Here...."
                  />
                  <div className="absolute lg:bottom-[70px] lg:left-[100px] md:bottom-[110px] md:left-[100px] font-semibold z-10 text-[10px] text-[#FF0000]">{codeVal}</div>
                  {/* <div className="text-[10px] text-[#FF0000]">{nameVal}</div> */}
                </div>

                <div className="flex flex-col  space-y-2 py-2">
                  <label
                    htmlFor="selectOption"
                    className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                  >
                    City
                  </label>

                  <input
                    type="text"
                    id="City"
                    name="City"
                    //value={City} 
                    onChange={handleChange}
                    //onBlur={validateOne}
                    tabIndex={8}
                    required
                    aria-describedby="emailHelp"
                    className="p-3 font-Lexend text-[#A1A1A1]  text-[14px] font-normal leading-normal not-italic rounded-[4px]  hover:border-[color:var(--grey-1,#FFA300)] focus:border-[color:var(--grey-1,#FFA300)] outline-none  border-[1px] border-solid  lg:w-[245px] lg:h-[45px]  md:w-[190px] md:h-[45px] "

                    autoComplete="off"

                    placeholder="City , Town"
                  />
                </div>


                <div className="flex flex-col  space-y-2 py-2">
                  <label
                    htmlFor="selectOption"
                    className="text-[color:var(--Black-text-color,#3A3A3A)] text-start text-[20px] font-Lexend not-italic font-medium leading-[normal]"
                  >
                    State
                  </label>

                  <input
                    type="text"
                    id="State"
                    name="State"
                    //value={State} 
                    onChange={handleChange}
                    //onBlur={validateOne}
                    tabIndex={9}
                    required
                    aria-describedby="emailHelp"
                    className="p-3 font-Lexend text-[#A1A1A1]  text-[14px] font-normal leading-normal not-italic rounded-[4px]  hover:border-[color:var(--grey-1,#FFA300)] focus:border-[color:var(--grey-1,#FFA300)] outline-none  border-[1px] border-solid  lg:w-[245px] lg:h-[45px]  md:w-[190px] md:h-[45px] "

                    autoComplete="off"

                    placeholder="State"
                  />
                </div>
                <div>

                </div>

              </div>


              {/* ===============end section4 */}

              {/* Button section  */}

              <div className="flex gap-5 float-right lg:px-6 md:px-6 py-5 relative">
                <button onClick={prev} className="border rounded-[9px] py-2 pt-1 border-[#04B4DB] shadow-[rgba(174,174,174,0.25)_0px_4px_10px_0px] px-6">Back To Cart</button>
                <button type='submit' className="text-[#FFF] border rounded-[9px] py-2 pt-1 border-[#FFA300] bg-[#FFA300] shadow-[rgba(174,174,174,0.25)_0px_4px_10px_0px] px-16">Check Out Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" viewBox="0 0 40 16" fill="none" className='absolute top-[29px] right-[34px]'>
                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM1 9H39V7H1V9Z" fill="white" />
                  </svg>
                </button>
              </div>

              {/* Button Section End */}


            </div>



            {/* right */}
           

          </div>
        </form>

      </div>
    </>
  )
}

export default BillingInfo