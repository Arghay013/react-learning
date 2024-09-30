import user from '../../assets/images/user.png';

const Banner = () => {
    return (
        <div className="bg-white text-black">
            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-black">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                        One Step Closer <br /> To Your <br /> <span className='text-blue-700'>Dream Job</span> 
                    </h2>
                    <p className="text-lg mb-8">
                        Explore thousands of job opportunities with all the information you need.
                        It's your future. Come find it. Manage all your job applications from start to finish.
                    </p>
                    <button className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                        Get Started
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                    <img 
                        src={user} 
                        alt="User Illustration" 
                        className="w-3/4 md:w-full max-w-md object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
