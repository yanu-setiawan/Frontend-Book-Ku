import React, { useState } from "react";
import { createCtg } from "../configs/https";
import Swal from "sweetalert2";

const ModalAddCtg = ({ modal, setModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState("");

  const handleForm = (event) => {
    setForm((form) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const result = await createCtg(form);
      if (result.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Category Success added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setModal();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(form, "ppp");

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
              Add Categories
            </h2>
            <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-success"
                >
                  New categories
                </label>
                <input
                  onChange={handleForm}
                  type="text"
                  name="name"
                  placeholder="Input new categories"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-yellow block w-full p-2.5  "
                  required=""
                />
              </div>
              <div className="flex items-start"></div>
              <button
                className="btn btn-success text-white font-bold text-lg w-full"
                onClick={handleSubmit}
              >
                {isLoading ? (
                  <div className=" loading loading-dots text-white"></div>
                ) : (
                  "Add"
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ModalAddCtg;
