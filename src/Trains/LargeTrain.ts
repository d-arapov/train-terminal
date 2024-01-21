import log from "../logger.js";
import Vehicle from "../Vehicles/Vehicle.js";
import Train from "./Train.js";

export default class LargeTrain extends Train {

    addVehicle(vehicle: Vehicle): boolean {
        if (this.vehicles.length < 6) {
            this.vehicles.push(vehicle);
            return true;
        }
        log("Large train is full.");
        return false;
    }

    toString(): string {
        return `
   O O o o o...  ______________  ______________ 
   O     ____   |              ||              |   
  ][_n_i_| (    |              ||              |   
 (__________|_[_|______________||______________|
   0--0--0        0   0  0   0    0   0  0   0  
   `
    }

}