import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <button
          type="button"
          className="border border-white p-2 rounded-sm text-white hover:text-blue-600"
        >
          <Link to="/properties">List your property</Link>
        </button>
        <br />
        <div className="sm:flex-row flex flex-col gap-4 text-white">
          <button
            className="hover:bg-blue-500 rounded-sm hover:underline"
            type="button"
          >
            <Link>Your Account</Link>
          </button>
          <button
            className="hover:bg-blue-500 rounded-sm hover:underline"
            type="button"
          >
            <Link>Make Changes to your booking</Link>
          </button>
          <button
            className="hover:bg-blue-500 rounded-sm hover:underline"
            type="button"
          >
            <Link>Customer Service Help</Link>
          </button>
          <button
            className="hover:bg-blue-500 rounded-sm hover:underline"
            type="button"
          >
            <Link>Become an Affiliate</Link>
          </button>
          <button
            className="hover:bg-blue-500 rounded-sm hover:underline"
            type="button"
          >
            <Link>Vacay for Business</Link>
          </button>
        </div>
        <div className="text-white font-bold tracking-tight flex gap-4 py-2">
          <span className="cursor-pointer  hover:bg-blue-700 p-2">
            Privacy Policy
          </span>
          <span className="cursor-pointer  hover:bg-blue-700 p-2">
            Terms of Service
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
