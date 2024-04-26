import { encrypt } from "../../helpers/bcrypt.helper";
import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public registerUser = async ({ name, email, password, description }) => {
    const passHash = await encrypt(password);
    const userValue = new UserValue({
      name,
      email,
      password: passHash,
      description,
    });
    const userCreated = await this.userRepository.registerUser(userValue);
    return userCreated;
  };

  public getDetailUSer = async (uuid: string) => {
    const user = await this.userRepository.findUserById(uuid);
    return user;
  };

  public getValidateEmail = async (email: string) => {
    const emailValidate = await this.userRepository.findUserByEmail(email);
    return emailValidate;
  };
}
