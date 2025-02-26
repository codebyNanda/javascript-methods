import { InputMusicBase } from "../dto/inputMusicBase"

export abstract class MusicBase {
  protected readonly name: string
  protected readonly genre: string
  protected readonly country: string

  constructor(inputBase: InputMusicBase) {
    this.name = inputBase.name
    this.genre = inputBase.genre
    this.country = inputBase.country
  } 
}