import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;

const getPokemons = async () => {
  const response = await api.get("/pokemon");
  return response.data;
};

export { getPokemons };
