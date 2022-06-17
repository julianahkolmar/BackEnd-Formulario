const {
    Router
} = require("express");

const {
    celebrate,
    Segments,
    Joi
} = require("celebrate");

const router = Router()

const UserController = require("./controllers/UserController");
const UserController2 = require("./controllers/UserController2");
const AllUserController = require("./controllers/AllUserController");

router.post("/", celebrate({
    [Segments.BODY]: {
        name: Joi.string().min(3),
        email: Joi.string().email().required(),
        cemail: Joi.string().email().required(),
        cpf: Joi.number().min(11),
        celular: Joi.number().min(11),
        nascimento: Joi.date().required(),
        whatsapp: Joi.boolean(),
        emailsms: Joi.boolean(),
        pais: Joi.string().required(),
        cidade: Joi.string().required(),
        cep: Joi.number().min(8),
        endereco: Joi.string().required(),
        numero: Joi.number().required()
    }

}), AllUserController.handle);
router.get("/User", UserController.handle);
router.get("/User/2", UserController2.handle);

module.exports = router;