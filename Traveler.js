class Traveler {
    constructor (name, food = 1, isHealthy = true) {
        this.name = name
        this.food = food
        this.isHealthy = isHealthy
    }

    hunt() {

        return this.food += 2
    }

    eat() {
        if(this.food > 0) {
            return this.food -= 1

        } else if(this.food == 0) {
            return this.isHealthy = false
        }
    }
}
