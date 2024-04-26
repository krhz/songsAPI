import { route } from "../../../helpers/express.helper";
import { authorize, logMiddleware, } from "../../../middlewares/index.middlewares";
import { SongUseCase } from "../../application/songUseCases";
import { SongController } from "../controller/song.ctrl";
import SongModel from "../model/song.shchema";
import { MongoRepository } from "../repository/mongo.repository";
import Product from '../model/prueba'
import songShchema from "../model/song.shchema";
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

route.get("/list", async (req, res) => {

  const options = req.query;
  // find products and paginate
  // const products = await Product.paginate({}, options);
  const products = await Product.find();

  // respond to the user
  res.json(products);
});

export default route;
