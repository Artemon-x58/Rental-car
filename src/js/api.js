import axios from "axios";

export const funcRequest = async () =>
  axios.get(`https://6571cca3d61ba6fcc0139cdb.mockapi.io/adverts/adverts`);
await ((res) => res.data);
