const expect = require('chai').expect
const Map = require("../map")

describe("Para criar um mapa é necessário:", () => {
    it("Um método para desenhar", () => {
        const map = new Map()
        expect("teste").to.be.equals(map.draw())
    })
})