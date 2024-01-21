import Vehicle from "../Vehicles/Vehicle.js";
import Train from "./Train.js";

export default class SmallTrain extends Train {

    addVehicle(vehicle: Vehicle): boolean {
        if (this.vehicles.length < 8) {
            this.vehicles.push(vehicle);
            return true;
        }
        console.log("Small train is full.");
        return false;
    }
}