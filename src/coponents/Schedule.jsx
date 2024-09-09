import React from "react";
import footer1 from "../assets/footer-2-1.png";
import footer2 from "../assets/footer-2-2.png";
import icon1 from "../assets/icons/Group.png";
import icon2 from "../assets/icons/Group (3).png";
import icon3 from "../assets/icons/Frame.png";
import icon4 from "../assets/icons/Frame (1).png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icons6.png";
import icon7 from "../assets/icons/Frame (3).png";

export const Schedule = () => {
  const schedule = [
    {
      id: 1,
      startTime: "9:30 am",
      endTime: "10:00 am",
      title: "Arrival, Networking and Welcome Coffee",
      icon: icon2,
    },
    {
      id: 2,
      startTime: "10:00 am",
      endTime: "10:15 am",
      title: "Welcome Note",
      icon: icon1,
    },
    {
      id: 3,
      startTime: "10:15 am",
      endTime: "11:30 am",
      title: "Transformative Solutions for the Digital Age",
      icon: icon3,
    },
    {
      id: 4,
      startTime: "11:30 am",
      endTime: "12:00 pm",
      title: "Coffee Break",
      icon: icon4,
    },
    {
      id: 5,
      startTime: "12:00 pm",
      endTime: "12:45 pm",
      title: "Optimizing Service Excellence in the Digital Era",
      icon: icon6,
    },
    {
      id: 6,
      startTime: "12:45 pm",
      endTime: "01:00 pm",
      title: "Luck Draw",
      icon: icon5,
    },
    {
      id: 7,
      startTime: "1:00 pm",
      endTime: "Onwards",
      title: "Lunch",
      icon: icon7,
    },
  ];

  return (
    <footer className=" shape-mockup-wrap mt-10">
      {/* <div
        className="shape-mockup d-none d-xl-block z-index-negative"
        data-top="0%"
        data-left="0%"
      >
        <img src={footer1} alt="footer shape" />
      </div>
      <div
        className="shape-mockup d-none d-xl-block z-index-negative end-0 bottom-0"
        data-bottom="0%"
        data-right="0%"
      >
        <img src={footer2} alt="footer shape" />
      </div> */}
      <div className="widget-area">
        <div className="container">
          <div className="flex flex-col  justify-start gap-10 items-center ">
            <h1 className="text-black z-10">Event Agenda</h1>
            {/* <div className="sm:w-1/2 text-white border-0 flex flex-col justify-start gap-2  ">
              <tr className="p-2 rounded-lg h-[70px] flex items-center justify-between   bg-[#02bb5b] ">
                <td className="border-0 text-lg ">From</td>
                <td className="border-0 text-lg">To</td>
                <td className="w-[400px] border-0 text-lg">Activity</td>
              </tr>
              <tr className="p-2 rounded-lg h-[70px] flex items-center justify-between border-b  text-white border border-white">
                <td className="border-0 ">9:30 am</td>
                <td className="border-0">10:00 am </td>
                <td className="w-[400px] border-0">
                  Arrival, Networking and Welcome Coffee
                </td>
              </tr>
              <tr className="p-2 rounded-lg h-[70px] flex items-center justify-between border-b  text-white border border-white">
                <td className="border-0 ">10:00 am</td>
                <td className="border-0">10:15 am</td>
                <td className="w-[400px] border-0">Welcome Note</td>
              </tr>
              <tr className="p-2 rounded-lg h-[70px] flex items-center justify-between border-b  text-white border border-white">
                <td className="border-0">10:15 am</td>
                <td className="border-0">11:30 am</td>
                <td className="w-[400px] border-0">
                  Transformative Solutions for the Digital Age
                </td>
              </tr>
              <tr className="p-2 rounded-lg h-[70px] flex items-center justify-between border-b  text-white border border-white">
                <td className="border-0">11:30 am</td>
                <td className="border-0">12:00 pm</td>
                <td className="w-[400px] border-0">Coffee Break</td>
              </tr>
              <tr className="p-2 rounded-lg h-[70px] flex items-center justify-between border-b  text-white border border-white">
                <td className="border-0">12:00 pm</td>
                <td className="border-0">12:45 pm</td>
                <td className="w-[400px] border-0">
                  Optimizing Service Excellence in the Digital Era
                </td>
              </tr>
              <tr className="p-2 rounded-lg h-[70px] flex items-center justify-between border-b  text-white border border-white">
                <td className="border-0">12:45 pm</td>
                <td className="border-0">01:00 pm</td>
                <td className="w-[400px] border-0">Luck Draw</td>
              </tr>
              <tr className="p-2 rounded-lg h-[70px] flex items-center justify-between border-b  text-white border border-white">
                <td className="border-0">1:00 pm</td>
                <td className="border-0">Onwards</td>
                <td className="w-[400px] border-0">Lunch</td>
              </tr>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {schedule.map((el) => {
                return (
                  <div className="flex flex-col items-center  " key={el.title}>
                    <div className="bg-[#E6F4EE] flex items-center justify-center rounded-full  w-20 h-20 mb-4">
                      <img src={el.icon} alt="" className="" />
                    </div>
                    <p className="text-black">
                      {" "}
                      {el.startTime} <span className="text-black"> to </span>{" "}
                      {el.endTime}{" "}
                    </p>
                    <h1 className="text-black text-lg text-center">
                      {el.title}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="copyright-wrap">
          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-auto">
              <p className="copyright-text">
                Copyright <i className="fal fa-copyright"></i> 2024{" "}
                <a href="index.html">Eventino</a>. All rights reserved by{" "}
                <a href="https://themeforest.net/user/vecuro_themes">Vecuro</a>.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};
