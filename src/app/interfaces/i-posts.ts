export interface IPosts {
  [x: string]: any;
  id?: number;
  title: string;
  image: string;
  description: string;
  user_id: number;
  ok: number
}
