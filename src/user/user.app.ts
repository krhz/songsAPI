import "dotenv/config";
import userRoute from "./infrastructure/route/user.route";
import dbInit from "./infrastructure/db/mongo";
import { cors, express } from "../helpers/express.helper";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(userRoute);
dbInit().then();
app.listen(port, () => console.log(`USER, Listo por el puerto ${port}`));
