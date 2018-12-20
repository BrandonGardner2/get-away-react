import { SEARCH_VACATION } from "../Actions/searchVacation";

const initialState = {
  user: "Brandon",
  vacation: [
    { location: "Haiti" },
    { dates: "5-20-19 through 5-30-19" },
    { events: ["Bowling", "Skiing", "Surfing"] }
  ]
};

const dummyData = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VACATION:
      return [...state];
    default:
      return state;
  }
};

export default dummyData;
