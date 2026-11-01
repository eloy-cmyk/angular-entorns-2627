import { Component } from '@angular/core';
import { ProducteLab, PRODUCTES_LAB } from '../producte-lab';

@Component({
  selector: 'app-fitxa-producte',
  imports: [],
  templateUrl: './fitxa-producte.html',
  styleUrl: './fitxa-producte.css',
})
export class FitxaProducte {
  // Producto que muestra la ficha (el primero de la lista)
  producte: ProducteLab = PRODUCTES_LAB[0];

  // Variable de estado: false hasta que se pulsa el botón
  afegitAlCarret = false;

  // Getter: true si quedan unidades
  get teEstoc(): boolean {
    return this.producte.estoc > 0;
  }

  // Marca el producto como añadido al carrito
  afegir(): void {
    this.afegitAlCarret = true;
  }
}
