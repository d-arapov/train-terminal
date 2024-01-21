import Vehicle from "./Vehicle.js";
import Refuelable from "../Refuelable/Refuelable.js";
import log from "../logger.js";

export default class Van extends Vehicle implements Refuelable {

    constructor() {
        super(Math.random() * 100, Math.random() * 100);
    }

    getTicketPrice() { return 80; }

    refuelGas(): void {
        if (this.gasLevel < 10) {
            log("Refueling van gas...");
            this.gasLevel = 100;
        }
    }
    
    chargeBattery(): void {
        if (this.batteryLevel < 10) {
            log("Recharging van battery...");
            this.batteryLevel = 100;
        }
    }
}
