import React, { useEffect } from "react";
import { getAllUser } from "../auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import deleteSvg from "../../assets/delteLogo.svg";
const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser(email));
  }, [dispatch]);
  const email = useSelector((state) => state.auth.currentUser.email);
  const users = useSelector((state) => state.auth.userList);
  console.log(users);

  const handleDeleteUser = () => {};

  return (
    <div>
      <h1 className="text-center my-10">Users List</h1>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th></th>
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
                      <th>1</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td
                        className={
                          user.isAdmin ? "text-green-900" : "text-black"
                        }
                      >
                        {user.isAdmin ? "Admin" : "Normal User"}
                      </td>
                      <td
                        style={{ cursor: "pointer" }}
                        onClick={handleDeleteUser}
                      >
                        <img
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
