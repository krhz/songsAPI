import { route } from "../../../helpers/express.helper";
import {
  authorize,
  logMiddleware,
} from "../../../middlewares/index.middlewares";
import { UserUseCase } from "../../application/userUseCases";
import { UserController } from "../controller/user.ctrl";
import { MongoRepository } from "../repository/mongo.repository";

/**
 * Iniciar Repository
 */
const userRepo = new MongoRepository();

/**
 * Iniciamos casos de uso
 */

const userUseCase = new UserUseCase(userRepo);

/**
 * Iniciar User Controller
 */

const userCtrl = new UserController(userUseCase);

/**
 *
 */

route.post(`/user`, logMiddleware, userCtrl.insertCtrl);
route.get(`/user`, [logMiddleware, authorize], userCtrl.getCtrl);
route.post("/login", logMiddleware, userCtrl.loginCtrl);

export default route;
