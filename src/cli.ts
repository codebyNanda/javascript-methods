// import * as inquirer from 'inquirer'
import inquirer from "inquirer"
import { Actions } from './enum/actions'
import { createArtist } from "./libraryOfArtistsCli/createArtist"
// import { select, Separator } from '@inquirer/prompts'

async function firstCli(): Promise<void> {
  console.log('Bem-vindo ao meu primeiro CLI!')

  inquirer.prompt([
    {
      type: 'list',
      name: 'library',
      message: 'Escolha o que deseja realizar nesta biblioteca: ',
      choices: [Actions.CreateArtist, Actions.UpdateArtist],
    }
  ])
  .then(async (answers) => {
   switch(answers.library) {
    case Actions.CreateArtist:
      await createArtist()
      console.log('Testando criação de artistas')
      break
    case Actions.UpdateArtist:
      console.log('Atualizando artista...')
      break
    default:
      console.log('Opção errada! Por favor tente novamente.')
   }
  })
  .catch((err) => console.log(err))  
}
firstCli()


async function updateArtist() {
  console.log('Informações atuais do artista: ')
  // console.log(beArtist) // Mostra o input atual do objeto
}