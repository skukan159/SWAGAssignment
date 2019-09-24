const Event = (superclass) => class extends superclass {
    constructor(time,place){
        this.time = time;
        this.place = place;
    }

    time() { this.time }
    place() { this.place }
}

module.exports = { Event }