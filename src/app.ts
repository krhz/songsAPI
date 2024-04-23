import "dotenv/config";
import songRoute from "../src/songs/infraestructure/routes/song.route";
import userRoute from "../src/user/infrastructure/route/user.route";
import dbInit from "../src/songs/infraestructure/db/mongo";
import { cors, express } from "./helpers/express.helper";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(songRoute);
app.use(userRoute);
dbInit().then();
app.listen(port, () => console.log(`USER, Listo por el puerto ${port}`));