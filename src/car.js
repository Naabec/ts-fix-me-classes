var Car = /** @class */ (function () {
    function Car(brand, speed) {
        this.brand = brand;
        this.speed = Number(speed); //or just change of the type in the constructor to speed: number
    }
    Car.prototype.accelerate = function () {
        this.speed = this.speed + 20;
        return this.speed;
    };
    return Car;
}());
var car = new Car('Toyota', '100');
console.log(car.accelerate()); // After fixing: will print 120
