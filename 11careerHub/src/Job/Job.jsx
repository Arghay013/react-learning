import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { logo, job_title, salary, remote_or_onsite,company_name,location,job_type } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl mb-10">
      {/* <figure> */}
        <img
          className="mx-auto ml-4"
          src={logo}
          alt="Shoes"
        />
      {/* </figure> */}
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-5">
            <button className="px-5 py-2 font-bold border rounded-md border-blue-500 text-blue-600">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-bold border rounded-md border-blue-500 text-blue-600">{job_type}</button>
        </div>
        <div className="flex gap-5">
            <div className="flex">
                <IoLocationOutline className="text-2xl mr-1" />
                <p>{location}</p>
            </div>
            <div className="flex">
                <AiOutlineDollar className="text-2xl mr-1"/>
                <p>{salary}</p>
            </div>
        </div>
        <div className="card-actions">
          <Link to={`/job/${job.id}`}>
          <button className="text-black btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
