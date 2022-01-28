import { Power } from "./power";

export interface Hero {
  id:string,
  name: string,
  power:Power,
  attack:number,
  life:number
}