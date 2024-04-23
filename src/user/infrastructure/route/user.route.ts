
import { route } from "../../../helpers/express.helper";
import { authorize } from "../../../middleware/index";
import { UserUseCase } from "../../application/userUseCases";
import { UserController } from "../controller/user.ctrl";
import { MongoRepository } from "../repository/mongo.repository";


/**
 * Iniciar Repository
 */
const userRepo = new MongoRepository()

/**
 * Iniciamos casos de uso
 */

const userUseCase = new UserUseCase(userRepo)

/**
 * Iniciar User Controller
 */

const userCtrl = new UserController(userUseCase)

/**
 * 
 */

route.post(`/user`, userCtrl.insertCtrl)
route.get(`/user`, authorize, userCtrl.getCtrl)
route.post("/login", userCtrl.loginCtrl);

export default route