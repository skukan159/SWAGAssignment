export const DataType = (superclass) => class extends superclass {
    constructor(type,unit){
        this.type = type;
        this.unit = unit;
    }

    type() { this.type }
    unit() { this.unit }
}