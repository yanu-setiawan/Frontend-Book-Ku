import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { FaArrowRight, FaBook } from "react-icons/fa";
import Swal from "sweetalert2";

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to log out.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#14B8A6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      }
    });
  };

  return (
    <div
      className={`w-full flex justify-between sticky px-32 items-center gap-5 p-4 ${
        isLoggedIn ? "bg-teal-500" : " bg-teal-500"
      }`}
    >
      <Link to={"/"} className=" flex gap-2 items-center">
        <FaBook className=" text-white" size={38} />
        <p className=" text-2xl font-bold font-book text-white">Book-Ku</p>
      </Link>
      {isLoggedIn ? (
        <button
          className="btn bg-[#d33] border border-[#d33] hover:bg-[#d33] text-white"
          onClick={handleLogout}
        >
          Log Out <FaArrowRight />
        </button>
      ) : (
        <>
          <div className=" gap-3 flex">
            <Link to={"/register"}>
              <button className="btn bg-teal-500 hover:bg-teal-500 text-white font-bold text-base min-w-[95px] shadow-sm shadow-white">
                Register
              </button>
            </Link>

            <Link to={"/login"}>
              <button className="btn bg-teal-500 hover:bg-teal-500 text-white font-bold text-base min-w-[95px] shadow-sm shadow-white">
                Login
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
