export class Flight_Catalog{
  constructor(
    public id: number,
    public aeroline: number,
    public departure: number,
    public arrival: number,
    public estimated_time: string,
    public price_ticket: number,
    public status: string,
  ){ }
}
