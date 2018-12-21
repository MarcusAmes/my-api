//Update the name of the controller below and rename the file.
const users = require("../controllers/users")


module.exports = function(app){

  //USERS
    app.get('/users', users.all);
    app.get('/users/:id', users.one);
    app.post('/users', users.add)
  //MESSAGES




}
