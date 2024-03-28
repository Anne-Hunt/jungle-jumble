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
        <div class="row border border-dark mb-5">
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
            <div class="row">
                <textarea name="" id="user-entry">
                        Jumble goes in here
                    </textarea>
                <button>submit</button>
                <!-- THIS BUTTON NEEDS ONCLICK-->
            </div>
        `
    }

    get GetJumbleList() {
        return `
        
        <div class="row">
                    <div class="col d-flex justify-content-between">
                        <button onclick="app.JumblesController.setActiveJumble('${this.id}')">set active</button>
                        <!-- THIS BUTTON NEEDS ONCLICK-->
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

