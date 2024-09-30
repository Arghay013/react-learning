import { useState, useEffect } from "react";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    // Fetch the categories from the JSON file
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className="py-16 bg-white">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">Job Category List</h1>
                <p className="text-gray-600 mb-2">Explore a wide range of job categories in different fields</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {categories.map(category => (
                    <div key={category.id} className="bg-white shadow-lg p-6 rounded-lg text-center">
                        <img src={category.logo} alt={category.category_name} className="w-16 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{category.category_name}</h2>
                        <p className="text-gray-500">{category.availability}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
