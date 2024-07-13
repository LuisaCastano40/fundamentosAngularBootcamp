import { Component } from '@angular/core';
import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-padre',
  standalone: true,
  imports: [ComponenteHijoComponent, CommonModule],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css'
})
export class ComponentePadreComponent {
  textoEnviar: string = 'Hola soy tu padre';

  // 1. crearme la variable donde vamos a recibir la información
  nombreRecibido : string = '';
  arregloNombresRecibidos: string[] = [];

  // 2. Crearse un método para guardar los datos recibidos
// Esta función me recibe el parámetro enviado por el hijo
  recibirNombre(nombre : string){
    this.nombreRecibido = nombre;
    this.arregloNombresRecibidos.push(nombre);
  }
  
}
