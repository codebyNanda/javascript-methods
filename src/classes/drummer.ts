import { InputMusicBase } from "../dto/inputMusicBase"
import { MusicBase } from "./musicBase"

export class Drummer extends MusicBase {
  bandsHasPlayedIn: string[]
  albumsInPartnership: string[]
  occupation: string[]
  death?: boolean 

  constructor(
    inputBase: InputMusicBase,
    knownFor: string[],
    dateofBirth: number,
    bandsHasPlayedIn: string[],
    albumsInPartnership: string[],
    occupation: string[],
    death?: boolean
  ) {
    super(inputBase)

    this.bandsHasPlayedIn = bandsHasPlayedIn
    this.albumsInPartnership = albumsInPartnership
    this.occupation = occupation
    this.death = death
  }

  compositions(): void {
    console.log('Composições :: ')
  }
}