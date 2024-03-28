import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { jumblesService } from "../services/JumbleService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

export class JumblesController {

    constructor() {
        console.log(`Jumbles Constructor loaded`)
        this.drawJumbleList()
        this.drawJumbleContent()
    }

    drawJumbleContent() {
        const jumbleContent = AppState.jumbles
        let jumbleContentContent = ''
        jumbleContent.forEach(jumble => jumbleContentContent = jumble.GetJumbleContent)

    }

    drawJumbleList() {
        const jumbleList = AppState.jumbles
        let jumbleListContent = ''
        jumbleList.forEach(jumble => jumbleListContent += jumble.GetJumbleList)
        setHTML('jumble-list', jumbleListContent)
    }

    drawActiveJumble() {
        const activeJumble = AppState.activeJumble.GetJumbleContent

        if (activeJumble == null) {
            setHTML('jumble-content', '')
        } else {
            setHTML('jumble-content', activeJumble)
        }
    }

    setActiveJumble(id) {

        console.log('setting the jumble with', id, 'id')
        jumblesService.setActiveJumble(id)
        this.drawActiveJumble()
    }

    createJumble() {
        event.preventDefault()
        console.log('you submitted, yaay!')
        const form = event.target
        const jumbleFormData = getFormData(form)
        console.log(jumbleFormData)
        jumblesService.createJumble(jumbleFormData)
        form.reset()
        this.drawJumbleList()
    }

    submitJumble(id) {
        event.preventDefault()
        const form = event.target
        const entryData = getFormData(form)
        console.log('typed', entryData, id)
        jumblesService.submitJumble(entryData, id)

    }

}