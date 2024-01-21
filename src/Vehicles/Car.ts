import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {

    constructor() {
        super(Math.random() * 100, Math.random() * 100);
    }

    getTicketPrice() { return 50; }

    refuelGas(): void {
        if (this.gasLevel < 10) {
            console.log("Refueling car gas...");
            this.gasLevel = 100;
        }
    }
    
    chargeBattery(): void {
        if (this.batteryLevel < 10) {
            console.log("Recharging car battery...");
            this.batteryLevel = 100;
        }
    }
}