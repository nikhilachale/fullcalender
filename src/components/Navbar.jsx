import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 bg-white text-base    shadow-md">
      <div className="px-4 flex flex flex-row  justify-between items-center py-2 px-5 space-x-2">
        <Link
          to="/Daygrid"
          className="block hover:text-blue-500 transition duration-200"
        >
          Daygrid
        </Link>
        <Link
          to="/Draganddrop"
          className="block hover:text-blue-500 transition duration-200"
        >
          Drag and Drop
        </Link>
        <Link
          to="/Fullyear"
          className="block hover:text-blue-500 transition duration-200"
        >
          Fullyear
        </Link>
        <Link
          to="/Daygridwithcss"
          className="block hover:text-blue-500 transition duration-200"
        >
          Daygrid with CSS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
