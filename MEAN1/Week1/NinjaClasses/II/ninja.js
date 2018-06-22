function Ninja(name = "Anonymous") {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function() {
        console.log("My ninja name is " + this.name + "!");
        return this;
    }

    this.showStats = function() {
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + speed);
        console.log("Strength: " + strength);
        return this;
    }

    this.drinkSake = function() {
        this.health += 10;
        return this;
    }

    this.punch = function(ninja) {
        if (!ninja instanceof Ninja) {
            console.log("Ninja may only punch another ninja!");
            return null;
        }

        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 health!");
        return this;
    }

    this.kick = function(ninja) {
        if (!ninja instanceof Ninja) {
            console.log("Ninja may only kick another ninja!");
            return null;
        }
        damage = strength * 15;
        console.log(damage);
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " health!");
        return this;
    }
}

var ninja = new Ninja("Hayabusa");
var enemy = new Ninja("Shadow");
ninja.drinkSake().showStats().sayName().punch(enemy).kick(enemy);