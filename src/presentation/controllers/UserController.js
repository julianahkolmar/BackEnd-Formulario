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

        res.send({name:req.body.name, email:req.body.email, cemail:req.body.cemail, cpf:req.body.cpf, celular:req.body.celular, nascimento:req.body.nascimento, whatsapp:req.body.whatsapp, emailsms:req.body.emailsms});
     } 
    }


module.exports = new UserController();