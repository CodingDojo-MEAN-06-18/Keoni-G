class Ninja {
    constructor(name) {
        this.name = name ? name : "Unknown Ninja";
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("My ninja name is " + this.name + "!");
        return this;
    }

    showStats() {
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("A program has a bug. A programmer fixes a bug. Now there are two bugs.");
        return this;
    }
}

var ninja = new Ninja("Leonardo");
ninja.sayName().showStats().drinkSake().showStats();
var sensei = new Sensei("Master Splinter");
sensei.sayName().showStats().speakWisdom().showStats();