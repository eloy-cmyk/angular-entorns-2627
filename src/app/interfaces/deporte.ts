export interface Deportista {
  id: number;          
  nombre: string;     
  deporte: string;      
  dorsal: number;      
  activo: boolean;      
  equipo?: string;     
}