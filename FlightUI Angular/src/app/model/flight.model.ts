import { Vendor } from "./vendor.model";

export class Flight{
    id:number;
    name: string;
    source: string;
    destination: string;
    depDate: string;
    depTime: string;
    arvDate: string;
    arvTime: string;
    priceAdult: number;
    priceChild: number;
    seats: number;
}