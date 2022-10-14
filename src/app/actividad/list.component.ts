import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
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

  onDelete(id:number):void{
    Swal.fire({
      title:'Are you sure?',
      text:'You cannot undo',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'OK',
      cancelButtonText:'Cancel'
    }).then((result)=>{
      if(result.value){
        // console.log('Deleted actividad ' + id);
        this.actividadService.delete(id).subscribe(
          data =>{
            this.toast.success(data.message, 'Ok',{timeOut:2000, positionClass: 'toast-top-center'});
            this.getActividades();
          },
          err=>{
            this.toast.error(err.error.message, 'Error',{timeOut:2000, positionClass: 'toast-top-center'});
          } 
        );

      }else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.fire(
          'cancel',
          'actividad not deleted',
          'error'
        )
      }
    });
  }

}
