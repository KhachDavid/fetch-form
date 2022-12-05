/**
 * Function for checking whether the given email is valid or not
 * @param {string} email is the current email that is in the textbox
 * @returns true if the email is valid, false otherwise
 * the email is considered valid if it is not an empty string and contains an @ symbol
 * or it is an empty string
 * the email is considered invalid if it is not an empty string and does not contain an @ symbol
 */
export const isEmailValid = (email) => {
  if (email === "") return true;
  return email.includes("@");
};

/**
 * Function for checking whether the given password meets the requirements or not
 * PASSWORD_ERROR_HELPER_TEXT is defined in src/constants/index.js
 * and includes the requirements
 * @param {string} password is the current `password` that is in the textbox
 * @returns true if the password meets the requirements, false otherwise
 */
export const isPasswordValid = (password) => {
  if (password === "") return true;

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password) && !password.includes(" ");
};

/**
 * Function for checking whether the given password and confirm password match or not
 * @param {string} password is the current `password` that is in the textbox
 * @param {string} confirmPassword is the current `confirmPassword` that is in the textbox
 * @returns true if the password and confirm password match, false otherwise
 */
export const doPasswordsMatch = (password, confirmPassword) => {
  if (password === "" || confirmPassword === "") return true;
  return password === confirmPassword;
};
