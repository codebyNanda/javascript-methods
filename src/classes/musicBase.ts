import { InputMusicBase } from "../dto/inputMusicBase"

export abstract class MusicBase {
  protected readonly name: string
  protected readonly genre: string
  protected readonly country: string
  protected readonly knownFor?: string
  protected readonly dateOfBirth?: number

  constructor(inputBase: InputMusicBase) {
    this.name = inputBase.name
    this.genre = inputBase.genre
    this.country = inputBase.country
    this.knownFor = inputBase.knownFor
    this.dateOfBirth = inputBase.dateOfBirth
  } 
}