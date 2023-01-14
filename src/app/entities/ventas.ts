import { Cliente } from "./cliente";
import { Producto } from "./producto";

export interface Ventas {
    cliente: Cliente
    productos: Producto[]
}