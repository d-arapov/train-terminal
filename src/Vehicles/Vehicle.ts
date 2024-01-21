export default abstract class Vehicle {

    constructor(public gasLevel: number, public batteryLevel: number) {
    }

    abstract getTicketPrice(): number;
}