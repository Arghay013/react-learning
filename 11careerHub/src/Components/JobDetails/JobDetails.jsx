import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/Localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job); 

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast.success('You have applied successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="container mx-auto py-12">
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                {/* Job Details Section */}
                <div className="md:col-span-2 lg:col-span-3 bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-2xl font-bold text-gray-500 mb-6">{job.company_name}</p>

                    {/* Job Description */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Job Description</h3>
                        <p className="text-gray-700 mb-3">{job.job_description}</p>

                        {/* Responsibilities */}
                        <h3 className="text-2xl font-semibold mb-2">Responsibilities</h3>
                        <p className="text-gray-700 mb-4">{job.job_responsibility}</p>

                        <h3 className="text-2xl font-semibold mb-2">Educational Requirements</h3>
                        <p className="text-gray-700 mb-4">{job.educational_requirements}</p>

                        <h3 className="text-2xl font-semibold mb-2">Experiences</h3>
                        <p className="text-gray-700 mb-4">{job.experiences}</p>
                        
                    </div>
                </div>

                {/* Side Section */}
                <div className="bg-gray-100 p-5 rounded-lg shadow-lg flex flex-col h-full ">
                    <h2 className="text-2xl font-bold mb-6">Apply for this Job</h2>
                    <div className="mb-6">
                    <h2 className="text-xl font-semibold mt-3 mb-2">Job Detail</h2>
                    <div className="bg-gray-800 p-[1px]"></div>
                        <div>
                            <p className="text-lg text-gray-700">
                                Salary: <span className="font-semibold">{job.salary}</span>
                            </p>
                            <p className="text-lg text-gray-700">
                                Location: <span className="font-semibold">{job.location}</span>
                            </p>
                            <p className="text-lg text-gray-700">
                                Job Tytle: <span className="font-semibold">{job.job_title}</span>
                            </p>

                            <p className="text-lg text-gray-700">
                                Type: <span className="font-semibold">{job.job_type}</span>
                            </p>
                        </div>
                        <div>
                        <h2 className="text-xl font-semibold mt-3 mb-2">contact Information</h2>
                        <div className="bg-gray-800 p-[1px]"></div>
                        <p className=" text-gray-700">
                                Phone: <span className="font-semibold">{job.contact_information.phone}</span>
                            </p>
                            <p className=" text-gray-700">
                                Email: <span className="font-semibold">{job.contact_information.email}</span>
                            </p>
                            <p className=" text-gray-700">
                                Address: <span className="font-semibold">{job.contact_information.address}</span>
                            </p>
                        </div>
                    </div>
                    <button 
                        onClick={handleApplyJob}  
                        className="btn btn-primary w-full text-lg py-3 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 mt-auto"
                    >
                        Apply Now
                    </button>
                </div>
            </div>

            {/* Toast for Notifications */}
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
