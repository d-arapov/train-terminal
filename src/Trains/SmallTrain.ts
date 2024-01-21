import { log } from "console";
import Vehicle from "../Vehicles/Vehicle.js";
import Train from "./Train.js";

export default class SmallTrain extends Train {

    addVehicle(vehicle: Vehicle): boolean {
        if (this.vehicles.length < 8) {
            this.vehicles.push(vehicle);
            return true;
        }
        log("Small train is full.");
        return false;
    }

    toString(): string {
        return `
   O O o o o...  _______  _______ 
   O     ____   |       ||       |   
  ][_n_i_|  (   |       ||       |   
 (__________|_[_|_______||_______|
   0--0--0        0   0    0   0  
   `
    }
}