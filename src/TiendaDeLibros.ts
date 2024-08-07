
import {Libro} from "./Libro";


export class TiendaDeLibros {
  
    catalogo: Map<string, Libro>; //mapeo  la clase libro 
    dineroEnCaja: number; //creo una variable para tener la 

    constructor(inversionInicial: number) {
        this.catalogo = new Map();
        this.dineroEnCaja = inversionInicial;
    }

    agregarLibro(libro: Libro): void {
        if (!this.catalogo.has(libro.isbn)) {
            this.catalogo.set(libro.isbn, libro);
        } else {
            throw new Error('El libro con este ISBN ya existe en el catálogo.');
        }
    }

    abastecerLibro(isbn: string, cantidad: number): void {
        const libro = this.catalogo.get(isbn);
        if (libro) {
            libro.abastecer(cantidad);
        } else {
            throw new Error('El libro con este ISBN no existe en el catálogo.');
        }
    }

    venderLibro(isbn: string, cantidad: number): void {
        const libro = this.catalogo.get(isbn);
        if (libro) {
            if (libro.vender(cantidad)) {
                this.dineroEnCaja += libro.precioVenta * cantidad;
            } else {
                throw new Error('No hay suficientes ejemplares para vender.');
            }
        } else {
            throw new Error('El libro con este ISBN no existe en el catálogo.');
        }
    }

    obtenerInformacionLibro(isbn: string): Libro | undefined {
        return this.catalogo.get(isbn);
    }
}

