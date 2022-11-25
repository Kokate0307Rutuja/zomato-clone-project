import { GET_USER, SELF, CLEAR_USER } from "./user.type";

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
      };
    case SELF:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_USER:
      return {
        user: {},
      };
    default:
      return {
        ...state,
      };
  }
};

<<<<<<< HEAD
export default userReducer;
=======
export default userReducer;
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e
