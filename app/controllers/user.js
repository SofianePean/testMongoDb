const { User } = require("../models");

const userController = {
  createUser: async (req, res) => {
    try {
      const user = new User(req.body);
      const result = await user.save();
      res.send(result);
    } catch (e) {
      console.log(e);
    }
  },
  getOneUser: async (req, res) => {
    if (!req.body.mail) {
      res.send("Il faut passer une params mail dans la requête !");
    }
    try {
      const mail = req.body.mail;
      const user = await User.find({ mail });

      res.status(200).json(user);
    } catch (e) {
      console.log(e);
    }
  },
  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.find();
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
};

module.exports = userController;