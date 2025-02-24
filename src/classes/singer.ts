import { InputMusicBase } from "../dto/inputMusicBase"
import { MusicBase } from "./musicBase"

export class Singer extends MusicBase {
  bandsHasSungIn: string[]
  albumsInPartnership: string[]
  occupation: string[]
  death?: boolean 

  constructor(
    inputBase: InputMusicBase,
    bandsHasSungIn: string[],
    albumsInPartnership: string[],
    occupation: string[],
    death?: boolean
  ) {
    super(inputBase)

    this.bandsHasSungIn = bandsHasSungIn
    this.albumsInPartnership = albumsInPartnership
    this.occupation = occupation
    this.death = death
  }

  compositions(): void {
    console.log('Composições :: ')
  }
}