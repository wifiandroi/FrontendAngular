import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Actividad } from '../model/actividad';
import { ActividadService } from '../service/actividad.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: number;
  nombre!: string;
  apellido!: string;
  precio!: number;
  // actividad!: Actividad;
  

  constructor(
    private actividadService:ActividadService, 
    private toast:ToastrService,
    private router:Router, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getActividad();
  }

  // onUpdate():void{
  //   this.actividadService.update(this.id, this.actividad).subscribe(
  //     data =>{
  //       this.toast.success(data.message, 'Ok',{timeOut:2000, positionClass: 'toast-top-center'});
  //       this.router.navigate(['']);
  //     },
  //     err=>{
  //       this.toast.error(err.error.message, 'Error',{timeOut:2000, positionClass: 'toast-top-center'});
  //     } 
  //   );
  // }

  // getActividad():void{
  //   this.id = this.activatedRoute.snapshot.params['id'];
  //   this.actividadService.detail(this.id).subscribe(
  //     data =>{
  //       this.actividad = data;
  //       console.log(this.actividad);
  //     },
  //     err=>{
  //       this.toast.error(err.error.message, 'Error',{timeOut:2000, positionClass: 'toast-top-center'});
  //       this.router.navigate(['']);
  //     }

  //   );
  // }

  onUpdate():void{
    const actividad = new Actividad(this.nombre, this.apellido, this.precio);
    this.actividadService.update(this.id, actividad).subscribe(
      data =>{
        this.toast.success(data.message, 'Ok',{timeOut:2000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      },
      err=>{
        this.toast.error(err.error.message, 'Error',{timeOut:2000, positionClass: 'toast-top-center'});
      } 
    );
  }

  getActividad():void{
    this.id = this.activatedRoute.snapshot.params['id'];
    this.nombre = this.activatedRoute.snapshot.params['nombre'];
    this.apellido = this.activatedRoute.snapshot.params['apellido'];
    this.precio = this.activatedRoute.snapshot.params['precio'];
    
  }

}
