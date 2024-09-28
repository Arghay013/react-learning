import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Banner/>
            <CategoryList/>
            <FeaturedJobs/>
           <h1>Home</h1>
        </div>
    );
};

export default Home;