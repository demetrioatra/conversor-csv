const Reader = require("./Reader")

var reader = new Reader()

async function main() {
    var data = await reader.read("cargos.csv")
    console.log(data)
}

main()