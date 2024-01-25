import React, { useState, useEffect } from "react";
import { userRegister } from "../configs/https";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import Swal from "sweetalert2";

function Register() {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePwd, setValuePwd] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);

  const onChangeEmail = (e) => {
    setValueEmail(e.target.value);
  };
  const onChangePwd = (e) => {
    setValuePwd(e.target.value);
  };

  console.log();
  const handleRegister = async () => {
    try {
      setLoading(true);
      const result = await userRegister(valueEmail, valuePwd);
      if (result.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Register Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      }
      console.log(result.status);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <main className="w-full ">
        <div className=" flex flex-col justify-center h-[88vh]">
          <div className="max-w-[400px] w-full mx-auto rounded-lg  p-8 px-8  shadow-xl bg-white">
            <h2 className="text-4xl text-black font-bold text-center">
              Register
            </h2>
            <div className="flex flex-col text-black py-2">
              <label>Email </label>
              <input
                className="rounded-lg  mt-2 p-2 input border bg-[#EFF3F5] px-4 "
                type="text"
                value={valueEmail}
                onChange={onChangeEmail}
                placeholder="Your email"
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Password </label>
              <input
                className="rounded-lg  mt-2 px-4 input border bg-[#EFF3F5]"
                type="password"
                value={valuePwd}
                onChange={onChangePwd}
                placeholder="Your password"
              />
            </div>
            <button
              className="w-full my-5 py-2 bg-teal-500 shadow-md shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
              onClick={handleRegister}
            >
              {loading ? (
                <div className=" loading loading-dots text-white text-lg"></div>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Register;
