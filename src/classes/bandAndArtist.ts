import { InputMusicBase } from "../dto/inputMusicBase"
import { MusicBase } from "./musicBase"

export class BandAndArtist extends MusicBase {
  private _numberOfAlbuns: number
  private _website: string
  private _status: boolean
  private _recordLabels: string[]
  private _yearOfFundation?: number | undefined

  constructor(
    inputBase: InputMusicBase,
    numberOfAlbuns: number,
    website: string,
    status: boolean,
    recordLabels: string[],
    yearOfFundation?: number
  ) {
    super(inputBase)
    
    this._numberOfAlbuns = numberOfAlbuns
    this._website = website
    this._status = status
    this._recordLabels = recordLabels
    this._yearOfFundation = yearOfFundation
  }

  public get numberOfAlbuns(): number {
    return this._numberOfAlbuns
  }
  public set numberOfAlbuns(value: number) {
    this._numberOfAlbuns = value
  }

  public get website(): string {
    return this._website
  }
  public set website(value: string) {
    this._website = value
  }

  public get status(): boolean {
    return this._status
  }
  public set status(value: boolean) {
    this._status = value
  }

  public get recordLabels(): string[] {
    return this._recordLabels
  }
  public set recordLabels(value: string[]) {
    this._recordLabels = value
  }

  public get yearOfFundation(): number | undefined {
    return this._yearOfFundation
  }
  public set yearOfFundation(value: number | undefined) {
    this._yearOfFundation = value
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
