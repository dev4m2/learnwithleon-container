//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, health, speed, specialMove) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.position = specialMove;

    this.throw = function () {
        console.log('YEEET');
    };
    this.taunt = function () {
        console.log(`You can't handle my ${this.specialMove}`);
    };
    this.fatality = function () {
        console.log('GET OVER HERE');
    };
}