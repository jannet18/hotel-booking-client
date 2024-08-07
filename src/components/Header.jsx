import React, { useState } from "react";
import { Link } from "react-router-dom";
import appContext from "../contexts/AppContext";
import LogOutButton from "./LogOutButton.jsx";

function Header() {
  const [menu, setMenu] = useState(false);
  const { isLoggedIn, isLoading } = useContext(appContext);

  if (isLoading) {
    return null;
  }
  return (
    <nav className="bg-blue-800">
      <div className="container mx-auto flex items-center justify-between px-3 py-3">
        <div>
          <span className="text-3xl font-bold text-white">
            <Link to="/">Vacay</Link>
          </span>
        </div>
        <div className="hidden sm:flex flex-row items-center justify-center gap-4 ">
          <button
            className="text-white hover:bg-blue-600 rounded-sm p-1"
            type="button"
          >
            Kes
          </button>
          <button
            className="text-white hover:bg-blue-600 rounded-sm p-1"
            type="button"
          >
            Flag
          </button>
          <button
            className="text-white hover:bg-blue-600 rounded-sm p-1"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </button>

          {isLoggedIn ? (
            <>
              <Link
                to="/add-hotel"
                className="text-white rounded-sm hover:bg-blue-600 p-1"
              >
                List your Property
              </Link>
              <Link
                to="/my-bookings"
                className="flex items-center text-white font-bold hover:bg-blue-600  rounded-sm px-2"
              >
                My Bookings
              </Link>
              <Link
                to="/my-hotels"
                className="flex items-center text-white font-bold hover:bg-blue-600   rounded-sm px-2"
              >
                My Hotels
              </Link>
              <LogOutButton />
            </>
          ) : (
            <>
              {/* <div className="text-blue-600 bg-white rounded-sm p-1 border border-blue-600">
                <Link to="/register">
                  <button type="button">Register</button>
                </Link>
              </div> */}
              <div className="text-blue-600 bg-white rounded-sm p-1 border border-blue-600">
                <Link to="/login">
                  <button type="button">Sign In</button>
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="flex sm:hidden items-center">
          <button type="button" onClick={() => setMenu(!menu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {menu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 sm:hidden">
          <section className="bg-white h-full p-8 absolute top-0 right-0 z-5- w64 flex flex-col">
            <div className="flex justify-end mb-4">
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setMenu(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-start gap-2">
              <button
                type="button"
                className="hover:text-blue-600 rounded-sm p-1"
              >
                KES <span>Kenyan Shilling</span>
              </button>
              <button
                type="button"
                className="hover:text-blue-600 rounded-sm p-1"
              >
                flag <span>English (UK)</span>
              </button>
              <button
                type="button"
                className="hover:text-blue-600 rounded-sm p-1 flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                List your Property
              </button>
              {isLoggedIn ? (
                <>
                  <div className="flex flex-col w-full gap-4">
                    <Link to="/my-bookings">
                      <button className="bg-blue-600 text-white py-2 rounded-sm w-full">
                        My Bookings
                      </button>
                    </Link>
                    <Link to="/my-hotels">
                      <button className="bg-blue-600 text-white py-2 rounded-sm w-full">
                        My Hotels
                      </button>
                    </Link>
                    <LogOutButton />
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-4 w-full">
                  {/* <Link to="/register" className="w-full">
                    <button className="bg-blue-600 text-white py-2 rounded-sm w-full">
                      Register
                    </button>
                  </Link> */}
                  <Link to="/login" className="w-full">
                    <button className="bg-blue-600 text-white py-2 rounded-sm w-full">
                      Sign In
                    </button>
                  </Link>
                </div>
              )}

              <div className="flex flex-col mt-6">
                <h3 className="font-bold text-xl">Help and Support</h3>
                <button
                  type="button"
                  className="hover:text-blue-600 rounded-sm p-1 flex gap-2 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                  Contact Customer Service
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </nav>
  );
}

export default Header;
// import { Link } from "react-router-dom";
// import { useappContext } from "../contexts/appContext";
// import LogOutButton from "./LogOutButton";
// const Header = () => {
//   const { isLoggedIn } = useContext(appContext);

//   return (
//     <div className="bg-blue-800 py-6">
//       <div className="container mx-auto flex justify-between">
//         <span className="text-3xl text-white font-bold tracking-tight">
//           <Link to="/">MernHolidays.com</Link>
//         </span>
//         <span className="flex space-x-2">
//           {isLoggedIn ? (
//             <>
//               <Link
//                 className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
//                 to="/my-bookings"
//               >
//                 <button type="button">My Bookings</button>
//               </Link>
//               <Link
//                 className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
//                 to="/my-hotels"
//               >
//                 <button type="button"> My Hotels</button>
//               </Link>
//               <LogOutButton />
//             </>
//           ) : (
//             <Link
//               to="/login"
//               className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
//             >
//               Sign In
//             </Link>
//           )}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Header;
