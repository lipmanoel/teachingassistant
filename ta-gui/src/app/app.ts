import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('ta-gui');
  protected readonly title = signal('Testando as modificações');
}
