// Task 1

class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }

    introduce() {
        return `${super.introduce()}  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "Dog", status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}

const cat = new Cat("Meow", 4, "preaty");
console.log(cat.introduce() === "Hello, my name is Meow and I am 4 years old.  Meow meow!");

//---------------------------------------------------------------------------------------------------

// Task 2

class SortedList {
    constructor(list) {
        this.list = list.sort(function(a, b) {
            return a - b;
        });
        this.length = list.length;
    }

    add(number) {
        this.list.push(number);

        this.list.sort(function(a, b) {
            return a - b;
        });

        this.length = this.list.length;

        return this.list;
    }

    get(index) {
        const result = index > this.length || index < 1 ? "Wrong index!" 
                                                        : this.list[index -1];
        return result;
    }
}

const list = new SortedList([100,20,30]);
console.log(list.length, list.add(2), list.get(2), list.length, list.get(10));

//---------------------------------------------------------------------------------------------------

// Task 3

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.info = `${this.name}s age is ${this.age}`;
    }
    
    getInfo() {
      return `${this.name}s age is ${this.age}`;
    }
  }

//---------------------------------------------------------------------------------------------------

// Task 6

const user = {
    name: "John",
    surname: "Dow",
    age: 30,
    status: "Married",
    isWorking: true
}

function showProps(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}

showProps(user);

// Task 7

class Worker {
    #experience = 1.2;

    constructor(fullname, dayRate, workingDays) {
        this.fullname = fullname;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience() {
        return this.dayRate * this.workingDays * this.#experience;
    }

    getExperience() {
        return this.#experience;
    }

    setExperience(value) {
        this.#experience = value;
    }
}

function sortingWorkers(workers) {
    workers.forEach(element => {
        console.log(element.fullname);
        console.log(`${element.fullname} salary: ${element.showSalary()}`);
        console.log(`New experience: ${element.getExperience()}`);
        console.log(`${element.fullname} salary: ${element.showSalaryWithExperience()}`);
        element.setExperience(1.5);
        console.log(`New experience: ${element.getExperience()}`);
        console.log(`${element.fullname} salary: ${element.showSalaryWithExperience()}`);
        console.log("");
    });

    workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

    console.log("Sorted salary:");
    workers.forEach(element => {
        console.log(`${element.fullname}: ${element.showSalaryWithExperience()}`);
    });


}

const worker1 = new Worker("John Dow", 8, 20);
const worker2 = new Worker("Bob Marley", 9, 18);
const worker3 = new Worker("Johnny Cash", 7, 20);
const workers = [worker1, worker2, worker3];

sortingWorkers(workers);


