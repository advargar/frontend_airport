export class Flight_Catalog{
  constructor(
    public id: string,
    public aeroline: string,
    public departure: string,
    public arrival: string,
    public estimated_time: string,
    public price_ticket: string,
    public status: string,
  ){ }
}
