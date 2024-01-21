import Vehicle from "./Vehicle.js";
import Refuelable from "../Refuelable/Refuelable.js";
import Chargeable from "../Chargable/Chargeable.js";

import log from '../logger.js';

export default class Car extends Vehicle implements Refuelable, Chargeable {

    constructor() {
        super(Math.random() * 100, Math.random() * 100);
    }

    getTicketPrice() { return 50; }

    refuelGas(): void {
        if (this.gasLevel < 10) {
            log("Refueling car gas...");
            this.gasLevel = 100;
        }
    }

    chargeBattery(): void {
        if (this.batteryLevel < 10) {
            log("Recharging car battery...");
            this.batteryLevel = 100;
        }
    }

    toString(): string {
        return `
        _______
       //  ||\ \
 _____//___||_\ \___
 )  _          _    \
 |_/ \________/ \___|
   \_/        \_/
        `
    }
}