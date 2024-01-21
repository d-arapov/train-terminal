import Vehicle from "./Vehicle.js";

export default class Van extends Vehicle {

    constructor() {
        super(Math.random() * 100, Math.random() * 100);
    }

    getTicketPrice() { return 80; }

    refuelOrRecharge() {
        if (this.gasLevel < 10) {
            console.log("Refueling van...");
            this.gasLevel = 100;
        }
    }
}
