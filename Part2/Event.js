function Event(timeValue, placeValue) {
    this.timeValue = timeValue
    this.placeValue = placeValue
}

Event.prototype.time = function() { return this.timeValue }
Event.prototype.place = function() { return this.placeValue }

var event = new Event(new Date(), "aPlace")
console.log(event.place())
console.log(event.time())

module.exports = { Event }
