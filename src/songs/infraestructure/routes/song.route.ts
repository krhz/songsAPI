import { route } from "../../../helpers/express.helper";
import {
  authorize,
  logMiddleware,
} from "../../../middlewares/index.middlewares";
import { SongUseCase } from "../../application/songUseCases";
import { SongController } from "../controller/song.ctrl";
import { MongoRepository } from "../repository/mongo.repository";

const songRepo = new MongoRepository();
const songUseCase = new SongUseCase(songRepo);
const songCtrl = new SongController(songUseCase);

route.post(`/createSong`, [logMiddleware, authorize], songCtrl.insertCtrl);
route.get(`/getSongs`, [logMiddleware, authorize], songCtrl.getCtrl);
route.get(`/getSongs/:uuid?`, [logMiddleware, authorize], songCtrl.getCtrlById);
route.get(`/getMySongs`, [logMiddleware, authorize], songCtrl.getCtrlByOwner);
route.put(`/updateSongs/:id`, [logMiddleware, authorize], songCtrl.updateCtrl);

export default route;
