import Vehicle from "./Vehicle.js";

export default class Truck extends Vehicle {

    constructor() {
        super(Math.random() * 100, Math.random() * 100);
    }

    getTicketPrice() { return 90; }

    refuelOrRecharge() {
        if (this.batteryLevel < 10) {
            console.log("Recharging truck...");
            this.batteryLevel = 100;
        }
    }
}