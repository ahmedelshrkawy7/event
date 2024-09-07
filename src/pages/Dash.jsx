import { useLoaderData } from "react-router-dom";

const Dash = () => {
  const data = useLoaderData() || [];

  return (
    <div className="flex items-center overflow-x-auto ">
      <table className="min-w-full table-auto">
        <thead className="rounded-lg h-16">
          <tr
            className="bg-blue-500 table-head rounded-2xl"
            style={{
              padding: "20px 0",
              background: "linear-gradient(135deg, #024cbb 24%, #006 97%)",
            }}
          >
            <th
              scope="col"
              className="rounded-ss-lg px-4 py-2 text-white text-left"
            >
              #
            </th>
            <th scope="col" className="px-4 py-2 text-white text-left">
              Email
            </th>
            <th scope="col" className="px-4 py-2 text-white text-left">
              Phone
            </th>
            <th
              scope="col"
              className="rounded-se-lg px-4 py-2 text-white text-left"
            >
              Full Name
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => (
            <tr key={el.id} className="h-12">
              <th scope="row" className="px-4 py-2">
                {index + 1}
              </th>
              <td className="px-4 py-2">{el.email}</td>
              <td className="px-4 py-2">{el.phone}</td>
              <td className="px-4 py-2">{el.fullName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dash;
