import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();

    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value + " " + emailRef.current.value);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" className="input input-bordered" name="name" />
        <br />
        <input
          ref={emailRef}
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

export default RefForm;
