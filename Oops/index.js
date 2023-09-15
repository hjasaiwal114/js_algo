class Alien {
    constructor (name, person) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("dsjfhrri23")
    sayphrase = () => console.log(this.phrase)
}

class Robot {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
    sayPhrase = () => console.log(this.phrase)
}