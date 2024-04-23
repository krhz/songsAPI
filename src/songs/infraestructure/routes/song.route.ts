
import { route } from "../../../helpers/express.helper";
import { authorize } from "../../../middleware/index";
import { SongUseCase } from "../../application/songUseCases";
import { SongController } from "../controller/song.ctrl";
import { MongoRepository } from "../repository/mongo.repository";


/**
 * Iniciar Repository
 */
const songRepo = new MongoRepository()

/**
 * Iniciamos casos de uso
 */

const userUseCase = new SongUseCase(songRepo)

/**
 * Iniciar User Controller
 */

const songCtrl = new SongController(userUseCase)

/**
 * TODO: ENDPOINTS 
 */

route.post(`/createSong`, songCtrl.insertCtrl)
route.get(`/getSongs`, authorize, songCtrl.getCtrl)

export default route