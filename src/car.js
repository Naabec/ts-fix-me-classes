var Car = /** @class */ (function () {
    function Car(brand, speed) {
        this.brand = Brand;
        this.speed = Speed;
    }
    Car.prototype.accelerate = function () {
        this.speed = 20;
        return speed;
    };
    return Car;
}());
var car = new Car('Toyota', 100);
console.log(car.accelerate()); // After fixing: will print 120
