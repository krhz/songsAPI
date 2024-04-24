import "dotenv/config";
import songRoute from "./infraestructure/routes/song.route";
import { cors, express } from "../helpers/express.helper";

const app = express();
app.use(cors());
app.use(express.json());

export const songApp = app.use(songRoute);
