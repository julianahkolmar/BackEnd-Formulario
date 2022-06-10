const { Router }  = require("express");

const router = Router()

const UserController = require("./controllers/UserController");
const UserController2 = require("./controllers/UserController2");
const AllUserController = require("./controllers/AllUserController");

router.get("/", AllUserController.handle);
router.get("/User", UserController.handle);
router.get("/User/2", UserController2.handle);

module.exports = router;
