const { Car, Bike, TukTuk } = require('./vehicles')

class Weather {
    constructor(name, craters) {
        this.craters = craters
        this.name = name

        if (name === "SUNNY") {
            this.craters -= craters * 0.1
            this.vehicles = [new Car(), new Bike(), new TukTuk()]
        } else if (name === "RAINY") {
            this.craters += craters * 0.2
            this.vehicles = [new Car(), new TukTuk()]
        } else if (name === "WINDY") {
            this.vehicles = [new Car(), new Bike()]
        }
    }
}

module.exports = Weather