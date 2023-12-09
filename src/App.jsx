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
