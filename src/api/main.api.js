import axios from "axios";
import { endpoints } from "../constants/endpoints";

export const getForm = () => {
  return axios.get(endpoints.main + endpoints.form);
};

export const postForm = (data) => {
  return axios.post(endpoints.main + endpoints.form, data);
};
