class Person {
    constructor(name = 'Tom', age = 20, energy =100)
    {this.name = name;
    this.age = age;
} sleep(){this.energy += 10;}
doSomethingFun(){this.energy-=10;}
} const person = new Person()
console.log (person);
// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energyxp=0, hourlyWage = 10){
        super (name, age, energy);
        super (name,age,energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    sleep(){super.sleep()}
    doSomethingFun(){super.doSomethingFun}
    goToWork(){
        this.xp +=10;
    }
}
console.log(Worker);