import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosRemoveCircleOutline, IoMdAddCircleOutline } from "react-icons/io";

const Faq = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const faqData = [
    {
      title: `How can I connect with an astrologer on chat?`,
      describe: `To Chat With astrologer online,you simply need to recharge your wallet and find the 'chat with Astrologer' section on our app or website.Once you click on it,you can choose from hundreds of asrologers you can chat with at your convenience`,
    },
    {
      title: `Why do all the astrologers have such good ratings?`,
      describe: `To Chat With astrologer online,you simply need to recharge your wallet and find the 'chat with Astrologer' section on our app or website.Once you click on it,you can choose from hundreds of asrologers you can chat with at your convenience`,
    },
    {
      title: `Will my phone number be kept confidential?`,
      describe: `To Chat With astrologer online,you simply need to recharge your wallet and find the 'chat with Astrologer' section on our app or website.Once you click on it,you can choose from hundreds of asrologers you can chat with at your convenience`,
    },
    {
      title: `Why some astrologers on the app are so expensive?`,
      describe: `To Chat With astrologer online,you simply need to recharge your wallet and find the 'chat with Astrologer' section on our app or website.Once you click on it,you can choose from hundreds of asrologers you can chat with at your convenience`,
    },
    {
      title: `Why should I choose JyotishShastram for astrology consultation?`,
      describe: `To Chat With astrologer online,you simply need to recharge your wallet and find the 'chat with Astrologer' section on our app or website.Once you click on it,you can choose from hundreds of asrologers you can chat with at your convenience`,
    },
    {
      title: `How genuine is JyotishShastram?`,
      describe: `To Chat With astrologer online,you simply need to recharge your wallet and find the 'chat with Astrologer' section on our app or website.Once you click on it,you can choose from hundreds of asrologers you can chat with at your convenience`,
    },
    {
        title: `How can I connect with an astrologer on chat?`,
        describe: `AI stands for Artificial Intelligence, while ML stands for Machine Learning. AI refers to the creation of machines or software that can perform tasks requiring human-like intelligence, such as understanding natural language or recognizing objects in images. ML is a subset of AI that uses algorithms to analyse data and learn from it to improve its performance over time.`,
      },
    ];

  return (
    <div className="py-5 relative">
    <h1 className="py-3 text-start text-[var(--Secondry-Color,#773101)] font-Lexend text-[18px] md:text-[26px] not-italic font-semibold leading-normal">
    Frequently Asked Questions For Kundli
            </h1>
      <div className="flex flex-col items-center ">
        {faqData.map((data, index) => {
          return (
            <FaqItem
              key={index}
              open={index === open}
              title={data.title}
              desc={data.describe}
              style={data.style}
              toggle={() => toggle(index)}
              theme={props.theme}
            />
          );
        })}
      </div>
      <div
        className="circle hidden lg:block bottom-[0%] right-0 z-20"
        style={{
          background:
            props.theme === "light"
              ? "linear-gradient(130.35deg, rgba(252, 70, 107, 0.30), rgba(63, 94, 251, 0.30)"
              : "linear-gradient(130.35deg, rgba(252, 70, 107, 0.10), rgba(63, 94, 251, 0.10)",
        }}
      />
      <div
        className="circle hidden lg:block top-[0%] left-0 z-20"
        style={{
          background:
            props.theme === "light"
              ? "linear-gradient(130.35deg, rgba(63, 94, 251, 0.30), rgba(63, 94, 251, 0.30)"
              : "linear-gradient(130.35deg, rgba(63, 94, 251, 0.10), rgba(63, 94, 251, 0.10)",
        }}
      />
    </div>
  );
};

export default Faq;

const FaqItem = ({ open, toggle, title, desc, style, theme }) => {
  return (
    <div className=" z-30">
      <div
        className={
          "p-[2px] border-b-2  cursor-pointer  bg-[#F0F0F0] " +
          (theme === "light" ? "glassmorphism-3" : "glassmorphism")
        }
        onClick={toggle}
      >
        <div className="px-[20px] py-[10px] rounded-md w-[75rem]">
          <div className="flex justify-between items-center">
            <p className="text-[color:var(--Black-text-color,#3A3A3A)] text-[18px] font-Lexend not-italic font-medium leading-[normal]">{title}</p>
            <div
              className="text-subtitle border-black lg:text-title rounded-full p-1 "
            >
              {open ? (
                <IoIosRemoveCircleOutline color="black" />
              ) : (
                <IoMdAddCircleOutline color="black" />
              )}
            </div>
          </div>
          <Collapse isOpened={open}>
            <div className="mt-5 text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Lexend not-italic font-medium leading-[normal]">{desc}</div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
