import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"

class JumblesService {


    setActiveJumble(id) {
        const activeJumble = AppState.jumbles.find(jumble => jumble.id == id)
        console.log('setting', id, 'to active', activeJumble)
        AppState.activeJumble = activeJumble
    }

    createJumble(formData) {
        const newJumble = new Jumble(formData)
        AppState.jumbles.push(newJumble)
        console.log('served a jumble')
    }

    submitJumble(entry, id) {
        const testJumble = AppState.jumbles.find(jumble => jumble.id == id)
        console.log(entry.entry, testJumble.body)
        if (testJumble.body == entry.entry) {
            console.log('matches')
        } else {
            console.log('you fail')
        }
    }
}


export const jumblesService = new JumblesService()