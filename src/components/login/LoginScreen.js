import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { startGoogleLogin, startLoginEmailPassword } from "../actions/auth";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:centered   rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 "
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <form onSubmit={handleLogin}>
              <input
                className="border-gray-600 mb-4 w-96 border-solid border rounded py-2 px-4"
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <br />
              <input
                className="border-gray-600 mb-4 w-96 border-solid border rounded py-2 px-4"
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />

              <div className="pt-4 pb-8">
                <button
                  className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                  type="submit"
                >
                  Login
                </button>
              </div>

              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <div className="flex items-center justify-start w-full">
                <p className="font-bold">Login with social networks</p>
              </div>

              <div className="google-btn mb-5" onClick={handleGoogleLogin}>
                <div className="mt-2">
                  <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full w-52">
                    <b className="text-center">Sign in with google</b>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
