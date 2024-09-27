import React from "react";

const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
      }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="input input-bordered" name="name" />
        <br />
        <input
          type="text"
          className="input input-bordered"
          name="email"
          id=""
        />
        <br />
        <input type="submit" className="input input-bordered" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
