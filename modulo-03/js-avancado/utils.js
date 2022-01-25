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
}

const inValidName = value => {
  if (!(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(value)))
    return true;
    
  if (value.length < 2 || value.length > 200)
    return true;  

  return false;
} 
  
const isEmail = value =>
  value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

const invalidAge = value => {
  if (value < 0 || value > 200)
    return true;
} 

const invalidPassword = value => {
  if (value.length < 8 || value.length > 30)
    return true;
}  

module.exports = { 
  isEmpty,  
  isEmail, 
  invalidAge,
  inValidName,
  invalidPassword
};