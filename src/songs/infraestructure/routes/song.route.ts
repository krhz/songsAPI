import { route } from "../../../helpers/express.helper";
import {
  authorize,
  logMiddleware,
} from "../../../middlewares/index.middlewares";
import { SongUseCase } from "../../application/songUseCases";
import { SongController } from "../controller/song.ctrl";
import { MongoRepository } from "../repository/mongo.repository";

/**
 * Iniciar Repository
 */
const songRepo = new MongoRepository();

/**
 * Iniciamos casos de uso
 */

const songUseCase = new SongUseCase(songRepo);

/**
 * Iniciar User Controller
 */

const songCtrl = new SongController(songUseCase);

route.post(`/createSong`, [logMiddleware, authorize], songCtrl.insertCtrl);
route.get(`/getSongs`, [logMiddleware, authorize], songCtrl.getCtrl);
route.get(`/getSongs/:uuid?`, [logMiddleware, authorize], songCtrl.getCtrlById);
route.get(`/getMySongs`, [logMiddleware, authorize], songCtrl.getCtrlByOwner);
route.put(`/updateSongs/:id`, [logMiddleware, authorize], songCtrl.updateCtrl);

export default route;
