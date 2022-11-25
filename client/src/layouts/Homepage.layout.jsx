import React from "react";
<<<<<<< HEAD
 import Navbar from "../components/Navbar";
 import FoodTab from "../components/FoodTab";
=======
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e

const HomepageLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
<<<<<<< HEAD
         <Navbar/> 
        <FoodTab /> 
=======
        <Navbar />
        <FoodTab />
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e
        <div className="container mx-auto px-4 lg:px-20">
          <Component {...props} />
        </div>
      </>
    );
  };

<<<<<<< HEAD
export default HomepageLayout;
=======
export default HomepageLayout;
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e
