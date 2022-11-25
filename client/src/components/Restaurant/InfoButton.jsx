import React from "react";
import classnames from "classnames";

const InfoButton = ({ children, ...props }) => {
  return (
    <button
      className={classnames(
        "flex items-center gap-3 border px-4 py-2 border-black rounded-lg",
        {
          "bg-zomato-300 text-white border-none": props.isActive,
        }
      )}
    >
      {children}
    </button>
  );
};

<<<<<<< HEAD
export default InfoButton;

=======
export default InfoButton;
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e
