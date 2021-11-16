export class Flight{
  constructor(
    public id: number,
    public departure: number,
    public arrival: number,
    public assignedDate: string,
    public passengers: number,
    public pilot: number,
    public coPilot: number,
    public airplane: number,
  ){ }
}
