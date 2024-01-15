const User = require("../models/userModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const {
  registerValidation,
  loginValidation,
} = require("../middleware/validation");

const { addlog } = require("../service/logger");

const JWT_KEY = process.env.JWT_KEY;

exports.signUp = async (req, res, next) => {
  // const { error, value } = registerValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ email: req.body.email }); //returns the first document that matches the query criteria or null
  if (emailExist)
    return res.status(500).send({ message: "Email already exists!" });

  try {
    const newUser = await createUserObj(req);
    const savedUser = await User.create(newUser);
    req.user = savedUser;
    next();

    addlog({
      eventType: "0",
      userId: req.body.email,
      description: "User created successfully!",
      callStack: "controllers/userController/signUp",
      functionName: "signUp",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });

    return res
      .status(200)
      .send({ message: "User created successfully!", user: savedUser });
  } catch (err) {
    addlog({
      eventType: "1",
      userId: req.body.email,
      description: "User not created",
      callStack: "controllers/userController/signUp",
      functionName: "signUp",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });
    return res.status(500).send({ message: "User not created", error: err });
  }
};

// login
exports.logIn = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(500).send(error.details[0].message);

  const foundUser = await User.findOne({ email: req.body.email }); //returns the first document that matches the query criteria or null
  if (!foundUser) {
    addlog({
      eventType: "2",
      userId: req.body.email,
      description: "Invalid username",
      callStack: "controllers/userController/logIn",
      functionName: "logIn",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });
    return res.status(500).send({ message: "invalid login credential" });
  }

  try {
    const isMatch = await bcrypt.compareSync(
      req.body.password,
      foundUser.password
    );
    if (!isMatch) {
      addlog({
        eventType: "3",
        userId: req.body.email,
        description: "Invalid password",
        callStack: "controllers/userController/logIn",
        functionName: "logIn",
        moduleName: "cceestudy",
        machineName: "https://red-violet-sockeye-fez.cyclic.app",
      });
      return res.status(500).send({ message: "invalid login credential" });
    }

    // create and assign jwt
    const token = await jwt.sign(
      { _id: foundUser._id, role: foundUser.role },
      JWT_KEY
    );
    addlog({
      eventType: "4",
      userId: req.body.email,
      description: "Logged in successfully",
      callStack: "controllers/userController/logIn",
      functionName: "logIn",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });
    return res
      .status(200)
      .header("authtoken", token)
      .send({ authtoken: token, userId: foundUser._id, foundUser });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.getAllUsers = async (req, res) => {
  const allUsers = await User.find(
    {},
    {
      firstName: 1,
      lastName: 1,
      paymentStatus: 1,
      expired: 1,
      createdAt: 1,
      updatedAt: 1,
    }
  );
  if (!allUsers) {
    res.status(500).send({ error: "no users found" });
  } else {
    return res
      .status(200)
      .send({ message: "here are the found users:", allUsers });
  }
};

exports.getUser = async (req, res) => {
  try {
    const foundUser = await User.findOne({ _id: req.user._id });
    res.send(foundUser);
  } catch (error) {
    return res.status(500).send({ error: "Unable to find user" });
  }
};

exports.getUserStatus = async (req, res) => {
  try {
    const foundUser = await User.findOne({ email: req.params.email });
    if (!foundUser) {
      res.status(500).send({ error: "no user found" });
    } else {
      res.status(200).send(foundUser);
    }
  } catch (error) {
    return res.status(500).send({ error: "Unable to find user" });
  }
};

exports.updatePaymentStatus = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      paymentStatus: true,
      expired: false,
    });
    if (!updatedUser) {
      return res.status(500).send({ message: "Could not update user" });
    }
    addlog({
      eventType: "5",
      userId: updatedUser.email,
      description: "Payment status updated successfully",
      callStack: "controllers/userController/updateUser",
      functionName: "updateUser",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });
    return res
      .status(200)
      .send({ message: "User updated successfully", updatedUser });
  } catch (error) {
    addlog({
      eventType: "6",
      userId: req.body.email,
      description: "Payment status not updated",
      callStack: "controllers/userController/updateUser",
      functionName: "updateUser",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });
    return res
      .status(500)
      .send({ error: "An error has occurred, unable to update user" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user._id, {
      paymentStatus: true,
      expired: false,
    });
    if (!updatedUser) {
      return res.status(500).send({ message: "Could not update user" });
    }
    addlog({
      eventType: "5",
      userId: updatedUser.email,
      description: "Payment status updated successfully",
      callStack: "controllers/userController/updateUser",
      functionName: "updateUser",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });
    return res
      .status(200)
      .send({ message: "User updated successfully", updatedUser });
  } catch (error) {
    addlog({
      eventType: "6",
      userId: req.body.email,
      description: "Payment status not updated",
      callStack: "controllers/userController/updateUser",
      functionName: "updateUser",
      moduleName: "cceestudy",
      machineName: "https://red-violet-sockeye-fez.cyclic.app",
    });
    return res
      .status(500)
      .send({ error: "An error has occurred, unable to update user" });
  }
};

exports.verify = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.query.id, {
      verified: true,
    });
    if (!updatedUser) {
      return res.status(500).send({ message: "Could not update user" });
    }
    return res.status(200).redirect("https://cceestudy.online/emailverified");
    // .send({ message: "Email verified successfully", updatedUser });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "An error has occurred, unable to update user" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(500).send({
        message: "could not delete user, seems like a database issue",
      });
    } else {
      return res.status(200).send({ message: "user deleted successfully!" });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ error: "an error occured, unable to delete user" });
  }
};

exports.data = async (req, res) => {
  return res.status(200).send({ message: "hitting the data route" });
};

const createUserObj = async (req) => {
  return {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    centreName: req.body.centreName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  };
};
