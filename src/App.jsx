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
import Spinner from "./components/Spinner/Spinner";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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
          element: <AdminHome />,
        },
        {
          path: "/admin/userlist",
          element: <UserList />,
        },
        {
          path: "/admin/bloglist",
          element: <BlogList />,
        },
        {
          path: "/admin/addBlog",
          element: <AddBlog />,
        },
        {
          path: "/admin/updateBlog/:id",
          element: <UpdateBlog />,
        },
      ],
    },
  ]);
  return <>{loading ? <Spinner /> : <RouterProvider router={router} />}</>;
}

export default App;
