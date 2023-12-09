import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";
import { Link } from "react-router-dom";

const LoginView = () => {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => console.log(state));
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };

  const handleOnChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto mt-5 prose">
      <div className="flex">
        <div className="">
          <h2>Log in </h2>
          <p>
            Already have an account?{" "}
            <Link to="/auth/register">
              <span className="text-sky-600">Go to Register</span>
            </Link>
          </p>

          <form onSubmit={handleSubmit}>
            <input
              onChange={handleOnChange}
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mb-4 input-info"
            />
            <input
              onChange={handleOnChange}
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs mb-4 input-info"
            />

            <button
              type="submit"
              className="btn btn-wide btn-outline btn-success"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
