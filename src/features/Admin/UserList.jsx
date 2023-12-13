import React, { useEffect } from "react";
import { deleteUser, getAllUser } from "../auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import deleteSvg from "../../assets/delteLogo.svg";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser(email));
  }, [dispatch]);
  const email = useSelector((state) => state.auth.currentUser.email);
  const users = useSelector((state) => state.auth.userList);

  const handleDeleteUser = (id) => {
    const userData = {
      id,
      email,
    };
    dispatch(deleteUser(userData));
    window.location.replace("http://localhost:5173/admin/userlist");
  };

  return (
    <div>
      <h1 className="text-center my-10">Users List</h1>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <>
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td
                        className={
                          user.isAdmin ? "text-emerald-400 " : "text-black"
                        }
                      >
                        {user.isAdmin ? "Admin" : "Normal User"}
                      </td>
                      <td style={{ cursor: "pointer" }}>
                        <img
                          onClick={() => handleDeleteUser(user._id)}
                          className="w-6 h-5"
                          // style={{ width: "20px", height: "20px" }}
                          src={deleteSvg}
                          alt="deleteSvg"
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
