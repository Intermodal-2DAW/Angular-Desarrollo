import { IPosts } from "../interfaces/i-posts";
import { IUsers } from "./i-users";

export interface PostResponse {
  post: IPosts;
}

export interface tokenResponse {
  token: string;
}

export interface AuthResponse {
  id: string,
  token: string,
  rol: string
}
