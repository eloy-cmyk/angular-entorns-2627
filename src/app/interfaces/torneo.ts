export class Torneo {
  nombre: string;
  premio: number;
  private equiposInscritos: string[] = [];

  constructor(nombre: string, premio: number) {
    this.nombre = nombre;
    this.premio = premio;
  }

  agregarEquipo(nombreEquipo: string): string {
    this.equiposInscritos.push(nombreEquipo);
    return `El equipo ${nombreEquipo} se ha inscrito al torneo ${this.nombre}.`;
  }

  tienePremioGrande(minimo: number): boolean {
    return this.premio >= minimo;
  }

  get totalEquipos(): number {
    return this.equiposInscritos.length;
  }
}