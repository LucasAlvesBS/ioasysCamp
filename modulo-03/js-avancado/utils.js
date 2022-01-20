const isEmpty = value => {
  if (typeof value === "string") {
    return !value;
  }
  
  if (typeof value === "number") {
    return false;
  }
  
  if (typeof value === "boolean") {
    return false;
  }
  
  return true;
};

const validName = value => {
  if (!(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(value)))
    return false;
    
  if (value.length < 2 || value.length > 200)
    return false;  

  return true;
} 
  
const isEmail = (value) =>
  value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

const ageRange = value => {
  if (value < 0 || value > 200)
    return false;
  return true;
} 

const lengthPassword = value => {
  if (value.length < 8 || value.length > 30)
    return false;
  return true;
}
    
const formValid = (value, key) => {
  let error = [];
  if (isEmpty(value)) {
    error.push(`${key} is empty!`);
    console.log(error);
  }

  if (key === "name" && !validName(value) && !isEmpty(value)) {
    error.push(`${key} must be only letters between 2 and 200 characters.`);
    console.log(error);
  }    
      
  if (key === "email" && !isEmail(value) && !isEmpty(value)) {
    error.push(`${value} is not a valid email!`);
    console.log(error);
  } 

  if (key === "age" && !ageRange(value) && !isEmpty(value)) {
    error.push(`${key} can not be a negative number or greater than 200.`);
    console.log(error);
  }

  if (key === "password" && !lengthPassword(value) && !isEmpty(value)) {
    error.push(`${key} can not have less than 8 characters.`);
    console.log(error);
  }    
};

module.exports = { 
  isEmpty, 
  formValid, 
  isEmail, 
  ageRange,
  validName,
  lengthPassword
};