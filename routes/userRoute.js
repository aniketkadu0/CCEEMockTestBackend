const router = require("express").Router();
const userController = require("../controllers/userController");
const testController = require("../controllers/testController");
const mailController = require("../controllers/mailController");
const { verifyUser } = require("../middleware/verifyToken");

router.get("/", verifyUser, userController.getAllUsers);
router.get("/getuser", verifyUser, userController.getUser);
router.post("/getuserstatus/:email", verifyUser, userController.getUserStatus);
router.post("/signup", userController.signUp);
router.post("/login", userController.logIn);
router.get("/data", verifyUser, userController.data);
router.post("/addquestions", verifyUser, testController.addQuestions);
router.get("/getquestions", verifyUser, testController.getQuestions);
router.get("/getmodules", testController.getModules);
router.get("/getattemptedtest", verifyUser, testController.getAttemptedTest);
router.post("/addtest", verifyUser, testController.addTest);
router.post("/paymentstatus", verifyUser, userController.updateUser);
router.post("/paymentstatusupdate/:id", userController.updatePaymentStatus);
router.get("/verify", userController.verify);

module.exports = router;
