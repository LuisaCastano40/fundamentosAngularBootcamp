import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // 1. declaración e inicialización de sus variables
  // = -> asignación
  // == o === -> comparación
  nombreFramework: string = 'Angular';
  horasBootcamp: number = 300;
  especialista: string = 'Luisa Castaño';
  contenidoBootcamp = {
    tecnologia1: 'HTML',
    tecnologia2: 'CSS',
    tecnologia3: 'JS',
    tecnologia4: 'ANGULAR',
    tecnologia5: 'NODE.JS',
  }

  objetoProducto = {
    nombre: 'galletas',
    cantidad: 30,
    vendido: true
  }

  colorFondo: string = 'colorPink';
  // Forma correcta de manejar las variable de tipo booleano
  isLogged : boolean = false;
  isDelete : boolean = true;
  isShowed : boolean = true;


  productos : string[] = ['carros', 'motos', 'bicicletas']
  // -------------------------------

  // 2. Funciones o métodos

  saludo(){
    console.log('Holaaaaaaaaa, soy un botón al que le diste click');
  }

  manejarMouseOver(){
    console.log('evento mouse encima de la cajita');
    this.colorFondo = 'colorRojo';
  }

  manejarMouseOut(){
    console.log('evento mouse fuera de la cajita');
    this.colorFondo = 'colorVerde'
  }

  manejarClick(){
    console.log('evento click');
    this.colorFondo = 'colorPink'
  }

  //3. Exportaciones - ciclo de vida

}
