const router = require("express").Router();
const userController = require("../controllers/userController");
const testController = require("../controllers/testController");
const mailController = require("../controllers/mailController");
const { verifyUser } = require("../middleware/verifyToken");

router.get("/",verifyUser, userController.getAllUsers);
router.get("/getuser",verifyUser, userController.getUser);
router.post("/signup", userController.signUp, mailController.mailer);
router.post("/login", userController.logIn);
router.get('/data', verifyUser, userController.data);
router.post('/addquestions', verifyUser,testController.addQuestions);
router.get('/getquestions', verifyUser,testController.getQuestions);
router.get('/getattemptedtest', verifyUser,testController.getAttemptedTest);
router.post('/addtest', verifyUser, testController.addTest);
router.post('paymentstatus',verifyUser, userController.updateUser);
// router.delete('/:userId', userController.deleteUser);

module.exports = router;

