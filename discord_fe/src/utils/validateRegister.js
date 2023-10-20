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

const validateDate = (day, month, year) => {
  if(day != "" && month != "" && year != "") {
    let newDay = day;
    let newMonth = month;
    if(day < 10) {
      newDay = '0' + newDay;
    }
    if(month < 10) {
      newMonth = '0' + newMonth; 
    }
    
    const date = new Date(`${year}-${newMonth}-${newDay}`);

    if(date.getFullYear() == year && date.getMonth() + 1 == month && date.getDate() == day) {
      
      if(date instanceof Date && !isNaN(date)) {
        return true; 
      }
    }
    return false;
  }
}
export default validateRegister;
