import { Component, OnInit } from '@angular/core';

interface Estados {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  selectedValue?: string;

  user = {
    nombres:'',
    apellidos:'',
    dpi:'',
    telefono:''
  };

  estado: Estados[] = [
    { value: 'A', viewValue: 'ACTIVO' },
    { value: 'I', viewValue: 'INACTIVO' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  save () {
    console.log("DATOS DE USUARIO Nombres....: "+this.user.nombres);
    console.log("DATOS DE USUARIO Apellidos..: "+this.user.apellidos);
  }

  onChange(newValue: any) {
    console.log(newValue);
  }

}
