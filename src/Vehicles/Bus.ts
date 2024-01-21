import Vehicle from "./Vehicle.js";

export default class Bus extends Vehicle {

    constructor() {
        super(Math.random() * 100, Math.random() * 100);
    }

    getTicketPrice() { return 70; }

    refuelGas(): void {
        if (this.gasLevel < 10) {
            console.log("Refueling bus gas...");
            this.gasLevel = 100;
        }
    }
    
    chargeBattery(): void {
        if (this.batteryLevel < 10) {
            console.log("Recharging bus battery...");
            this.batteryLevel = 100;
        }
    }
}