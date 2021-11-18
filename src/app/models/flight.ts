export class Flight{
  constructor(
    public id: string,
    public departure: string,
    public arrival: string,
    public assignedDate: string,
    public passengers: string,
    public pilot: string,
    public coPilot: string,
    public airplane: string,
  ){ }
}
