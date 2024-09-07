import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg bg-white bg-body-tertiary h-20 rounded-xl border-1 border-gray-300 shadow w-full
    "
      style={
        {
          // background: "linear-gradient(135deg, #024cbb 24%, #006 97%)",
        }
      }
    >
      <div className=" flex items-center justify-between w-full p-8">
        <a className="navbar-brand text-blue-800 text-3xl" href="#">
          Navbar
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <MdLogout
          className="text-blue-500 text-3xl"
          onClick={() => navigate("/login")}
        />
      </div>
    </nav>
  );
};

export default Nav;
