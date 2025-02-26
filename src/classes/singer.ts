import { InputMusicBase, InputMusicianBase } from "../dto/inputMusicBase"
import { MusicBase } from "./musicBase"
import { MusisianBase } from "./musicianBase"

export class Singer extends MusisianBase {
  private _bandsHasSungIn: string[]
 
  constructor(
    inputBase: InputMusicBase,
    inputMusicianBase: InputMusicianBase,
    bandsHasSungIn: string[],
  ) {
    super(inputBase, inputMusicianBase)

    this._bandsHasSungIn = bandsHasSungIn
  }

  public get bandsHasSungIn(): string[] {
    return this._bandsHasSungIn
  }
  public set bandsHasSungIn(value: string[]) {
    this._bandsHasSungIn = value
  }

  compositions(): void {
    console.log('Composições :: ')
  }
}