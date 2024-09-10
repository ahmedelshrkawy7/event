import SidebarLink from "../coponents/SidebarLink";
import logoWh from "../assets/logo-white.png";
import { MdOutlineEventAvailable } from "react-icons/md";
const Sidebar = ({ show, setShow }) => {
  const data = [
    {
      title: "Applied requests",
      subTitle: "Profile",
      icon: <MdOutlineEventAvailable className="text-white text-2xl" />,
    },
  ];

  return (
    <div className=" h-screen relative lg:w-[250px] ">
      <div
        className={`bg-[#02bb5b] h-full fixed top-5 bottom-0 left-2   lg:w-[250px] w-0 border  overflow-hidden border-gray-200 py-5 rounded-xl sm:flex flex-col gap-10 shadow   items-center ${
          show ? "!w-full z-50 fixed top-0 left-0 bottom-0 " : "w-0"
        }`}
      >
        <div className="flex gap-10">
          <span className="text-4xl lg:hidden" onClick={() => setShow(false)}>
            &larr;
          </span>
          <img src={logoWh} alt="" className="w-56" />
        </div>

        <div className=" flex flex-col gap-8 mt-10 w-full">
          {data.map((el, index) => {
            return (
              <SidebarLink
                icon={el.icon}
                href={el.title}
                key={el.title}
                id={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
