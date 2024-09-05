import SidebarLink from "../coponents/SidebarLink";

const Sidebar = () => {
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
    <div className="sm:p-5 h-screen  ">
      <div className="bg-white h-full   md:w-[300px] w-0 border hidden overflow-hidden border-gray-200 py-5 rounded-3xl sm:flex flex-col gap-10 shadow   items-center">
        <img src={""} alt="" className="w-40" />

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
