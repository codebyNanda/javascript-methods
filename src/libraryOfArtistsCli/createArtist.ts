import { input } from '@inquirer/prompts'
import { Artist } from "../classes/artist"

export async function createArtist() {
  const artists = [] // Armazena os artistas criados

  const inputName = await input({ message: 'Informe o nome do artista ou banda que deseja cadastrar: '})
  
  const inputCountry = await input({ message: 'País: '})

  const inputGenre = await input({ message: 'Qual o estilo de música? '})
  
  const inputRecordLabels = await input({ message: 'Digite a gravadora responsável: '})
    

  const creatingArtistData = new Artist({
    name: inputName,
    genre: inputGenre,
    country: inputCountry,
  },
    inputRecordLabels
  )

  artists.push(creatingArtistData)
  console.log(artists)
}