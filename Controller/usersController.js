const model = require("../models/user");
const User = model.User;

exports.postNewUser = (req, res) => {
  // const id = +req.params.id;
  // const newUser = req.body;
  // users.push({ ...newUser, id: id });
  const user = new User();
  user.firstName = "shaheen";
  user.lastName = "Khan";
  user.age = 21;
  user.email = "shaheenShah@gmail.com";
  user.save();

  res.status(201).json(req.body);
};
exports.getAllUsers = (req, res) => {
  res.status(201).json(users);
};

exports.getUserById = (req, res) => {
  const id = +req.params.id;
  const user = users.find((u) => u.id === id);
  res.status(201).json(user);
};

exports.replaceUser = (req, res) => {
  const id = +req.params.id;
  const indexUser = users.findIndex((u) => u.id === id);
  users.splice(indexUser, 1, { ...req.body, id: id });
  res.status(201).json(users);
};

exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((u) => u.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(201).json(users);
};

exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  res.status(201).json(
    users.splice(
      users.findIndex((u) => u.id === id),
      1
    )
  );
};
