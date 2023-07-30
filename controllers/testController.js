const data = require("./data");
const Test = require("../models/testModel");
const User = require("../models/userModel");
const Modules = require("../models/modules");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { addlog } = require("../service/logger");

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
    const foundQuestions = data.filter(
      (data) => data.moduleName === req.query.moduleName
    );
    // await Test.findOne({
    //   moduleName: req.query.moduleName,
    // });
    addlog({
      eventType: "7",
      userId: req.user.email,
      description: "Got the questions for : " + req.query.moduleName,
      callStack: "controllers/testController/getQuestions",
      functionName: "getQuestions",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });
    res.send(foundQuestions);
  } catch (error) {
    addlog({
      eventType: "8",
      userId: req.user.email,
      description: "Unable to find quetions",
      callStack: "controllers/testController/getQuestions",
      functionName: "getQuestions",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });
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
    } else {
      addlog({
        eventType: "9",
        userId: updatedUser.email,
        description: "Test added successfully",
        callStack: "controllers/testController/addTest",
        functionName: "addTest",
        moduleName: "cceestudy",
        machineName: "https://red-violet-sockeye-fez.cyclic.app",
      });
    }
    next();
    return res
      .status(200)
      .send({ message: "test added successfully", updatedUser });
  } catch (error) {
    addlog({
      eventType: "10",
      userId: updatedUser.email,
      description: "An error has occurred, unable to add test with results",
      callStack: "controllers/testController/addTest",
      functionName: "addTest",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });
    return res
      .status(400)
      .send({ error: "An error has occurred, unable to update user" });
  }
};

exports.getAttemptedTest = async (req, res) => {
  try {
    const foundUser = await User.findById(req.user._id);
    if (!foundUser) {
      return res.status(400).send({ message: "User not found" });
    } else {
      addlog({
        eventType: "11",
        userId: foundUser.email,
        description: "Got the Attempted test",
        callStack: "controllers/testController/getAttemptedTest",
        functionName: "getAttemptedTest",
        moduleName: "cceestudy",
        machineName: "https://red-violet-sockeye-fez.cyclic.app",
      });
      res.send(foundUser.tests);
    }
  } catch (error) {
    addlog({
      eventType: "12",
      userId: foundUser.email,
      description: "Unable to find tests",
      callStack: "controllers/testController/getAttemptedTest",
      functionName: "getAttemptedTest",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });
    return res.status(400).send({ error: "Unable to find tests" });
  }
};

exports.getModules = async (req, res) => {
  try {
    const Module = await Modules.find();
    res.send(Module[0].modules);
    if (!Module) {
      return res.status(400).send({ message: "Modules not found" });
    }
  } catch (error) {
    return res.status(400).send({ error: "Unable to find Modules" });
  }
};

const createTestObj = async (req) => {
  return {
    moduleName: req.body.moduleName,
    questions: req.body.questions,
  };
};
