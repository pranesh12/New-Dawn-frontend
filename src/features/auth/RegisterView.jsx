import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./authSlice";
import { Link } from "react-router-dom";

const RegisterView = () => {
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(registerData));
  };

  const handleOnChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto mt-5 prose">
      <div className="flex ">
        <div className="">
          <h2>Register</h2>
          <p>
            Don't have an account?
            <Link to="/auth/login">
              <span className="text-sky-600">Go to Login</span>
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleOnChange}
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs  mb-4  input-info"
            />
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
