import { InputMusicBase, InputMusicianBase } from "../dto/inputMusicBase"
import { MusicBase } from "./musicBase"

export abstract class MusicianBase extends MusicBase {
  // private _dateOfBirth: number
  private _albumsInPartnership: string[]
  private _occupation: string[]
  // private _knownFor?: string | undefined
  private _death?: boolean | undefined
  
  constructor(
    inputBase: InputMusicBase,
    inputMusicianBase: InputMusicianBase
    ) {
      super(inputBase)
      // this._dateOfBirth = inputMusicianBase.dateOfBirth
      this._albumsInPartnership = inputMusicianBase.albumsInPartnership
      this._occupation = inputMusicianBase.occupation
      // this._knownFor = inputMusicianBase.knownFor
      this._death = inputMusicianBase.death
  } 

  // protected get dateOfBirth(): number {
  //   return this._dateOfBirth
  // }
  // protected set dateOfBirth(value: number) {
  //   this._dateOfBirth = value
  // }

  protected get albumsInPartnership(): string[] {
    return this._albumsInPartnership
  }
  protected set albumsInPartnership(value: string[]) {
    this._albumsInPartnership = value
  }

  protected get occupation(): string[] {
    return this._occupation
  }
  protected set occupation(value: string[]) {
    this._occupation = value
  }

  // protected get knownFor(): string | undefined {
  //   return this._knownFor
  // }
  // protected set knownFor(value: string | undefined) {
  //   this._knownFor = value
  // }

  protected get death(): boolean | undefined {
    return this._death
  }
  protected set death(value: boolean | undefined) {
    this._death = value
  }
}