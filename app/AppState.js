import { Jumble } from './models/Jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  jumbles = [

    new Jumble({

      name: `Easy jumble`,
      body: `type these things really fast`
    }),

  ]

  /**@type {Jumble} */
  activeJumble = null













  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())