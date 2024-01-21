import chalk from 'chalk';

const log = (message: string, color: 'green' | 'bgGreen' | 'red' | 'bgRed' | 'blue' | 'bgBlue' = 'green') => {
    switch (color) {
        case 'green':
            console.log(chalk.green(message));
            break;
        case 'bgGreen':
            console.log(chalk.bgGreen(message));
            break;
        case 'red':
            console.log(chalk.red(message));
            break;
        case 'bgRed':
            console.log(chalk.bgRed(message));
            break;
        case 'blue':
            console.log(chalk.blue(message));
            break;
        case 'bgBlue':
            console.log(chalk.bgBlue(message));
            break;
        default:
            console.log(message);
            break;
    }
};

export default log;