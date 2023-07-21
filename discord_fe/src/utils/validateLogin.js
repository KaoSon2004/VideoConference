const validateLogin = (mail, password) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return (
    emailPattern.test(mail) && password.length >= 6 && password.length <= 12
  );
};
export default validateLogin;
