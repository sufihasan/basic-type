
// in operator type gard

type Car = {
    drive: () => void;
}

type Boat = {
    sail: () => void;
}

function move(vehicle: Car | Boat): void {
    if ('drive' in vehicle) {
        vehicle.drive();
    }
    else {
        vehicle.sail();
    }
}

const car: Car = {
    drive: () => {
        console.log('car is driving');
    }
}

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

function animalSound(animal: Dog | Cat) {
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