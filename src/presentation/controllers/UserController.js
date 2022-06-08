const {
    User
} = require("../../domain/user/mocks/UserMock");
const UserService = require("../../domain/user/services/UserService")

class UserController {

    handle(req, res, next) {
        const {
            body
        } = req
        UserService.createUser(body)

        /** res.send({idade:req.body.idade, name:req.body.name});
     } */
    }
}

module.exports = new UserController();