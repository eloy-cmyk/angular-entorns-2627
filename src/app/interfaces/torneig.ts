export class TorneigEsports {
  nom: string;
  premi: number;
  private jugadorsInscrits: string[] = [];

  constructor(nom: string, premi: number) {
    this.nom = nom;
    this.premi = premi;
  }

  afegirJugador(nomJugador: string): string {
    this.jugadorsInscrits.push(nomJugador);
    return `Jugador ${nomJugador} inscrit correctament al torneig ${this.nom}.`;
  }

  tePremiGran(minim: number): boolean {
    return this.premi >= minim;
  }

  get totalInscrits(): number {
    return this.jugadorsInscrits.length;
  }
}