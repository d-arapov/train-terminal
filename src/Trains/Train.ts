import Vehicle from '../Vehicles/Vehicle.js';

export default abstract class Train {
    
    protected vehicles: Vehicle[] = [];

    abstract addVehicle(vehicle: Vehicle): boolean;

    calculateRevenue(): number {
        return this.vehicles.reduce((sum, vehicle) => sum + vehicle.getTicketPrice(), 0);
    }
}
