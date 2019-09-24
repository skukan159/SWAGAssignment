export default class DateInterval {
    constructor(from,to){
        this.from = from
        this.to = to
    }

    from() { return this.from }
    to() { return this.to }
    contains(date) { return this.from <= date && state.to >= date }
}