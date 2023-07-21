const validateRegister = (mail, password, username) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return (
    emailPattern.test(mail) &&
    password.length >= 6 &&
    password.length <= 12 &&
    username.length > 2 &&
    username.length < 13
  );
};
export default validateRegister;
