import axios from "axios";
import { endpoints } from "../constants/endpoints";

/**
 * This function is used to get the account creation form data.
 * It includes the list of states and occupations, which are
 * needed to populate the form.
 * @returns {Promise}
 * When resolved, if successful returns an array of objects with the following structure:
 * response = {
 *   data: {
 *     states: {
 *       name: string,
 *       abbreviation: string,
 *     },
 *     occupations: []
 *   },
 *   status: number,
 * }
 */
export const getForm = () => {
  return axios.get(endpoints.main + endpoints.form);
};

/**
 * Post form data to the server.
 * The object passed to this function should have the following structure:
 * data = {
 *  name: string,
 *  email: string,
 *  password: string,
 *  occupation: string,
 *  state: string,
 * }
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.password
 * @param {string} data.occupation
 * @param {string} data.state
 * @returns {Promise}
 * response.status 201 if successful
 */
export const postForm = (data) => {
  return axios.post(endpoints.main + endpoints.form, data);
};
