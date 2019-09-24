function DataType(typeValue, unitValue) {
    this.typeValue = typeValue
    this.unitValue = unitValue
}

DataType.prototype.type = function type() { return this.typeValue }
DataType.prototype.unit = function unit() { return this.unitValue }

var dataType = new DataType("Type", "Unit")
console.log(dataType.unit())
console.log(dataType.type())

module.exports = { DataType }