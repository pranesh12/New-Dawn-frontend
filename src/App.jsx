import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import SingleBlogDetails from "./features/blog/SingleBlogDetails";
import RegisterView from "./features/auth/RegisterView";

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
