import { route } from "../../../helpers/express.helper";
import {
  authorize,
  logMiddleware,
} from "../../../middlewares/index.middlewares";
import { UserUseCase } from "../../application/userUseCases";
import { UserController } from "../controller/user.ctrl";
import { MongoRepository } from "../repository/mongo.repository";

const userRepo = new MongoRepository();
const userUseCase = new UserUseCase(userRepo);
const userCtrl = new UserController(userUseCase);
route.post(`/user`, logMiddleware, userCtrl.insertCtrl);
route.get(`/user`, [logMiddleware, authorize], userCtrl.getCtrl);
route.post("/login", logMiddleware, userCtrl.loginCtrl);

export default route;
