import { RequestHandler } from "express";
import bcryptjs from "bcryptjs";
import User from "../models/User";

export const createUser: RequestHandler = async (req, res) => {
  const { username, password } = req?.body;

  User.findOne({ username }, async (err:any, doc:any) => {
    if (err) throw err;
    if (doc) res.send("User already exists");
    if (!doc) {
      const hashedPassword = await bcryptjs.hash(password, 10);
      const newUser = new User({
        username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("success");
      console.log(newUser);
    }
  });
};

export const loginUser: RequestHandler = (_, res) => {
  res.send("success");
};

export const getUser: RequestHandler = (req, res) => {
  res.send(req.user);
};

export const logout: RequestHandler = (req, res) => {
  req.logout();
  res.send("success");
};
