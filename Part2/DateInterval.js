function DateInterval(fromValue, toValue) {
    this.fromValue = fromValue
    this.toValue = toValue
}

DateInterval.prototype.contains = function contains (date) { return date >= this.fromValue && date <= this.toValue }
DateInterval.prototype.from = function from() { return this.fromValue }
DateInterval.prototype.to = function to() { return this.toValue }

var dateInterval = new DateInterval(new Date(), new Date())
console.log(dateInterval.from())
console.log(dateInterval.to())
console.log(dateInterval.contains(new Date()))

module.exports = { DateInterval }
