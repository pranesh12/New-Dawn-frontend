import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const user = useSelector((state) => state.auth.currentUser);
  console.log(user);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    dispatch(logout());
  };

  return (
    <div className="navbar bg-base-100  top-0 w-full">
      <div className="flex flex-1 md:gap-1 lg:gap-2 sm:flex-column">
        <Link to="/" className="btn btn-ghost text-lg">
          Blog Site
        </Link>
        <Link to="/auth/login" className="btn btn-ghost text-sm">
          Auth
        </Link>
      </div>

      {user.length !== 0 && (
        <div className="flex-0 gap-2">
          <details className="dropdown">
            <summary className="m-1 btn capitalize">{user.name}</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-30">
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </details>
        </div>
      )}
    </div>
  );
};

export default Navbar;
