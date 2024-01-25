import React, { useState, useEffect } from "react";

import { userLogin } from "../configs/https";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

function Login() {
  const { isLoggedIn, login } = useAuth();
  const [valueEmail, setValueEmail] = useState("");
  const [valuePwd, setValuePwd] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);

  const onChangeEmail = (e) => {
    setValueEmail(e.target.value);
  };
  const onChangePwd = (e) => {
    setValuePwd(e.target.value);
  };

  console.log();
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const result = await userLogin(valueEmail, valuePwd);
      if (result.status === 200) {
        login();
        navigate("/");
      }
      console.log(result.status);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
      <main className="w-full ">
        <div className=" flex flex-col justify-center h-[88vh]">
          <div className="max-w-[400px] w-full mx-auto rounded-lg  p-8 px-8  shadow-xl bg-white">
            <h2 className="text-4xl text-black font-bold text-center">Login</h2>
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
              onClick={handleLogin}
            >
              {isLoading ? (
                <div className=" loading loading-dots text-white text-lg"></div>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
