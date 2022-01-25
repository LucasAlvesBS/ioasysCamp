const utils = require("./utils.js");

const myUser = new Map();

myUser.set("name", "123");
myUser.set("email", "rafaelrodriguesioasys.com.br");
myUser.set("age", -20);
myUser.set("password", "Rafael@");
myUser.set("confirmPassword", "");

const check = {
  name: [
    {
      checking: utils.isEmpty(myUser.get("name")),
      message: "name is empty"
    },
    {
      checking: utils.inValidName(myUser.get("name")),
      message: "name must be only letters between 2 and 200 characters"
    }
  ],
  email: [
    {
      checking: utils.isEmpty(myUser.get("email")),
      message: "email is empty"
    },
    {
      checking: !utils.isEmail(myUser.get("email")),
      message: "invalid email"
    }
  ],
  age: [
    {
      checking: utils.isEmpty(myUser.get("age")),
      message: "age is empty"
    },
    {
      checking: utils.invalidAge(myUser.get("age")),
      message: "age can not be a negative number or greater than 200"
    }
  ],
  password: [
    {
      checking: utils.isEmpty(myUser.get("password")),
      message: "password is empty"
    },
    {
      checking: utils.invalidPassword(myUser.get("password")),
      message: "password can not have less than 8 characters"
    }
  ],
  confirmPassword: [
    {
      checking: utils.isEmpty(myUser.get("confirmPassword")),
      message: "confirmPassword is empty"
    }  
  ]
}  

const formValid = () => {
  try {

    const errorMessages = [];
    Object.keys(check).forEach(key => {
      check[key].filter(value => {
        if(value.checking)
          return errorMessages.push(value.message)
      })
    });

    if ((myUser.get("password") !== myUser.get("confirmPassword"))) {
      errorMessages.push("password and confirmPassword do not match")
    }

    if (errorMessages)
      throw errorMessages;
    console.log("User valid!");

  } catch (e) {
    console.error(e);
  }
};

formValid();