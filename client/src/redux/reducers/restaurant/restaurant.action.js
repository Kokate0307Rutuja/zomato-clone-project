import axios from "axios";

// redux types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
  try {
    const restaurantList = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_CLIENT_URL}restaurant?city=NCR`,
    });

    return dispatch({
      type: GET_RESTAURANT,
      payload: restaurantList.data.restaurants,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getSpecificRestaurant = (_id) => async (dispatch) => {
  try {
    const restaurantList = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_CLIENT_URL}restaurant/${_id}`,
    });

    return dispatch({
      type: GET_SPECIFIC_RESTAURANT,
      payload: restaurantList.data,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e
