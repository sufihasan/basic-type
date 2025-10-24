"use strict";
// in operator type gard
Object.defineProperty(exports, "__esModule", { value: true });
function move(vehicle) {
    if ('drive' in vehicle) {
        vehicle.drive();
    }
    else {
        vehicle.sail();
    }
}
const car = {
    drive: () => {
        console.log('car is driving');
    }
};
move(car);
// instance of type gard
// bark () is a method inside class Dog
class Dog {
    bark() {
        console.log('dhew dhew');
    }
}
// meow is a method of class Cat
class Cat {
    meow() {
        console.log('meow meow');
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const dog = new Dog;
const cat = new Cat;
animalSound(dog);
animalSound(cat);
