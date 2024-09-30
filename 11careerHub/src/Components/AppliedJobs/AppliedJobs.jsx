import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/Localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  const handleJobsFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setDisplayJobs(appliedJobs);
    }
    else if (filter === 'Remote') {
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs);
    } else if (filter === 'Onsite') {
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = storedJobIds.map(id => jobs.find(job => job.id === id)).filter(Boolean);
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Applied Jobs ({appliedJobs.length})</h1>
      
      {/* Filter Buttons */}
      <div className="flex justify-center mb-8 space-x-4">
        {['All', 'Remote', 'Onsite'].map(filter => (
          <button
            key={filter}
            onClick={() => handleJobsFilter(filter)}
            className={`px-4 py-2 rounded-full border 
              ${activeFilter === filter 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'} 
              transition duration-300`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Jobs Grid */}
      {displayJobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs found for the selected filter.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayJobs.map(job => (
            <div key={job.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                {/* Company Logo (Optional) */}
                {job.company_logo && (
                  <img 
                    src={job.company_logo} 
                    alt={`${job.company_name} logo`} 
                    className="w-16 h-16 mb-4 object-contain" 
                  />
                )}

                <h2 className="text-xl font-semibold mb-2">{job.job_title}</h2>
                <p className="text-gray-600 mb-1">{job.company_name}</p>
                <p className="text-gray-500 mb-4">{job.remote_or_onsite}</p>
                <p className="text-gray-500 mb-4">Location: {job.location || 'N/A'}</p>
                <p className="text-gray-500 mb-4">Applied on: {job.applyDate || 'N/A'}</p>
                
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
