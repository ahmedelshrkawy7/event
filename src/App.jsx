import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Register from "./pages/auth/Register";
import Dash from "./pages/Dash";
import axios from "axios";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./includes/Sidebar";
import Nav from "./includes/Nav";
import Panner from "./coponents/Panner";
import AppLayout from "./pages/AppLayout";
import About from "./coponents/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Panner />

        <Outlet />
        <About />
      </>
    ),
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        index: true,
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AppLayout />,
    loader: async () => {
      const res = await axios.get(
        "https://event-back-7ebi.vercel.app/api/users"
      );

      return res.data;
    },
    children: [],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
