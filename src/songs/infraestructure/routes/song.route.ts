import { route } from "../../../helpers/express.helper";
import { authorize, logMiddleware, } from "../../../middlewares/index.middlewares";
import { SongUseCase } from "../../application/songUseCases";
import { SongController } from "../controller/song.ctrl";
import SongModel from "../model/song.shchema";
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

route.post(`/createSong`, [authorize], songCtrl.insertCtrl);
route.get(`/getSongs`, [authorize], songCtrl.getCtrl);
route.get(`/getSongs/:uuid?`, [authorize], songCtrl.getCtrlById);
route.get(`/getMySongs`, [authorize], songCtrl.getCtrlByOwner);
route.put(`/updateSongs/:id`, [authorize], songCtrl.updateCtrl);
export default route;
