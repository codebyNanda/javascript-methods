export interface InputMusicBase {
  name: string
  genre: string
  country: string
  knownFor?: string
  dateOfBirth?: number
}

export interface InputMusicianBase {
  dateOfBirth: number
  albumsInPartnership: string[]
  occupation: string[]
  knownFor?: string
  death?: boolean
}