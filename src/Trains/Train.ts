import Vehicle from '../Vehicles/Vehicle.js';

export default abstract class Train {

    private trainID: string;
    protected vehicles: Vehicle[] = [];

    constructor(trainUID: string) {
        this.trainID = trainUID;
    }

    getID(): string {
        return this.trainID;
    }

    abstract addVehicle(vehicle: Vehicle): boolean;

    calculateRevenue(): number {
        return this.vehicles.reduce((sum, vehicle) => sum + vehicle.getTicketPrice(), 0);
    }
}
