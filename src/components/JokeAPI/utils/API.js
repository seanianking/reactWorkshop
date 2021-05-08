import axios from "axios";

//Will use the icanhazdadjoke api to pull jokes based off of the user's search criteria

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://icanhazdadjoke.com/search?term=" + query
    );
  }
};
