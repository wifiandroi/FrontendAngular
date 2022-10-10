import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Actividad } from '../model/actividad';
import { ActividadService } from '../service/actividad.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  actividades:Actividad[]=[];

  constructor(
    private actividadService: ActividadService,
    private toast:ToastrService
  ) { }
  ngOnInit(): void {
    this.getActividades();
  }
  getActividades():void{
    this.actividadService.list().subscribe(
      data =>{
        this.actividades = data;
        console.log(this.actividades);
      },
      err=>{
        this.toast.error(err.error.message, 'Error',{timeOut:2000, positionClass: 'toast-top-center'});
      }
    );
  }

}
