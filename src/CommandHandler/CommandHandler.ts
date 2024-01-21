import Terminal from '../Terminal/Terminal.js';
import SmallTrain from '../Trains/SmallTrain.js';
import LargeTrain from '../Trains/LargeTrain.js';
import Car from '../Vehicles/Car.js';
import Van from '../Vehicles/Van.js';
import Bus from '../Vehicles/Bus.js';
import Truck from '../Vehicles/Truck.js';
import Train from '../Trains/Train.js';
import Vehicle from '../Vehicles/Vehicle.js';
import readline from 'readline';
import chalk from 'chalk';
import Employee from '../Employee/Employee.js';

const log = console.log

export default class CommandHandler {
    private terminal: Terminal;
    private rl: readline.Interface;

    constructor(terminal: Terminal) {
        this.terminal = terminal;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    getTerminal(): Terminal {
        return this.terminal;
    }

    async addTrainInteractive(): Promise<void> {
        const trainType = await this.askQuestion("Enter train type (small/large): ");
        this.addTrain(trainType);
    }

    async parkVehicleInteractive(): Promise<void> {
        const vehicleType = await this.askQuestion("Enter vehicle type (car/van/bus/truck): ");
        const indexStr = await this.askQuestion("Enter the index number of the train to park the vehicle: ");
        const trainIndex = parseInt(indexStr, 10) - 1; // Convert to zero-based index
        if (isNaN(trainIndex)) {
            console.log(chalk.red("Invalid train index."));
            return this.parkVehicleInteractive(); // Re-prompt if invalid
        }
        this.parkVehicle(vehicleType, trainIndex);
    }

    askQuestion(query: string): Promise<string> {
        return new Promise(resolve => {
            this.rl.question(chalk.green(query), (input) => resolve(input));
        });
    }

    addTrain(type: string): void {
        let train: Train;

        switch (type) {
            case 'small':
                train = new SmallTrain();
                break;
            case 'large':
                train = new LargeTrain();
                break;
            default:
                console.log(chalk.bgRed("Invalid train type."));
                return;
        }

        this.terminal.addTrain(train);
        console.log(chalk.bgGreen(`Added a ${type} train.`));
    }

    parkVehicle(type: string, trainIndex: number): void {
        if (trainIndex < 0 || trainIndex >= this.terminal.getTrains().length) {
            console.log(chalk.red("Invalid train index."));
            return;
        }

        let vehicle: Vehicle;

        switch (type) {
            case 'car':
                vehicle = new Car();
                break;
            case 'van':
                vehicle = new Van();
                break;
            case 'bus':
                vehicle = new Bus();
                break;
            case 'truck':
                vehicle = new Truck();
                break;
            default:
                console.log(chalk.red("Invalid vehicle type."));
                return;
        }

        const train = this.terminal.getTrains()[trainIndex];
        const success = train.addVehicle(vehicle);
        if (success) {
            console.log(chalk.green(`Parked a ${type} in train #${trainIndex + 1}.`));
        } else {
            console.log(chalk.red("Failed to park vehicle: Train is full or incompatible."));
        }
    }

    calculateRevenue(): void {
        log(chalk.green(`Total Revenue: ${this.terminal.calculateTotalRevenue()}`));
    }

    async addEmployeeInteractive(): Promise<void> {

        const employeeName = await this.askQuestion("Enter employee name: ");
        const employeeSalaryPercentage = await this.askQuestion("Enter employee salary percentage: ");
        const salaryPercentage = parseFloat(employeeSalaryPercentage);

        if (isNaN(salaryPercentage)) {
            log(chalk.red("Invalid salary percentage."));
            this.addEmployeeInteractive();
        } else {
            const newEmployee = new Employee(employeeName, salaryPercentage);
            this.terminal.addEmployee(newEmployee);
            log(chalk.green(`Added new employee: ${employeeName}`));
        }

    }

    async removeEmployeeInteractive(): Promise<void> {
        const employeeIndex = await this.askQuestion("Enter employee index to remove: ")
        const index = parseInt(employeeIndex, 10) - 1;

        if (isNaN(index)) {
            log(chalk.red("Invalid index."));
            this.removeEmployeeInteractive(); // Re-prompt if invalid
        } else {
            this.terminal.removeEmployee(index);
            log(chalk.green(`Removed employee at index ${index + 1}`));
        }

    }

    getAllEmployees(): void {
        this.terminal.logAllEmployees()
    }

    async calculateEmployeeSalaryInteractive(): Promise<void> {
        const employeeIndex = await this.askQuestion("Enter employee index to calculate salary: ");
        const index = parseInt(employeeIndex, 10) - 1;

        if (isNaN(index) || index < 0 || index >= this.terminal.getEmployees().length) {
            console.log(chalk.red("Invalid employee index."));
            this.calculateEmployeeSalaryInteractive(); // Re-prompt if invalid
        } else {
            const employee = this.terminal.getEmployees()[index];
            let totalSalary = 0;
            this.terminal.getTrains().forEach(train => {
                totalSalary += employee.calculateSalary(train);
            });
            console.log(chalk.green(`Salary for ${employee.toString()}: ${totalSalary}`));
        }

    }

    close(): void {
        this.rl.close();
    }
}
