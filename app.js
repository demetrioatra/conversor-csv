const fs = require("fs")
const Reader = require("./Reader")

var reader = new Reader()

reader.read("cargos.csv")