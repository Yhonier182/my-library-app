import {Transaccion} from "./Transaccion";

export class Libro {
    isbn: string;
    titulo: string;
    imagen: string;
    precioCompra: number;
    precioVenta: number;
    cantidadActual: number;
    transacciones: Transaccion[];

    constructor(isbn: string, titulo: string, imagen: string, precioCompra: number, precioVenta: number, cantidadActual: number) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.imagen = imagen;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidadActual = cantidadActual;
        this.transacciones = [];
    }

    abastecer(cantidad: number): void {
        this.cantidadActual += cantidad;
        this.transacciones.push(new Transaccion('abastecimiento', new Date(), cantidad));
    }

    vender(cantidad: number): boolean {
        if (cantidad <= this.cantidadActual) {
            this.cantidadActual -= cantidad;
            this.transacciones.push(new Transaccion('venta', new Date(), cantidad));
            return true;
        }
        return false;
    }
}
