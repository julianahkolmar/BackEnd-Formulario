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
        if (name == "" || name.length < 3 || name !== String) {
            console.log("Nome invalido.")
        }
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if (email == "" || !emailRegex.test(email)) {
            console.log("Email inválido")
        }
        if (cemail == "" || cemail !== email) {
            console.log("Email inválido.")
        }
        if (cpf == "" || cpf !== Number || cpf.length < 11) {
            console.log("CPF inválido.")
        }
        if (celular == "" || celular !== Number || celular.length < 11) {
            console.log("Número de celular inválido.")
        }
        if (nascimento == "" || nascimento !== Number) {
            console.log("Data de nascimento inválido.")
        }
        if (pais == "" || pais !== String || pais.length < 3) {
            console.log("País inválido.")
        }
        if (cidade == "" || cidade !== String) {
            console.log("Cidade inválida.")
        }
        if (cep == "" || cep !== Number || cep.length < 8) {
            console.log("CEP inválido.")
        }
        if (endereco == "" || endereco !== String) {
            console.log("Endereço inválido.")
        }
        if (numero == "" || numero !== Number) {
            console.log("Número inválido.")
        }
    }
}

module.exports = new UserService;