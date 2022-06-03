class UserController {

    handle(req, res, next) {
        res.send({idade:req.body.idade, name:req.body.name});
    }
}

module.exports = new UserController();