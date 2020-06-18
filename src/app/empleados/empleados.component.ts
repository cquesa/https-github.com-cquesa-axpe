import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

 // coches: Coche[];

  columnas: string[] = ['codigo', 'descripcion', 'urlImagen'];
  dataSource = null;

// @ViewChild(MatTable) tabla1: MatTable <Coche>;

  constructor() { }

  ngOnInit(): void {
  }

}
