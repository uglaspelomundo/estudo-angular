import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direticas-customizadas',
  templateUrl: './direticas-customizadas.component.html',
  styleUrls: ['./direticas-customizadas.component.css']
})
export class DireticasCustomizadasComponent implements OnInit {

  mostrarCursos = false;


  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
