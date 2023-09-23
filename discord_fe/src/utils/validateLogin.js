const validateLogin = (email, password) => {
  const isValid = validateEmail(email) && validatePassword(password);
  return isValid;
};

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
function validatePassword(password) {

  return password.length >= 6 && password.length <= 12;
}
export { validateLogin, validateEmail, validatePassword };
