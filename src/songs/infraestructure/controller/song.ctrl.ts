import { Request, Response } from "../../../helpers/express.helper"
import { SongUseCase } from "../../application/songUseCases";
import { validateSongSchema } from "../model/song.interface";

export class SongController {
  constructor(private songUseCase: SongUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this)
    this.getCtrl = this.getCtrl.bind(this)
  }

  public async getCtrl({ query }: Request, res: Response) {
    const { uuid = '' } = query;
    const song = await this.songUseCase.getDetailSong(`${uuid}`);
    res.send(song);
  }

  public async insertCtrl({ body }: Request, res: Response) {   
    const taskResult = validateSongSchema(body)    
    if (!taskResult.success) {return res.status(400).json({ error: JSON.parse(taskResult.error.message) })}        
    let createdSong = await this.songUseCase.createSong(body);    
    res.send(createdSong);
  }
}
