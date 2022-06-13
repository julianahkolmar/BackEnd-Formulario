const User = require("../mocks/UserMock")

class UserService {
    createUser(body) {
        const {name, email, cemail, cpf, celular, nascimento, pais, cidade, cep, endereco, numero} = body;
        if (name == "") {
            console.log("Nome vazio.")
        }
    }
}

module.exports = new UserService;