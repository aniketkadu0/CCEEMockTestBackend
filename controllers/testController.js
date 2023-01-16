const Test = require("../models/testModel");
const User = require("../models/userModel");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

exports.addQuestions = async (req, res, next) => {
  try {
    const newTest = await createTestObj(req);
    const savedTest = await Test.create(newTest);
    return res
      .status(200)
      .send({ message: "Test added successfully!", Test: savedTest });
  } catch (err) {
    return res.status(400).send({ message: "Test not created", error: err });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const foundQuestions = await Test.findOne({
      moduleName: req.query.moduleName,
    });
    res.send(foundQuestions);
  } catch (error) {
    return res.status(400).send({ error: "Unable to find quetions" });
  }
};

exports.addTest = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $push: { tests: req.body } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(400).send({ message: "User not found" });
    } else next();
    return res
      .status(200)
      .send({ message: "test added successfully", updatedUser });
  } catch (error) {
    return res
      .status(400)
      .send({ error: "An error has occurred, unable to update user" });
  }
};

exports.getAttemptedTest = async (req, res) => {
    try {
        const foundUser = await User.findById(req.user._id);
      res.send(foundUser.tests);
      if (!foundUser) {
        return res.status(400).send({ message: "User not found" });
      }
    } catch (error) {
      return res.status(400).send({ error: "Unable to find tests" });
    }
};

const createTestObj = async (req) => {
  return {
    moduleName: req.body.moduleName,
    questions: req.body.questions,
  };
};
