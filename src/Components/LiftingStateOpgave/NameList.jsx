import React from "react";
import PropTypes from "prop-types";

const NameList = ({ names }) => {
  const deleteBtn = () => {
    return;
  };

  return (
    <React.Fragment>
      <h2>All Names</h2>
      <ul>
        {names.map((name) => (
          <li key={name.id}>
            {name.name}{" "}
            <button onClick={deleteBtn} className="btn btn-info btn-sm">
              delete
            </button>{" "}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default NameList;

NameList.propTypes = {
  names: PropTypes.array,
};
