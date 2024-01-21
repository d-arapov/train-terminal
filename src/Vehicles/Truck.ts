import Vehicle from "./Vehicle.js";

export default class Truck extends Vehicle {

    constructor() {
        super(Math.random() * 100, Math.random() * 100);
    }

    getTicketPrice() { return 90; }

    refuelGas(): void {
        if (this.gasLevel < 10) {
            console.log("Refueling truck gas...");
            this.gasLevel = 100;
        }
    }
    
    chargeBattery(): void {
        if (this.batteryLevel < 10) {
            console.log("Recharging truck battery...");
            this.batteryLevel = 100;
        }
    }
}