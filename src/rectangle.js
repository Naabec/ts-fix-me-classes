var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.Width = width;
        this.Height = height;
    }
    Rectangle.prototype.getArea = function () {
        return width * height;
    };
    return Rectangle;
}());
var rect = new Rectangle(5, 10);
console.log(rect.getArea()); // After fixing: will print 50
