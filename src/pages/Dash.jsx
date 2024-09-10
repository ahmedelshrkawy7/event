import { useLoaderData } from "react-router-dom";
import img from "../assets/1.png";

const Dash = () => {
  const data = useLoaderData() || [];

  return (
    <>
      <div
        className="h-60 border border-gray-600 bg-black rounded-xl p-5 flex justify-between items-center"
        // style={{ background: "linear-gradient(135deg, #024cbb 11%, #006 48%)" }}
      >
        <h1 className="text-3xl text-white">
          Think AI & Beyond: <br />
          The Future Intelligence
        </h1>

        <img src={img} alt="" className="w-24" />
      </div>

      <div className="flex items-center overflow-x-auto ">
        <table className="min-w-full table-auto">
          <thead className="rounded-lg h-16">
            <tr
              className=" table-head rounded-2xl bg-[#02bb5b]"
              style={{
                padding: "20px 0",
                // background:
                //   "linear-gradient(126deg, rgba(0,36,6,1) 0%, rgba(0,221,81,0.8939950980392157) 94%)",
              }}
            >
              <th
                scope="col"
                className="rounded-ss-xl px-4 py-2 text-white font-semibold text-left !border-0"
              >
                #
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-white font-semibold text-left"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-white font-semibold text-left"
              >
                Phone
              </th>
              <th
                scope="col"
                className=" px-4 py-2 text-white font-semibold text-left"
              >
                Full Name
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-white font-semibold text-left"
              >
                Company Name
              </th>
              <th
                scope="col"
                className="rounded-se-xl px-4 py-2 text-white font-semibold text-left !border-0"
              >
                Job Title
              </th>
            </tr>
          </thead>
          <tbody className="text-black">
            {data.map((el, index) => (
              <tr key={el.id} className="h-12">
                <th scope="row" className=" py-2 w-4">
                  {index + 1}
                </th>
                <td className="px-2 text-md py-2">{el.email}</td>
                <td className="px-2 text-md py-2 w-40">{el.phone}</td>
                <td className="px-2 text-md py-2">{el.fullName}</td>
                <td className="px-2 text-md py-2 ">{el.companyName}</td>
                <td className="px-2 text-md py-2 w-56 ">{el.jobTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dash;
