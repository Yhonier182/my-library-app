export class Transaccion {
    tipo: 'venta' | 'abastecimiento';
    fecha: Date;
    cantidad: number;

    constructor(tipo: 'venta' | 'abastecimiento', fecha: Date, cantidad: number) {
        this.tipo = tipo;
        this.fecha = fecha;
        this.cantidad = cantidad;
    }
}
