const utils = require("./utils.js");

const user = {
  name: "R123",
  email: "@ioasys.com.br",
  age: -20,
  password: "Rafael@123",
  confirmPassword: "Rafa",
};

const myUser = new Map();

myUser.set("name", user.name);
myUser.set("email", user.email);
myUser.set("age", user.age);
myUser.set("password", user.password);
myUser.set("confirmPassword", user.confirmPassword);

const check = [
  utils.isEmpty(user.name),
  utils.isEmpty(user.email),
  utils.isEmpty(user.age),
  utils.isEmpty(user.password),
  utils.isEmpty(user.confirmPassword)
];

const formValid = () => {
  try {
    myUser.forEach(utils.formValid);
    const empty = check.find(value => value === true);
    
    if ((user.password !== user.confirmPassword)) {
      const match = ["password and confirmPassword do not match."]
      console.log(match);
    }
    
    if (empty === true || !utils.isEmail(user.email) || (user.password !== user.confirmPassword)
      || !utils.ageRange(user.age) || !utils.validName(user.name) || !utils.lengthPassword(user.password))
          throw "\nUser invalid! Please, check the fields again!\n"
    console.log("User valid!");

  } catch (e) {
    console.error(e);
  }
};

formValid();