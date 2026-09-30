import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Perfil } from './components/perfil/perfil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');
}
