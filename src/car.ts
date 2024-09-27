class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: string) {
        this.brand = brand
        this.speed = Number(speed) //or just change of the type in the constructor to speed: number
    }

    accelerate(): number {
        this.speed = this.speed +  20
        return this.speed
    }
}

const car = new Car('Toyota', '100')
console.log(car.accelerate()) // After fixing: will print 120
