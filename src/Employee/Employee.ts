import log from '../logger.js';
import Train from '../Trains/Train.js';
import Vehicle from '../Vehicles/Vehicle.js';

export default class Employee {

    private name: string;
    private salaryPercentage: number;

    constructor(name: string, salaryPercentage: number) {
        this.name = name;
        this.salaryPercentage = salaryPercentage;
    }

    parkVehicle(vehicle: Vehicle, train: Train): boolean {
        let success = train.addVehicle(vehicle);
        if (success) {
            log(`Vehicle parked in ${train.constructor.name}.`);
            log(`Current vehicle gas level: ${vehicle.gasLevel}%`);
            log(`Current vehicle battery level: ${vehicle.batteryLevel}%`);
        } else {
            log("Failed to park vehicle: Train is full.");
        }
        return success;
    }

    calculateSalary(train: Train): number {
        return train.calculateRevenue() * this.salaryPercentage / 100;
    }

    getSalaryPercentage(): number {
        return this.salaryPercentage;
    }

    toString(): string {
        return `
         o
        /|\\ ${this.name}, Salary Percentage: ${this.salaryPercentage}%
        / \\
        `
    }
}