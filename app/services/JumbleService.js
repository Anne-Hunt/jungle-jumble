import { AppState } from "../AppState.js"

class JumblesService {


    setActiveJumble(id) {
        const activeJumble = AppState.jumbles.find(jumble => jumble.id == id)
        console.log('setting', id, 'to active', activeJumble)
        AppState.activeJumble = activeJumble
    }
}


export const jumblesService = new JumblesService()