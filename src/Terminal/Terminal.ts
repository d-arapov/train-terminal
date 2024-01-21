import chalk from 'chalk';
import Employee from '../Employee/Employee.js';
import Train from "../Trains/Train.js";

const log = console.log;

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
            console.log(chalk.green(`Employee at index ${index + 1} removed successfully.`));
        } else {
            console.log(chalk.red("Invalid employee index."));
        }
    }

    logAllEmployees(): void {
        log(chalk.bgGreen("Employees:"));
        this.employees.forEach((employee, index) => {
            log(chalk.green(`Employee ${index + 1}:`, employee.toString()));
        });
    }

}
