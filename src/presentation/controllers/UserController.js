class UserController {

    handle(req, res, next) {
        res.send("Cururu");
    }
}

module.exports = new UserController();