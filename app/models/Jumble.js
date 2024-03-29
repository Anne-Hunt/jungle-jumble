import { generateId } from "../utils/GenerateId.js"

export class Jumble {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.body = data.body
        // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
        this.fastestTime = null
        this.startTime = null
        this.endTime = null
    }


    get GetJumbleContent() {
        return `
        <div class="container-fluid">
        <div class="row bg-white border borderprimary border-3 rounded mb-5">
            <div class="col">
                <h3>${this.name}</h3>
            </div>
            <div class="col">
                <h3>${this.fastestTime}</h3>
            </div>
            <div class="col-12">
                <p>${this.body}</p>
            </div>
        </div>

            <div class="row bg-white border borderprimary border-3 rounded">
                <form onsubmit="app.JumblesController.submitJumble('${this.id}')">
                <label name="entry" for="entry" class="form-label">Type below</label>
                <textarea name="entry" id="user-entry" rows="7" columns="30" class="form-control mb-3 bg-light" placeholder="type your jumble here"></textarea>
                <button class="btn tertiary text-light mb-3" type="submit">Submit</button>
                </form>
            </div>
            </div>
        `
    }

    get GetJumbleList() {
        return `
            <div class="row p-2">
                <div class="col d-flex justify-content-between">
                    <button class="btn secondary text-light" type="button "onclick="app.JumblesController.setActiveJumble('${this.id}')">Start</button>
                    <span>${this.name}</span>
                    <span>${this.fastestTime}</span>
                    <span>${this.GetWpm}</span>
                </div>
            </div>
        
        `
    }

    get GetWpm() {
        let wordCount = this.body.split(" ")
        console.log(wordCount.length)
        return wordCount.length
    }

    get GetFastestTime() {
        let fastestTime = this.endTime - this.startTime
        return fastestTime
    }
}

