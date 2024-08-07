import {Libro} from "./Libro";
import {TiendaDeLibros} from "./TiendaDeLibros";
import { Transaccion } from "./Transaccion";

// Ejemplo de uso
const tienda = new TiendaDeLibros(1000000);

const libro1 = new Libro('1234567890', 'El Gran Libro', 'imagen1.jpg', 200, 300, 10);
tienda.agregarLibro(libro1);    

tienda.abastecerLibro('1234567890', 5);
tienda.venderLibro('1234567890', 3);

console.log(tienda.obtenerInformacionLibro('1234567890'));
console.log(`Dinero en caja: $${tienda.dineroEnCaja}`);

