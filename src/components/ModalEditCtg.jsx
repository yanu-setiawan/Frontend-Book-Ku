import React, { useEffect, useState } from "react";
import { createCtg } from "../configs/https";
import Swal from "sweetalert2";

const ModalEditCtg = ({ modal, setModal, dataEditCtg }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState("");

  const handleForm = (event) => {
    setForm(event.target.value);
  };

  useEffect(() => {
    setForm(dataEditCtg);
  }, [modal]);

  return (
    <section className=" w-full h-full bg-black  bg-opacity-60  fixed z-50 ">
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
            <div className="  flex justify-end ">
              <button
                type="button"
                className="  text-[32px] font-bold text-[#F70000] cursor-pointer"
                onClick={() => {
                  setModal(false);
                }}
              >
                &times;
              </button>
            </div>

            <h2 className="text-xl font-bold leading-tight tracking-tight text-success md:text-2xl flex justify-center items-center mb-5">
              Edit Categories
            </h2>
            <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-yellow"
                >
                  Edit categories
                </label>
                <input
                  onChange={handleForm}
                  type="text"
                  name="name"
                  value={form}
                  placeholder="Input new categories"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-yellow block w-full p-2.5  "
                  required=""
                />
              </div>
              <div className="flex items-start"></div>
              <button
                className="btn bg-teal-500 hover:bg-teal-500 text-white font-bold text-lg w-full"
                // onClick={handleSubmit}
              >
                {isLoading ? (
                  <div className=" loading loading-dots text-white"></div>
                ) : (
                  "Delete"
                )}
              </button>
              <button
                className="btn bg-teal-500 hover:bg-teal-500 text-white font-bold text-lg w-full"
                // onClick={handleSubmit}
              >
                {isLoading ? (
                  <div className=" loading loading-dots text-white"></div>
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ModalEditCtg;
