import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Actividad } from '../model/actividad';
import { ActividadService } from '../service/actividad.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
   nombre!: string;
   apellido!:string;
   precio!:number;

  constructor(
    private actividadService:ActividadService, 
    private toast:ToastrService,
    private router:Router ) { }

  ngOnInit(): void {
  }
 onCreate(){
  const actividad = new Actividad(this.nombre, this.apellido, this.precio);
  this.actividadService.create(actividad).subscribe(
    data =>{
      this.toast.success(data.message, 'Ok',{timeOut:2000, positionClass: 'toast-top-center'});
      this.router.navigate(['']);
    },
    err=>{
      this.toast.error(err.error.message, 'Error',{timeOut:2000, positionClass: 'toast-top-center'});
    }  
  );

 }



}
