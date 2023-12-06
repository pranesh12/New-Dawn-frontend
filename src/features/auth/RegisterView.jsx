import React from "react";

const RegisterView = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("working");
  };

  return (
    <div className="container mx-auto mt-5 prose">
      <div className="flex">
        <div className="basis-1/2"></div>
        <div className="basis-1/2">
          <h2>New Account</h2>
          <p>Already have an account?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fistname"
              placeholder="First Name"
              className="input input-bordered w-full max-w-xs  mb-4  input-info"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="input input-bordered w-full max-w-xs mb-4 input-info"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mb-4 input-info"
            />
            <input
              type="password"
              name="email"
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
