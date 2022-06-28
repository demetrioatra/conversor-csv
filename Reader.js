const fs = require("fs")
const util = require("util")

class Reader{
    constructor() {
        this.readFile = util.promisify(fs.readFile)
    }

    async read(path) {
        try { return await this.readFile(path, "utf8") }
        catch (error) { return undefined }
    }
}

module.exports = Reader