import SidebarLink from "../coponents/SidebarLink";
import logo from "../assets/logo.png";

const Sidebar = ({ show, setShow }) => {
  const data = [
    {
      title: "Dashboard",
      subTitle: "Profile",
    },
    {
      title: "Employee",
      subTitle: "Profile",
    },
    {
      title: "Payroll",
      subTitle: "Profile",
    },
    {
      title: "Holidays",
      subTitle: "Profile",
    },
    {
      title: "Advanced Payment",
      subTitle: "Profile",
    },
  ];

  return (
    <div className="lg:p-5 h-screen  ">
      <div
        className={`bg-white h-full   lg:w-[300px] w-0 border  overflow-hidden border-gray-200 py-5 rounded-3xl sm:flex flex-col gap-10 shadow   items-center ${
          show ? "!w-full z-50 fixed top-0 left-0 bottom-0 " : "w-0"
        }`}
      >
        <div className="flex gap-10">
          <span className="text-4xl lg:hidden" onClick={() => setShow(false)}>
            &larr;
          </span>
          <img src={logo} alt="" className="w-48" />
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
