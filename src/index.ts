import { Artist } from "./classes/artist"
import { Drummer } from "./classes/drummer"
import { Guitarist } from "./classes/guitarist"
import { Singer } from "./classes/singer"
import * as fs from 'fs'

const beArtist = new Artist(
  {
   name: 'Teste', 
   genre: 'Rock', 
   country: 'BR', 
   knownFor: 'Grandes sucessos' 
  },
  1,
  'grandesucessos.com',
  true,
  ['teste'],
)

const beSinger = new Singer(
  {
    name: 'Rob Halford',
    country: 'UK',
    genre: 'Heavy Metal',
    knownFor: 'Metal God'
  },
  {
    albumsInPartnership: ['The Wrong Side of Heaven and the Righteous Side of Hell, Volume 1'],
    occupation: ['Singer'],
  },
  ['Halford']
)

const beDrummer = new Drummer(
  {
    name: 'Nicko McBrain',
    country: 'UK',
    genre: 'Heavy Metal',
    knownFor: 'Nicko'
  },
  {
    albumsInPartnership: [''],
    occupation: ['Drummer']
  },
  ['Streetwalkers']
)

const beGuitarist = new Guitarist(
  {
    name: 'Dave Mustaine',
    country: 'United States',
    genre: 'Thrash Metal',
    knownFor: ''
  },
  {
    albumsInPartnership: [''],
    occupation: ['Guitarist', 'Singer', 'Producer']
  },
  ['Metallica']
)


// Salvando os dados em um arquivo JSON formatado
const artists = [beArtist, beSinger, beDrummer, beGuitarist]
const jsonData = JSON.stringify(artists, null, 2)
// const jsonArtist = JSON.stringify(beArtist, null, 2)
// const jsonSinger = JSON.stringify(beSinger, null, 2)
// console.log(jsonArtist)


// Escrevendo no arquivo JSON
fs.writeFile('jsonData.json', jsonData, 'utf-8', (err) => {
  if (err) {
    console.error("Erro ao salvar o arquivo:", err)
  } else {
    console.log("Dados salvos com sucesso!")
  }
})


// Lendo o arquivo JSON
fs.readFile('jsonData.json', 'utf-8', (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err)
    return
  }

// Convertendo JSON para objeto Javascript
  const jsonRaw = JSON.parse(data)
  console.log(jsonRaw)
})

