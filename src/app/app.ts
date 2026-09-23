import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Deportista } from './interfaces/deporte';
import { Torneo } from './interfaces/torneo';
import { saludar, esMajorEdat, sumarArray } from './funcions';
import { Alumne } from './alumne';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');

  deportistas: Deportista[] = [
    { id: 1, nombre: 'Fermín', deporte: 'Fútbol', dorsal: 7, activo: true, equipo: 'FC Barcelona' },
    { id: 2, nombre: 'Rafael Nadal', deporte: 'Tenis', dorsal: 1, activo: false },
    { id: 3, nombre: 'Pau Gasol', deporte: 'Baloncesto', dorsal: 16, activo: false },
    { id: 4, nombre: 'Ricky Rubio', deporte: 'Baloncesto', dorsal: 9, activo: true, equipo: 'FC Barcelona' },
    { id: 5, nombre: 'Lamine Yamal', deporte: 'Fútbol', dorsal: 19, activo: true, equipo: 'FC Barcelona' }
  ];

  ngOnInit(): void {
    console.log('--- PARTE B: DEPORTISTAS ---');
    console.log('Deportistas activos:', this.getActius());
    console.log('Búsqueda por ID (1):', this.findById(1));
    
    const d1 = this.findById(1);
    if (d1) console.log('Formato bonito:', this.formatarElement(d1));

    console.log('--- PARTE C: CLASE TORNEO ---');
    const champions = new Torneo('Champions League', 5000000);
    console.log(champions.agregarEquipo('FC Barcelona'));
    console.log('¿Es premio grande (>1M)?', champions.tienePremioGrande(1000000));
    console.log('Total de equipos inscritos (getter):', champions.totalEquipos);

    console.log('--- FUNCIONES AUXILIARES ---');
    console.log(saludar('Eloy'));
    console.log('¿Es mayor de edad (20)?', esMajorEdat(20));
    console.log('Suma de [10, 20, 30]:', sumarArray([10, 20, 30]));

    console.log('--- CLASE ALUMNO ---');
    const alumne1 = new Alumne('Eloy', 20, 'DAW', [7, 8, 9, 6]);
    const alumne2 = new Alumne('Marc', 17, 'DAM', [3, 4, 2, 5]);

    console.log(alumne1.presentar());
    console.log(`Nota media de ${alumne1.nom}: ${alumne1.mitjanaNotes} | ¿Aprobado?: ${alumne1.haAprobat}`);

    console.log(alumne2.presentar());
    console.log(`Nota media de ${alumne2.nom}: ${alumne2.mitjanaNotes} | ¿Aprobado?: ${alumne2.haAprobat}`);
  }

  getActius(): Deportista[] {
    return this.deportistas.filter(d => d.activo === true);
  }

  findById(id: number): Deportista | undefined {
    return this.deportistas.find(d => d.id === id);
  }

  formatarElement(element: Deportista): string {
    const estado = element.activo ? 'En activo' : 'Retirado/a';
    const equipo = element.equipo ? ` (${element.equipo})` : ' (Sin equipo)';
    return `[${element.deporte}] ${element.nombre}${equipo} - Dorsal: ${element.dorsal} | Estado: ${estado}`;
}

}
