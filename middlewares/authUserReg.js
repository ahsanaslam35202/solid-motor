var { validateUser } = require("../models/User");

function validateUserRegMW(req, res, next) {
  console.log(req.body);
  let user = validateUser(req.body);
  if (user.error) {
    let test = "";
    for (let i = 0; i < user.error.details.length; i++) {
      test = test + user.error.details[i].message;
      test = test + " ";
    }
    return res.status(400).send(test);
  }
  next();
}
module.exports = validateUserRegMW;
