import React from "react";
import { useLoaderData } from "react-router-dom";
import Table from "../coponents/Table";

const Dash = () => {
  const data = useLoaderData();
  console.log("🚀 ~ Dash ~ data:", data);

  return (
    <div>
      <table>
        <thead>
          <tr
            className="!bg-blue-400 table-head "
            style={{ background: "#1370e4", color: "#fff !important" }}
          >
            <th scope="col">#</th>
            <th scope="col text-white">Full Name</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={el.id}>
                <th scope="row">{index + 1}</th>
                <td>{el.fullName}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dash;
