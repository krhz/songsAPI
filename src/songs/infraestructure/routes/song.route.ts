import { route } from "../../../helpers/express.helper";
import { authorize, logMiddleware, } from "../../../middlewares/index.middlewares";
import { SongUseCase } from "../../application/songUseCases";
import { SongController } from "../controller/song.ctrl";
import SongModel from "../model/song.schema";
import { MongoRepository } from "../repository/mongo.repository";
import Product from '../model/prueba'
import songSchema from "../model/song.schema";
/**
 * Iniciar Repository
 */
const songRepo = new MongoRepository();
const songUseCase = new SongUseCase(songRepo);
const songCtrl = new SongController(songUseCase);

route.post(`/createSong`, [authorize], songCtrl.insertCtrl);
route.get(`/getSongs`, [authorize], songCtrl.getCtrl);
route.get(`/getSongs/:uuid?`, [authorize], songCtrl.getCtrlById);
route.get(`/getMySongs`, [authorize], songCtrl.getCtrlByOwner);
route.put(`/updateSongs/:id`, [authorize], songCtrl.updateCtrl);
export default route;
