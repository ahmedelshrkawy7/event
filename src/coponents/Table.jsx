import React from "react";

const Table = () => {
  return (
    <div>
      {" "}
      <table>
        <tr className="project_table-head">
          {th?.map((th) => {
            return <th>{th}</th>;
          })}
        </tr>

      </table>
    </div>
  );
};

export default Table;
