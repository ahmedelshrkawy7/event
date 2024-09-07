import { useLoaderData } from "react-router-dom";

const Dash = () => {
  const data = useLoaderData() || [];

  return (
    <div className="flex items-center ">
      <table className="">
        <thead className="!rounded-lg !h-16">
          <tr
            className="!bg-blue-500 table-head rounded-2xl   "
            style={{
              color: "#fff !important",
              padding: "20px 0",
              background: "linear-gradient(135deg, #024cbb 24%, #006 97%)",
            }}
          >
            <th
              scope="col"
              style={{ color: "white" }}
              className="rounded-ss-lg"
            >
              #
            </th>
            <th scope="col" style={{ color: "white" }}>
              email
            </th>
            <th scope="col" style={{ color: "white" }}>
              phone
            </th>
            <th
              className="rounded-se-lg"
              scope="col text-white"
              style={{ color: "white" }}
            >
              Full Name
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={el.id} className="h-12">
                <th scope="row">{index + 1}</th>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>{el.fullName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dash;
