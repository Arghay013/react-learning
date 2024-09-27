import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name + " " + email);
    }


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" className="input input-bordered" name="name" />
        <br />
        <input
          onChange={handleEmailChange} 
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

export default StatefulForm;
