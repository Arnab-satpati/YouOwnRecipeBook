import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-[100%] bg-transparent fixed top-5 left-0  z-[50] flex justify-center">
      <div className="flex justify-between items-center w-[40%] bg-[#58585826] rounded-[50px] px-[50px] py-[5px] backdrop-blur-md text-white">
        <NavLink
          className={(e) =>
            `duration-300 bg-transparent hover:text-amber-500 ${
              e.isActive ? "text-amber-500" : ""
            }`
          }
          to="/"
        >
          {" "}
          <img
            className="h-20 cursor-pointer bg-transparent absolute top-[-.9rem] left-[-22rem]"
            src="/assets/logo.png"
            alt=""
          />
          Home
        </NavLink>
        <NavLink
          className={(e) =>
            `duration-300 bg-transparent hover:text-amber-500 ${
              e.isActive ? "text-amber-500" : ""
            }`
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) =>
            `px-7 py-3 rounded-sm font-semibold transition duration-300 ${
              e.isActive
                ? "bg-amber-100 text-amber-600"
                : "bg-amber-500 text-white hover:bg-amber-800"
            }`
          }
          to="/create"
        >
          Create
        </NavLink>
        <NavLink
          className={(e) =>
            `duration-300 bg-transparent hover:text-amber-500 ${
              e.isActive ? "text-amber-500" : ""
            }`
          }
          to="/recipe"
        >
          Recipe
        </NavLink>
        <NavLink
          to="/askme"
          className={({ isActive }) =>
            `duration-300 bg-transparent hover:text-amber-500 ${
              isActive ? "text-amber-500" : ""
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex bg-transparent items-center gap-2 group cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`h-6 w-6 bg-transparent transition-colors duration-300 ${
                  isActive
                    ? "text-amber-500"
                    : "text-white group-hover:text-amber-500"
                }`}
              >
                <path d="M15.2238 15.5079L13.0111 20.1581C12.8687 20.4573 12.5107 20.5844 12.2115 20.442C12.1448 20.4103 12.0845 20.3665 12.0337 20.3129L8.49229 16.5741C8.39749 16.474 8.27113 16.4096 8.13445 16.3918L3.02816 15.7243C2.69958 15.6814 2.46804 15.3802 2.51099 15.0516C2.52056 14.9784 2.54359 14.9075 2.5789 14.8426L5.04031 10.3192C5.1062 10.1981 5.12839 10.058 5.10314 9.92253L4.16 4.85991C4.09931 4.53414 4.3142 4.22086 4.63997 4.16017C4.7126 4.14664 4.78711 4.14664 4.85974 4.16017L9.92237 5.10331C10.0579 5.12855 10.198 5.10637 10.319 5.04048L14.8424 2.57907C15.1335 2.42068 15.4979 2.52825 15.6562 2.81931C15.6916 2.88421 15.7146 2.95507 15.7241 3.02833L16.3916 8.13462C16.4095 8.2713 16.4739 8.39766 16.5739 8.49245L20.3127 12.0338C20.5533 12.2617 20.5636 12.6415 20.3357 12.8821C20.2849 12.9357 20.2246 12.9795 20.1579 13.0112L15.5078 15.224C15.3833 15.2832 15.283 15.3835 15.2238 15.5079ZM16.0206 17.435L17.4348 16.0208L21.6775 20.2634L20.2633 21.6776L16.0206 17.435Z" />
              </svg>
              <span
                className={`transition-colors bg-transparent duration-300 ${
                  isActive
                    ? "text-amber-500"
                    : "text-white group-hover:text-amber-500"
                }`}
              >
                Magic
              </span>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
