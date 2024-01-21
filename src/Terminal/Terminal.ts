import chalk from 'chalk';
import Employee from '../Employee/Employee.js';
import Train from "../Trains/Train.js";
import log from '../logger.js';

export default class Terminal {

    private location: string;
    private trains: Train[] = [];
    private employees: Employee[] = [];

    constructor(terminalLocation: string, terminalEmployees: Employee[]) {
        this.location = terminalLocation;
        this.employees = terminalEmployees;
    }

    getLocation(): string {
        return this.location;
    }

    getTrains(): Train[] {
        return this.trains;
    }

    addTrain(train: Train) {
        this.trains.push(train);
    }

    calculateTotalRevenue(): number {
        return this.trains.reduce((total, train) => total + train.calculateRevenue(), 0);
    }

    getEmployees(): Employee[] {
        return this.employees;
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    removeEmployee(index: number): void {
        if (index >= 0 && index < this.employees.length) {
            this.employees.splice(index, 1);
            log(`Employee at index ${index + 1} removed successfully.`);
        } else {
            log("Invalid employee index.", 'red');
        }
    }

    logAllEmployees(): void {
        log("Employees:", 'bgGreen');
        this.employees.forEach((employee, index) => {
            log(`Employee ${index + 1}: ${employee.toString()}`);
        });
    }

    toString(): string {
        return  '-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-';
    }

}
