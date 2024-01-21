import Vehicle from "./Vehicle.js";

export default class Van extends Vehicle {

    constructor() {
        super(Math.random() * 100, Math.random() * 100);
    }

    getTicketPrice() { return 80; }

    refuelGas(): void {
        if (this.gasLevel < 10) {
            console.log("Refueling van gas...");
            this.gasLevel = 100;
        }
    }
    
    chargeBattery(): void {
        if (this.batteryLevel < 10) {
            console.log("Recharging van battery...");
            this.batteryLevel = 100;
        }
    }
}
