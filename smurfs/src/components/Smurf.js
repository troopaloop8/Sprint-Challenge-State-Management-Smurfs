import React from "react";
import { connect } from "react-redux";

import { deleteSmurf } from "../actions";

const Smurf = props => {
  const handleDelete = () => {
    props.deleteSmurf(props.smurf.id);
  };
  return (
    <div className="smurfy">
      <h2 className="name">{props.smurf.name}</h2>
      <p>
        <b>Age</b>: {props.smurf.age}
      </p>
      <p>
        <b>Height</b>: {props.smurf.height}
      </p>
      <p>
        <button
          className="button spacer is-small is-info is-bold"
          onClick={handleDelete}
        >
          Evict Smurf
        </button>
      </p>
    </div>
  );
};

export default connect(null, { deleteSmurf })(Smurf);
