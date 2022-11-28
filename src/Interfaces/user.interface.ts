import { Auth } from "./auth.interface";

export interface User extends Auth {
    name: string;
    age: number;
    phone: string;
    rol: "Admin" | "User";
    ocupacion: string;
}