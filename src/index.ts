import fs from 'fs/promises';
import chalk from "chalk";
import Employee from './Employee/Employee.js';
import Terminal from './Terminal/Terminal.js';
import CommandHandler from './CommandHandler/CommandHandler.js';

const log = console.log;

const loadEmployees = async (): Promise<Employee[]> => {
    try {
        const data = await fs.readFile('../employees.json', 'utf8');
        const employeesData = JSON.parse(data);
        return employeesData.map((employee: any) => new Employee(employee.name, employee.salaryPercentage));
    } catch (err) {
        console.error("Error reading file:", err);
        return [];
    }
};

const employeeMenu = (commandHandler: CommandHandler) => {
    log(chalk.bgBlue("\n--- Employee Options ---"));
    log(chalk.blue("1. Add employee\n2. Remove employee\n3. Get all employees\n4. Get employee salary\n5. Exit to main menu"));

    commandHandler.askQuestion("Choose an action: ").then(choice => {
        switch (choice) {
            case '1':
                commandHandler.addEmployeeInteractive().then(() => employeeMenu(commandHandler));
                break;
            case '2':
                commandHandler.removeEmployeeInteractive().then(() => employeeMenu(commandHandler));
                break;
            case '3':
                commandHandler.getAllEmployees();
                employeeMenu(commandHandler);
                break;
            case '4':
                commandHandler.calculateEmployeeSalaryInteractive().then(() => employeeMenu(commandHandler));;
                break;
            case '5':
                mainMenu(commandHandler);
                break;
            default:
                log(chalk.bgRed("Invalid choice, please try again."));
                employeeMenu(commandHandler);
        }
    });
}

const mainMenu = (commandHandler: CommandHandler) => {
    log(chalk.bgBlue(`\n--- Terminal ${commandHandler.getTerminal().getLocation()} - Management ---`));
    log(chalk.blue("1. Add Train\n2. Park Vehicle\n3. Calculate Revenue\n4. Employee Options\n99. Exit"));

    commandHandler.askQuestion("Choose an action: ").then(choice => {
        switch (choice) {
            case '1':
                commandHandler.addTrainInteractive().then(() => mainMenu(commandHandler));
                break;
            case '2':
                commandHandler.parkVehicleInteractive().then(() => mainMenu(commandHandler));
                break;
            case '3':
                commandHandler.calculateRevenue();
                mainMenu(commandHandler);
                break;
            case '4':
                commandHandler.getAllEmployees();
                employeeMenu(commandHandler);
                break;
            default:
                log(chalk.bgRed("Invalid choice, please try again."));
                mainMenu(commandHandler);
        }
    });
}

const main = async () => {
    const employees = await loadEmployees();
    const terminal = new Terminal('Dizeldorf', employees);
    const commandHandler = new CommandHandler(terminal);
    mainMenu(commandHandler);
};

main();
