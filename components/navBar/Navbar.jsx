import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { FaBars } from "react-icons/fa"; 

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div  className="navbar flex justify-between items-center p-4 shadow-md relative">
      {/* Logo Section */}
      <div className="nav-logo flex items-center gap-2">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-[40px] lg:w-[60px] xl:w-[80px]" 
        />
        <p className="text-[#171717] text-[20px] lg:text-[30px] xl:text-[38px] font-semibold">
          SHOPPER
        </p>
      </div>

      {/* Desktop Navigation */}
      <ul className="nav-menu hidden lg:flex items-center gap-9 text-[#626262] text-[18px] font-medium">
        <li
          onClick={() => setMenu("shop")}
          className="cursor-pointer flex flex-col items-center justify-center gap-1"
        >
          <Link to='/'>Shop</Link>
          <hr
            className={`${
              menu === "shop" ? "w-4/5 h-1" : "w-0 h-0"
            } transition-all duration-300 ease-in-out border-none rounded-lg bg-[#FF4141]`}
          />
        </li>
        <li
          onClick={() => setMenu("mens")}
          className="cursor-pointer flex flex-col items-center justify-center gap-1"
        >
          <Link to='/mens'>Men</Link>
          <hr
            className={`${
              menu === "mens" ? "w-4/5 h-1" : "w-0 h-0"
            } transition-all duration-300 ease-in-out border-none rounded-lg bg-[#FF4141]`}
          />
        </li>
        <li
          onClick={() => setMenu("womens")}
          className="cursor-pointer flex flex-col items-center justify-center gap-1"
        >
          <Link to='/womens'>Women</Link>
          <hr
            className={`${
              menu === "womens" ? "w-4/5 h-1" : "w-0 h-0"
            } transition-all duration-300 ease-in-out border-none rounded-lg bg-[#FF4141]`}
          />
        </li>
        <li
          onClick={() => setMenu("kids")}
          className="cursor-pointer flex flex-col items-center justify-center gap-1"
        >
          <Link to='/kids'>Kids</Link>
          <hr
            className={`${
              menu === "kids" ? "w-4/5 h-1" : "w-0 h-0"
            } transition-all duration-300 ease-in-out border-none rounded-lg bg-[#FF4141]`}
          />
        </li>
      </ul>

      {/* Login and Cart */}
      <div className="nav-login-cart flex items-center gap-4 lg:gap-[45px]">
        <Link to='/login' className="hidden lg:block">
          <button className="px-4 py-2 bg-white font-medium text-[#515151] cursor-pointer border border-[#7a7a7a] rounded-full hover:bg-gray-100 active:scale-95 active:shadow-inner transition duration-200">
            Login
          </button>
        </Link>  
        <Link to='/cart'>
          <div className="relative">
            <img src={cart_icon} alt="Cart Icon" />
            <div className="counter w-[22px] h-[22px] flex justify-center items-center absolute top-[-10px] right-[-10px] rounded-[11px] text-[14px] text-white bg-red-500">
              {getTotalCartItems()}
            </div>
          </div>
        </Link>
        {/* Hamburger Menu */}
        <button 
          className="lg:hidden text-2xl"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars/>
        </button>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
  <div
    className={`fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[50%] h-full bg-white shadow-lg z-50 transform ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300 ease-in-out`}
  >
    <button
      className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
      onClick={() => setIsSidebarOpen(false)}
    >
      ✕
    </button>
    <ul className="flex flex-col items-start gap-6 p-6 pt-16 text-gray-700 text-lg font-medium">
      <li
        className="w-full hover:bg-gray-100 px-4 py-2 rounded-lg cursor-pointer transition duration-200"
        onClick={() => setIsSidebarOpen(false)}
      >
        <Link to="/">Shop</Link>
      </li>
      <li
        className="w-full hover:bg-gray-100 px-4 py-2 rounded-lg cursor-pointer transition duration-200"
        onClick={() => setIsSidebarOpen(false)}
      >
        <Link to="/mens">Men</Link>
      </li>
      <li
        className="w-full hover:bg-gray-100 px-4 py-2 rounded-lg cursor-pointer transition duration-200"
        onClick={() => setIsSidebarOpen(false)}
      >
        <Link to="/womens">Women</Link>
      </li>
      <li
        className="w-full hover:bg-gray-100 px-4 py-2 rounded-lg cursor-pointer transition duration-200"
        onClick={() => setIsSidebarOpen(false)}
      >
        <Link to="/kids">Kids</Link>
      </li>
    </ul>
    <div className="absolute bottom-8 left-0 w-full px-6">
      <Link to="/login">
        <button
          className="w-full py-3 bg-[#FF4141] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#e63b3b] active:scale-95 transition duration-200"
          onClick={() => setIsSidebarOpen(false)}
        >
          Login
        </button>
      </Link>
    </div>
  </div>
)}
    </div>
  );
};

export default Navbar;
