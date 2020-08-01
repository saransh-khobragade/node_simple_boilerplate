class Car {
    constructor() {
        this.name = "CAR"
        this.speed = 20
        this.crater_cross_time = 3
    }
}
class Bike {
    constructor() {
        this.name = "BIKE"
        this.speed = 10
        this.crater_cross_time = 2
    }
}
class TukTuk {
    constructor() {
        this.name = "TUKTUK"
        this.speed = 12
        this.crater_cross_time = 1
    }
}

module.exports = { Car, Bike, TukTuk }