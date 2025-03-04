import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="flex flex-wrap justify-between items-center py-2 px-5 space-x-4">
        {[
          { path: "/daygrid", label: "Daygrid" },
          { path: "/draganddrop", label: "Drag and Drop" },
          { path: "/fullyear", label: "Full Year" },
          { path: "/daygridwithcss", label: "Daygrid with CSS" },
          { path: "/dateclick", label: "Click/Edit" },
          { path: "/theme", label: "Theme" },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block transition duration-200 no-underline hover:no-underline ${
                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;