import axios from "axios";

export const fetchImages = async () =>{
const { data } = await axios.get(
  "https://api.unsplash.com/photos/?client_id=0oF3nb1J595yYJndGrVqpu1GVXu4aNoTMPI4FFirbiI"
);
return data;
};