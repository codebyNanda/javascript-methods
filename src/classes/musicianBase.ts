import { InputMusicBase, InputMusicianBase } from "../dto/inputMusicBase"
import { MusicBase } from "./musicBase"

export abstract class MusisianBase extends MusicBase {
  protected readonly dateOfBirth: number
  protected readonly albumsInPartnership: string[]
  protected readonly occupation: string[]
  protected readonly knownFor?: string
  protected readonly death?: boolean

  constructor(
    inputBase: InputMusicBase,
    inputMusicianBase: InputMusicianBase
    ) {
      super(inputBase)
      this.dateOfBirth = inputMusicianBase.dateOfBirth
      this.albumsInPartnership = inputMusicianBase.albumsInPartnership
      this.occupation = inputMusicianBase.occupation
      this.knownFor = inputMusicianBase.knownFor
      this.death = inputMusicianBase.death
  } 
}