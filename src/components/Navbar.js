import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Jaba from '../a/ieee-logo.png'
import Headers from './header'
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const location = useLocation().pathname;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const [drop, setDrop] = useState(false);
  return (
    <div>
    {/* <Headers/> */}
      <div
        className={` left-0 top-0 fixed w-screen h-[100px] flex items-center justify-between px-6 md:px-12 z-50 transition-all ease-in-out duration-500 }`}
      >
        {/* <Link to="/">
          <img
            src="/ieee-logo.png"
            alt="Mits Media Club Logo"
            className=""
          />
        </Link> */}
        <img
          onClick={() => setDrop(!drop)}
          src='/icons.svg'
          alt="NavIcon"
          className="w-10 h-10 cursor-pointer"
        />
      </div>
      <div
        className={`wBE bg-black fixed top-0 left-0 overflow-hidden w-screen z-40 transition-all ease-in-out duration-700 flex flex-col items-center ${
          drop ? "h-screen pt-5" : "h-0"
        }`}
      >
        <div className="m-28 mt-[100px] w-[75%] geo flex flex-col gap-5">
          <Link to="/">
            <h1
              className={`${
                location === "/"
                  ? "text-sky-600 border-sky-600"
                  : "text-white border-white "
              } font-bold text-5xl  w-full border-b-2 pb-5 hover:border-sky-600 hover:text-sky-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              Home
            </h1>
          </Link>
          <Link to="/event">
            <h1
              className={`${
                location === "/event"
                  ? "text-sky-600 border-sky-600"
                  : "text-white border-white "
              } font-bold text-5xl  w-full border-b-2 pb-5 hover:border-sky-600 hover:text-sky-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              Events
            </h1>
          </Link>
          <Link to="/radio">
            <h1
              className={`${
                location === "/"
                  ? "text-sky-600 border-sky-600"
                  : "text-white border-white "
              } font-bold text-5xl  w-full border-b-2 pb-5 hover:border-sky-600 hover:text-sky-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              IEEE
            </h1>
          </Link>
          <Link to="/core">
            <h1
              className={`${
          // <Navo/>
                location === "/"
                  ? "text-sky-600 border-sky-600"
                  : "text-white border-white "
              } font-bold text-5xl  w-full border-b-2 pb-5 hover:border-sky-600 hover:text-sky-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              Core
            </h1>
          </Link>
          <a href="#ws">
            <h1
              className={`text-white border-white font-bold text-5xl  w-full border-b-2 pb-5 hover:border-sky-600 hover:text-sky-600 transition-all ease-in-out duration-500 cursor-pointer`}
            >
              Contact
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;