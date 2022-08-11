class Hunter extends Traveler {
    constructor(name, food, isHealthy, capacity, passengers) {
        super(name, food, isHealthy)
        this.food = 2
    }

    hunt() {
        return this.food += 5
    }

    eat() {
        if(this.food > 1) {
            this.food -= 2
            this.isHealthy = true

        } else if(this.food <= 1){
            this.isHealthy = false
            return this.food = 0
        }
    }

    giveFood(traveler, numOfFoodUnits) {

        if(this.food > numOfFoodUnits) {

            this.food -= numOfFoodUnits
            
            return  traveler.food += numOfFoodUnits
        } 
    }

}

class Doctor extends Traveler {
    constructor(name, food, isHealthy) {
        super(name,food, isHealthy)

    } 

    heal(traveler) {
        
        let healing = wagon.passengers.forEach(() => {
            traveler.isHealthy = true
        })
        return healing
    }
}

// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
 
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
 
wagon.join(maude); // Não tem espaço para ela!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
 
sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();

console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
 
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan agora está doente (sick)

console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
 
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
 
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // Ela só tem um, então ela come e fica doente
 
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);