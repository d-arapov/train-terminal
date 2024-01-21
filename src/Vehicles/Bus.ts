import Vehicle from "./Vehicle.js";

export default class Bus extends Vehicle {

    constructor() {
        super(Math.random() * 100, Math.random() * 100);
    }

    getTicketPrice() { return 70; }

    refuelOrRecharge() {
        if (this.batteryLevel < 10) {
            console.log("Recharging bus...");
            this.batteryLevel = 100;
        }
    }
}