import "dotenv/config";
import songRoute from "./infraestructure/routes/song.route";
import dbInit from "./infraestructure/db/mongo";
import { cors, express } from "../helpers/express.helper";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(songRoute);
dbInit().then();
app.listen(port, () => console.log(`USER, Listo por el puerto ${port}`));
