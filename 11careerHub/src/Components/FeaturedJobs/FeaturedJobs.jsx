import { useEffect, useState } from "react";
import Job from "../../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this not best way to use show all data
    const [showAll, setShowall] = useState(4);

    useEffect ( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);


    return (
        <div>
            <div className="text-center gap-4">
                <div className="text-5xl">Featured Jobs :{jobs.length}</div>
                <p>The jobs have individual features. They are interesting..</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, showAll).map( job => <Job key={job.id} job={job} />)
                }
            </div>
            <div className={ showAll === jobs.length ? 'hidden' :'text-center mb-5'}>
                <button
                onClick={() => setShowall(jobs.length)}
                className="text-black btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 ">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;