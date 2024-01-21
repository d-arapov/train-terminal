import Vehicle from "./Vehicle.js";
import Refuelable from "../Refuelable/Refuelable.js";
import log from "../logger.js";

export default class Truck extends Vehicle implements Refuelable {

    constructor() {
        super(Math.random() * 100, Math.random() * 100);
    }

    getTicketPrice() { return 90; }

    refuelGas(): void {
        if (this.gasLevel < 10) {
            log("Refueling truck gas...");
            this.gasLevel = 100;
        }
    }
    
    chargeBattery(): void {
        if (this.batteryLevel < 10) {
            log("Recharging truck battery...");
            this.batteryLevel = 100;
        }
    }
}