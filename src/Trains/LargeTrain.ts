import Vehicle from "../Vehicles/Vehicle.js";
import Train from "./Train.js";

export default class LargeTrain extends Train {
    
    addVehicle(vehicle: Vehicle): boolean {
        if (this.vehicles.length < 6) {
            this.vehicles.push(vehicle);
            return true;
        }
        console.log("Large train is full.");
        return false;
    }
}