import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// redux middlewares
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

<<<<<<< HEAD
export default store;
=======
export default store;
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e
