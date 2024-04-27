import { Model } from "mongoose";

export interface SongEntity {
  uuid: string;
  title: string;
  author: string;
  description: string;
  owner: string;
  public: boolean;
}


export interface PaginatioMongodb{
  limit: number;
  page?: number;
}


export interface PaginationResult<T> {
  docs: T[];
  total: number;
  limit: number;
  page?: number;
  pages?: number;
  offset?: number;
}


export interface ISongModel extends Model<SongEntity> {
  paginate(query?: any, options?: any): Promise<PaginationResult<SongEntity>>;
}
