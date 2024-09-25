import axios from "axios";

export const fetchImages = async (page = 1, query = "nature") => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "0oF3nb1J595yYJndGrVqpu1GVXu4aNoTMPI4FFirbiI",
      query: query,
      page: page,
      per_page: 9,
    },
  });
  return data.results;
};
