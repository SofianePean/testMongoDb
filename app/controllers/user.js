const { User } = require("../models");
const bcrypt = require("bcrypt");

const userController = {
  createUser: async (req, res) => {
    try {
      const password = req.body.password;
      // Ici je test si il y a deja un utilisateur avec cette email
      const findUser = await User.findOne({ mail: req.body.mail });
      if (findUser) {
        return res
          .status(200)
          .json("Un utilisateur avec cet email existe deja !");
      }
      bcrypt.hash(password, 5, function (error, bcryptPassword) {
        const user = new User({ ...req.body, password: bcryptPassword });
        const result = user.save();
      });

      res.status(200).json("Utilisateur créé");
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
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { mail, password } = req.body;
      if (mail == null || password == null) {
        return res.status(400).json("Il manque l'email ou le password.");
      }
      const user = await User.findOne({ mail: req.body.mail });
      if (!user) {
        return res.status(400).json("Pas de compte avec cet email");
      } else {
        bcrypt.compare(
          password,
          user.password,
          function (errByCrypt, resByCrypt) {
            if (resByCrypt) {
              res.status(200).json({ msg: "Utilisateur connecté", user });
            } else {
              return res.status(403).json("Mot de passe invalide");
            }
          }
        );
      }
    } catch (error) {
      next(error);
    }
  },
  deleteAccount: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const user = await User.deleteOne({ _id: userId });
      console.log(user)
      if(!user._id) {
        return res.status(400).json("Pas d'utilisateur")
      }
      res.status(200).json("L'utilisateur est supprimé");
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
