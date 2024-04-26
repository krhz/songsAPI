import { Request, Response } from "../../../helpers/express.helper";
import { SongUseCase } from "../../application/songUseCases";
import {
  validatePartialSong,
  validateSongSchema,
} from "../model/song.interface";

export class SongController {
  constructor(private songUseCase: SongUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this);
    this.getCtrl = this.getCtrl.bind(this);
    this.getCtrlById = this.getCtrlById.bind(this);
    this.getCtrlByOwner = this.getCtrlByOwner.bind(this);
    this.updateCtrl = this.updateCtrl.bind(this);
  }

  public async getCtrl(req: Request, res: Response) {
    const song = await this.songUseCase.getSongs();
    res.send(song);
  }

  public async getCtrlById(req: Request, res: Response) {
    const { uuid } = req.params;
    const uniqueSong = await this.songUseCase.getDetailedSong(uuid);
    return res.send(uniqueSong);
  }

  public async getCtrlByOwner(req: Request, res: Response) {
    const { id } = req.body;
    const uniqueSong = await this.songUseCase.getSongByOwner(id);
    return res.send(uniqueSong);
  }

  public async insertCtrl({ body }: Request, res: Response) {
    const taskResult = validateSongSchema(body);
    if (!taskResult.success) {
      return res
        .status(400)
        .json({ error: JSON.parse(taskResult.error.message) });
    }
    let createdSong = await this.songUseCase.createSong(body);
    res.send(createdSong);
  }

  public async updateCtrl({ body, params }: Request, res: Response) {
    const { id } = params;
    const taskResult = validatePartialSong(body);
    if (!taskResult.success) {
      return res
        .status(400)
        .json({ error: JSON.parse(taskResult.error.message) });
    }
    let createdSong = await this.songUseCase.updateSong(id, body);
    res.send(createdSong);
  }
}
