const { response } = require("express");

const getUsers = (req, res = response) => {
  res.json({
    msg: "get API - getUsers",
  });
};

const postUser = (req, res = response) => {
  res.status(201).json({
    msg: "post API - postUser",
  });
};

const putUser = (req, res = response) => {
  res.status(500).json({
    msg: "put API - putUser",
  });
};

const patchUser = (req, res = response) => {
  res.json({
    msg: "patch API - patchUser",
  });
};

const deleteUser = (req, res = response) => {
  res.json({
    msg: "delete API - deleteUser",
  });
};

module.exports = {
  getUsers,
  postUser,
  putUser,
  patchUser,
  deleteUser,
};
