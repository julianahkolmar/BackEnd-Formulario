const User = require("../mocks/UserMock")

class UserService {
    createUser(body) {
        const {
            name,
            email,
            cemail,
            emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
            cpf,
            celular,
            nascimento,
            pais,
            cidade,
            cep,
            endereco,
            numero
        } = body;
        console.log(body)
    }
}

module.exports = new UserService;