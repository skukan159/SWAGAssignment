function DataType(typeValue, unitValue) {
    this.typeValue = typeValue
    this.unitValue = unitValue
}

DataType.prototype.type = function type() { return this.typeValue }
DataType.prototype.unit = function unit() { return this.unitValue }


module.exports = { DataType }