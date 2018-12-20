import { createStore } from "redux";
import dummyData from "../Reducers/dummyData";

export default () => {
  const store = createStore(dummyData);
  console.log(store);
  return store;
};
