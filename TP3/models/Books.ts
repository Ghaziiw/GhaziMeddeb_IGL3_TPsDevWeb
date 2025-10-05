import { User } from "./index";

export interface book{
    id:number;
    title:string;
    author:string;
    year:number;
    empruteur: User | null;
}
