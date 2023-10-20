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
export default validateDate;