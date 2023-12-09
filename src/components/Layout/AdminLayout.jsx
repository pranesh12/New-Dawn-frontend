import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          {/* navbar open here */}
          <div className="w-full navbar bg-gray-200  ">
            <div className="flex-none lg:hidden">
              <label
                for="my-drawer-2"
                // aria-label="open sidebar"
                class="btn btn-square btn-ghost drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 mx-2">Admin Pannel</div>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">
                <li>
                  <button>Navbar Item 1</button>
                </li>
                <li>
                  <button>Navbar Item 2</button>
                </li>
              </ul>
            </div>
          </div>
          {/* navbar end here */}

          <div className="mt-5 ml-5">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar Link here */}
            <li>
              <Link to="/admin">DashBoard</Link>
            </li>
            <li>
              <Link to="/admin/bloglist">Blogs</Link>
            </li>
            <li>
              <Link to="/admin/userlist">User</Link>
            </li>
            <li onClick={handleLogOut}>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
