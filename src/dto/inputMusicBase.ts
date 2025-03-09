export interface InputMusicBase {
  name: string
  genre: string
  country: string
  knownFor?: string
  // dateOfBirth?: string
}

export interface InputMusicianBase {
  // dateOfBirth: string
  albumsInPartnership: string[]
  occupation: string[]
  // knownFor?: string
  death?: boolean
}