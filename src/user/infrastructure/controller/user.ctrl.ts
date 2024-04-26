import { Request, Response } from "../../../helpers/express.helper";
import { verified } from "../../../helpers/bcrypt.helper";
import { generateToken } from "../../../helpers/jwt.helper";
import { UserUseCase } from "../../application/userUseCases";
import { validateUserSchema } from "../model/user.interface";
import { validateLoginSchema } from "../model/login.interface";

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this);
    this.getCtrl = this.getCtrl.bind(this);
    this.loginCtrl = this.loginCtrl.bind(this);
  }

  public async getCtrl({ query }: Request, res: Response) {
    const { uuid = "" } = query;
    const user = await this.userUseCase.getDetailUSer(`${uuid}`);
    res.send(user);
  }

  public async insertCtrl({ body }: Request, res: Response) {
    const { email } = body;
    const taskResult = validateUserSchema(body);
    if (!taskResult.success) {
      return res
        .status(400)
        .json({ error: JSON.parse(taskResult.error.message) });
    }
    const UserExists = await this.userUseCase.getValidateEmail(email);
    if (UserExists) return res.status(401).json({ data: "Email duplicado" });
    let user = await this.userUseCase.registerUser(body);
    res.send(user);
  }

  public async loginCtrl({ body }: Request, res: Response) {
    const { email, password } = body;
    const taskResult = validateLoginSchema(body);
    if (!taskResult.success) {
      return res
        .status(400)
        .json({ token: null, error: JSON.parse(taskResult.error.message) });
    }

    const UserExists = await this.userUseCase.getValidateEmail(email);
    if (!UserExists)
      return res.status(401).json({ message: "Usuario Inexistente." });
    const passwordHash = UserExists.password; //TODO el encriptado!
    const isCorrect = await verified(password, passwordHash);
    if (!isCorrect)
      return res.status(401).json({ token: null, error: "Datos Incorrectos." });
    const token = generateToken(UserExists.uuid);
    const data = {
      token,
      email: email,
    };
    res.send(data);
  }
}
