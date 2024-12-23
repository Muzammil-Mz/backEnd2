import express from "express";
import bcrypt from "bcrypt"
import userModel from "../../models/Users/Users.js";

const router = express.Router();

router.get("/getallusers", async (req, res) => {
  try {
    console.log("Hello");
    let allUsers = await userModel.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.get("/getone/:id", async (req, res) => {
  try {
    let userId = req.params.id;
    let getOneData = await userModel.find({ _id: userId });
    res.status(200).json(getOneData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.post("/register", async (req, res) => {
  try {
    console.log("register user");
    let userData = req.body;
// let hashpassword= await bcrypt.hash(userData.password,10)
// userData.password=hashpassword
    await userModel.create(userData);
    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.put("/updateuser/:id", async (req, res) => {
  try {
    console.log("updateuser");
    let userId = req.params.id;
    let userData = req.body;
    await userModel.updateOne({ _id: userId }, { $set: userData });

    res.status(200).json("updated user success");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.delete("/deleteone/:id", async (req, res) => {
  try {
    let userId = req.params.id;
    await userModel.deleteOne({ _id: userId });
    res.status(200).json("user deleted succcessfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.delete("/deleteall", async (req, res) => {
  try {
    await userModel.deleteMany()
    res.status(200).json("delete all users");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;
