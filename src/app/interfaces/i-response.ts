import { IPosts } from "../interfaces/i-posts";
import { IUsers } from "./i-users";
import { IComments } from "./i-comments";

export interface PostResponse {
  post: IPosts;
}

export interface UserResponse {
  user: IUsers;
}

export interface tokenResponse {
  token: string;
}

export interface AuthResponse {
  id: string,
  token: string,
  rol: string
}

export interface CommentsResponse {
  comments: IComments;
}

export interface OkResponse {
  ok: boolean;
  ranking: IComments;
  error?:string; // Mensaje de error opcional si algo falla
}
