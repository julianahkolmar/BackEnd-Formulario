class UserController {

    handle(req, res, next) {
        const nome = req.body.nome;
        const email = req.body.email;
        const confemail = req.body.confemail;
        const cpf = req.body.cpf;
        const telefone = req.body.telefone;
        const nascimento = req.body.nascimento;

        email_sms (boolean)
        
        whatsapp (boolean)
        res.send("Hello World!");
    }
}

module.exports = new UserController();