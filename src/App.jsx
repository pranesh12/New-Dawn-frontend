import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

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
