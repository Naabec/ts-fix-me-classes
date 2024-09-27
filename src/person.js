var Person = /** @class */ (function () {
    function Person(name, age) {
        this.Name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.Name;
    };
    Person.prototype.getAge = function () {
        return age;
    };
    return Person;
}());
var john = new Person('John', 30);
console.log(john.getName()); // After fixing: will print "John"
console.log(john.getAge()); // After fixing: will print 30
