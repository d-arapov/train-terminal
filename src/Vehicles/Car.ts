import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {

    constructor() {
        super(Math.random() * 100, Math.random() * 100);
    }

    getTicketPrice() { return 50; }

    refuelOrRecharge() {
        if (this.gasLevel < 10) {
            console.log("Refueling car...");
            this.gasLevel = 100;
        }
    }
}