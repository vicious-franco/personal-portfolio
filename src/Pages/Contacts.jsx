import React from "react";
import avatar from "../assets/dev assets/projects/avatar.png";
import { socialIcons } from "../assets/data";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Contacts = () => {
  return (
    <section id="contacts" className="relative  w-full my-20  min-h-[80vh]  ">
      <h2 className="text-4xl font-extrabold text-center  text-white/85 uppercase tracking-wide">
        Contact <span className="text-[#4bd3a8ca]">Me </span>
      </h2>
      <hr className="w-35 m-[18px_auto] border-t-2 border-[#4bd3a8ca]/50" />
      <p className="w-[80%] m-auto text-gray-400 text-center text-lg">
        I’m always open to new opportunities, collaborations, or just a friendly
        chat about tech. Whether you have a project in mind or want to connect,
        feel free to reach out I’d love to hear from you!
      </p>
      {/*background div  */}
      <div className="my-20 h-full">
        <div className="w-full p-2 backdrop-blur-2xl  h-full">
          {/* parent */}
          <div className="flex flex-col lg:flex-row h-[30em] gap-4 w-full">
            {/* section 1 */}
            <div className="w-full bg-[#218b6a]/90 sm:relative top-0 sm:-top-12 sm:left-2 h-[34em] lg:max-w-[40%] rounded-md p-3">
              <div className="flex  items-center text-xl gap-3 font-black">
                <p className="inline-block text-lg  text-white bg-[#0f192d] rounded-sm p-2">
                  LN
                </p>
                <span className="text-[#0f192d]">Leon</span>
              </div>
              <div className="w-full max-w-[12em] md:min-w-[18.5em]  m-auto">
                <img
                  src={avatar}
                  className="scale-145 sm:scale-125"
                  alt="avatar image"
                />
              </div>
              <div className="flex items-center justify-center my-6 font-mono">
                <div className="flex  gap-2  items-center flex-col  text-[#0f192d] font-semibold">
                  <span className="flex items-center gap-3">
                    <FaPhone />
                    <p>+250 787 723 189</p>
                  </span>
                  <span className="flex items-center  gap-3">
                    <MdEmail />
                    <p>irakamale@gmail.com</p>
                  </span>
                  <span className="flex items-center gap-3">
                    <FaLocationCrosshairs />
                    <p>Kigali, Rwanda</p>
                  </span>
                </div>
              </div>
              <div className="flex justify-center gap-4 text-lg text-gray-300">
                {socialIcons.map((Item, index) => (
                  <span key={index + 1}>
                    <Item />
                  </span>
                ))}
              </div>
            </div>

            {/* section 2 */}
            <div className="w-full border border-[#4bd3a8ca]/90 bg-gradient-to-b to-[#185c465d] from-35%  backdrop-blur-2xl rounded-md text-white flex-1 ">
              <form
                action=""
                className="px-10 flex flex-col gap-8 pb-6 w-full "
              >
                <div className="flex  flex-col lg:flex-row justify-center mt-20 gap-10 ">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border px-3 rounded-sm border-[#4bd3a8ca] flex-grow-1 flex-shrink-1 p-2 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border px-3 rounded-sm border-[#4bd3a8ca] flex-grow-1 flex-shrink-1 p-2 outline-none"
                  />
                </div>
                <div className="w-full ">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border px-3 rounded-sm border-[#4bd3a8ca] flex-grow-1 w-full p-2 outline-none"
                  />
                </div>
                <div className="w-full max-h-50 ">
                  <textarea
                    name=""
                    className="border px-3 min-h-30 max-h-full rounded-sm border-[#4bd3a8ca] flex-grow-1 w-full  outline-none"
                    id=""
                  ></textarea>
                </div>
                <div className="w-full flex justify-center">
                  <button className="bg-[#4bd3a8ca] cursor-pointer hover:bg-[#4bd3a8f4] px-2 py-1 md:px-3 md:py-2 rounded-md font-semibold ">
                    Send Message
                  </button>
                </div>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
