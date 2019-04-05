import React, { useState } from "react";

const submitDomain = e => {
  console.log("TCL: e", e);
  e.preventDefault();
  //TODO magic
};
const AddDomain = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const domainForm = (
    <form onSubmit={submitDomain}>
      <input
        type="text"
        name="domain-name"
        id="domain-name"
        pattern="[a-zA-Z0-9]{2,}.[a-zA-Z]{2,}"
        placeholder="yourdomain.com"
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
  const switchButton = (
    <button
      className="btn"
      type="submit"
      onClick={() => setDisplayForm(!displayForm)}
    >
      Add
    </button>
  );
  if (displayForm) {
    return <div className="add-domain-form">{domainForm}</div>;
  } else {
    return <div className="add-domain-form">{switchButton}</div>;
  }
};

export default AddDomain;
