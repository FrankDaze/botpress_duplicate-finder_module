import * as sdk from 'botpress/sdk'

import api from './api'
import en from '../translations/en.json'
import fr from '../translations/fr.json'

// This is called when server is started, usually to set up the database
const onServerStarted = async (bp: typeof sdk) => {}

// At this point, you would likely setup the API route of your module.
const onServerReady = async (bp: typeof sdk) => {
  await api(bp)
}

// Every time a bot is created (or enabled), this method will be called with the bot id
const onBotMount = async (bp: typeof sdk, botId: string) => {}

// This is called every time a bot is deleted (or disabled)
const onBotUnmount = async (bp: typeof sdk, botId: string) => {}

// When anything is changed using the flow editor, this is called with the new flow, so you can rename nodes if you reference them
const onFlowChanged = async (bp: typeof sdk, botId: string, flow: sdk.Flow) => {}

const onModuleUnmount = async (_bp: typeof sdk) => {}
/**
 * Skills allows you to create custom logic and use them easily on the flow editor
 * Check this link for more information: https://botpress.com/docs/developers/create-module/#skill-creation
 */
const skills: sdk.Skill[] = []

const entryPoint: sdk.ModuleEntryPoint = {
  onServerStarted,
  onServerReady,
  onModuleUnmount,
  onBotMount,
  translations: { en, fr },
  definition: {
    name: 'duplicate-finder',
    menuIcon: 'search-text',
    menuText: 'QnA Duplicate Finder',
    fullName: 'QnA Duplicate Finder',
    homepage: 'https://botpress.com'
  }
}

export default entryPoint
