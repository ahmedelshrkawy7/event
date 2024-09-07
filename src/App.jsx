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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Panner />

        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <div className="flex" style={{ display: "flex" }}>
        <Sidebar />

        <div className="flex flex-col gap-4 p-4 " style={{ flexGrow: 1 }}>
          <Nav />
          <Dash />
        </div>
      </div>
    ),
    loader: async () => {
      const res = await axios.get("http://localhost:8800/api/users");

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
