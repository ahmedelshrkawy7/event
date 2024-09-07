import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Nav = ({ setShow }) => {
  const navigate = useNavigate();
  return (
    <nav
      className="flex items-center justify-between navbar navbar-expand-lg bg-white bg-body-tertiary md:h-20 rounded-xl border-1 border-gray-300 shadow  p-4 lg:p-8 
    "
    >
      <FaBars
        className="text-blue-950 text-3xl block lg:hidden"
        onClick={() => setShow(true)}
      />
      <div className=" flex items-center justify-between  ">
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
      </div>
      <MdLogout
        className="text-blue-500 text-3xl"
        onClick={() => navigate("/login")}
      />
    </nav>
  );
};

export default Nav;
