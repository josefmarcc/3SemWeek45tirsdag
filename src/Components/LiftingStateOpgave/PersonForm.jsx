import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function NameForm(props) {
  const [name, setName] = useState(props.nextName);

  const saveName = (evt) => {
    if (name.name === "") {
      return;
    }
    props.addName(name);
    console.log(name);
    evt.preventDefault();
  };

  const handleChange = (event) => {
    const val = event.target.value;
    name.name = val;
    setName({ ...name });
  };

  useEffect(() => setName({ ...props.nextName }), [props.nextName]);

  return (
    <div>
      <h4>Add a name</h4>
      <form>
        <input value={name.name} onChange={handleChange} />
        <br />
        <br />
        <button onClick={saveName} className="btn btn-info">
          Save
        </button>
      </form>
    </div>
  );
}
export default NameForm;

NameForm.propTypes = {
  nextName: PropTypes.object,
  addName: PropTypes.func,
};
