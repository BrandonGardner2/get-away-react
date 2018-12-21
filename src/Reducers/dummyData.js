import { SEARCH_VACATION } from "../Actions/searchVacation";

const initialState = {
  user: "Brandon",
  vacations: [
    {
      image:
        "https://media.worldnomads.com/Travel-Safety/Haiti/labadee-haiti.jpg",
      location: "Haiti",
      dates: "5-20-19 through 5-30-19",
      events: ["Bowling", "Skiing", "Surfing"]
    },
    {
      image:
        "http://www.destination360.com/europe/turkey/images/s/when-to-go.jpg",
      location: "Turkey",
      dates: "6-20-19 through 6-30-19",
      events: ["Dancing", "Sky Diving", "Swimming"]
    },
    {
      image:
        "https://img.grouponcdn.com/deal/MSBps35Hiq9T36vxJmQ/B3-960x582/v1/c700x420.jpg",
      location: "Japan",
      dates: "7-20-19 through 7-30-19",
      events: ["Museums", "Parks", "Monuments"]
    }
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
