import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
    const coffeDetails=useLoaderData()
    console.log(coffeDetails)
    return (
        <div>
          
        </div>
    );
};

export default UpdateCoffee;