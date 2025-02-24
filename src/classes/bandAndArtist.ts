import { InputMusicBase } from "../dto/inputMusicBase"
import { MusicBase } from "./musicBase"

export class BandAndArtist extends MusicBase {
  numberOfAlbuns: number
  website: string
  status: boolean
  recordLabels: string[]
  yearOfFundation?: number

  constructor(
    inputBase: InputMusicBase,
    numberOfAlbuns: number,
    website: string,
    status: boolean,
    recordLabels: string[],
    yearOfFundation?: number
  ) {
    super(inputBase)

    // Inicialização dos atributos específicos de BandAndArtist
    this.numberOfAlbuns = numberOfAlbuns
    this.website = website
    this.status = status
    this.recordLabels = recordLabels
    this.yearOfFundation = yearOfFundation
  }

  addAlbum(album: IAlbum) {
    console.log("Adicionando álbum...", album)
  }

  addRecordLabel() {
    console.log('Adicionando gravadora :: ')
  }

  addWebsite() {
    console.log('Adicionando website :: ')
  }
}
