import "dotenv/config";
import dbInit from "../src/songs/infraestructure/db/mongo";
import { cors, express } from "./helpers/express.helper";
import { userApp } from "./user/user.app";
import { songApp } from "./songs/song.app";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(userApp, songApp);
dbInit().then();
app.listen(port, () => console.log(`USER, Listo por el puerto ${port}`));
