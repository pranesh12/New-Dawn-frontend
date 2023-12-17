import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import SingleBlogDetails from "./features/blog/SingleBlogDetails";
import LoginView from "./features/auth/LoginView";
import RegisterView from "./features/auth/RegisterView";

import AdminLayout from "./components/Layout/AdminLayout";
import AdminHome from "./features/Admin/AdminHome";
import BlogList from "./features/Admin/BlogList";
import UserList from "./features/Admin/UserList";
import AddBlog from "./features/Admin/AddBlog";
import UpdateBlog from "./features/Admin/UpdateBlog";
import AdminPrivateRoute from "./components/AdminPrivateRoute/AdminPrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blogs/:id",
          element: <SingleBlogDetails />,
        },
        {
          path: "/auth/register",
          element: <RegisterView />,
        },
        {
          path: "/auth/login",
          element: <LoginView />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: (
            <AdminPrivateRoute>
              <AdminHome />
            </AdminPrivateRoute>
          ),
        },
        {
          path: "/admin/userlist",
          element: (
            <AdminPrivateRoute>
              <UserList />
            </AdminPrivateRoute>
          ),
        },
        {
          path: "/admin/bloglist",
          element: (
            <AdminPrivateRoute>
              <BlogList />
            </AdminPrivateRoute>
          ),
        },
        {
          path: "/admin/addBlog",
          element: (
            <AdminPrivateRoute>
              <AddBlog />
            </AdminPrivateRoute>
          ),
        },
        {
          path: "/admin/updateBlog/:id",
          element: (
            <AdminPrivateRoute>
              <UpdateBlog />
            </AdminPrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
