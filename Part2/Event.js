function Event(timeValue, placeValue) {
    this.timeValue = timeValue
    this.placeValue = placeValue
}

Event.prototype.time = function() { return this.timeValue }
Event.prototype.place = function() { return this.placeValue }




module.exports = { Event }
