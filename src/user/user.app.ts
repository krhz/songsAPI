import "dotenv/config";
import userRoute from "./infrastructure/route/user.route";
import { cors, express } from "../helpers/express.helper";

const app = express();
app.use(cors());
app.use(express.json());


export const userApp = app.use(userRoute);
