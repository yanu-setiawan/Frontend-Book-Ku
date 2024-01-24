import React from "react";
import { FaBook, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-between px-[10%] py-10 bg-teal-500 text-white">
      <div className="left-foot-content flex flex-col gap-[22px]">
        <div className="logo-detail flex gap-3">
          <FaBook size={33} />
          <p className="font-bold flex items-center font-book text-xl">
            Book-Ku
          </p>
        </div>
        <p className="about-detail text-greyFont font-medium">
          Welcome to Book-Ku, your go-to destination <br />
          for all things related to online books.
        </p>
        <div className="flex gap-4 pb-3">
          <div className="box">
            <FaFacebook />
          </div>

          <div className="box">
            <FaTwitter />
          </div>
          <div className="box">
            <FaInstagram />
          </div>
        </div>
        <p className="copyright font-book font-bold ">©2024 Book-Ku</p>
      </div>
      <div className="right-foot-content flex gap-9 md:gap-7 lg:gap-16 xl:gap-24 ">
        <div className="content-detail flex-col gap-3">
          <h2 className="font-bold pb-4">Product</h2>
          <ol className="flex flex-col gap-4  text-greyFont">
            <li className=" cursor-pointer ">Download</li>
            <li className=" cursor-pointer hover:text-yellow">Pricing</li>
            <li className=" cursor-pointer hover:text-yellow">Locations</li>
            <li className=" cursor-pointer hover:text-yellow">Contries</li>
            <li className=" cursor-pointer hover:text-yellow">Blog</li>
          </ol>
        </div>
        <div className="content-detail">
          <h2 className="font-bold pb-4">Engage</h2>
          <ol className="flex flex-col gap-4  text-greyFont">
            <li className=" cursor-pointer hover:text-yellow">Book-Ku ?</li>
            <li className=" cursor-pointer hover:text-yellow">FAQ</li>
            <li className=" cursor-pointer hover:text-yellow">About Us</li>
            <li className=" cursor-pointer hover:text-yellow">
              Privacy Policy
            </li>
            <li className=" cursor-pointer hover:text-yellow">
              Terms of Service
            </li>
          </ol>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
