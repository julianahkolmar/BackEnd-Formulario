const User = require("../mocks/UserMock")

class UserService {
    createUser(body) {
        const {
            name,
            email,
            cemail,
            cpf,
            celular,
            nascimento,
            pais,
            cidade,
            cep,
            endereco,
            numero
        } = body;
        if (name == "" || name.length < 3) {
            console.log("Nome invalido")
        }
        if (email == "") {
            console.log("ERRO! Email vazio.")
        }
        if (cemail !== email) {
            console.log("Email não corresponde.")

        }
    }
}

module.exports = new UserService;