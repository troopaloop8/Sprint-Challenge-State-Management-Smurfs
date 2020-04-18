import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewSmurf } from "../actions";

const NewSmurfForm = props => {
  const [smurf, setSmurf] = useState({});

  const handleChange = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewSmurf(smurf);
    setSmurf({
      name: "",
      age: "",
      height: ""
    });
    console.log(smurf);
  };

  return (
    <div>
      <h1 className="subtitle">Populate Smurf Village</h1>
      <form>
        <div className="field">
          <div className="control">
            <label htmlFor="name"></label>
            <input
              className="input is-info"
              placeholder="Name"
              type="text"
              name="name"
              value={smurf.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label htmlFor="age"></label>
            <input
              className="input is-info"
              placeholder="Age"
              type="text"
              name="age"
              value={smurf.age}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-info"
              placeholder="Height (in cm)"
              type="text"
              name="height"
              value={smurf.height}
              onChange={handleChange}
            />
          </div>
        </div>
        <label htmlFor="height"></label>
        <input
          className="button is-small is-info is-bold"
          type="submit"
          value="Admit Smurf to Village"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default connect(null, { addNewSmurf })(NewSmurfForm);
