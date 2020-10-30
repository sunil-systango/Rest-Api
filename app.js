var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.get("/users", () =>{
  const users = [
    {
      firstName: "Jack",
      lastName: "Daniel",
      userEmail: "jack@daniel.com",
      gender: "male",
    },
    {
      firstName: "John",
      lastName: "Daniel",
      userEmail: "john@daniel.com",
      gender: "male",
    },
    {
      firstName: "Rock",
      lastName: "Johnson",
      userEmail: "rock@johnson.com",
      gender: "male",
    },
    {
      firstName: "Veronica",
      lastName: "Lincoln",
      userEmail: "veronica@lincoln.com",
      gender: "female",
    }
  ];
  res.json(users);
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
