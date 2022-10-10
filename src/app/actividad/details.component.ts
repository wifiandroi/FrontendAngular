import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Actividad } from '../model/actividad';
import { ActividadService } from '../service/actividad.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  actividad:Actividad | undefined;
 
  constructor(
    private actividadService:ActividadService, 
    private toast:ToastrService,
    private router:Router, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getActividad();
  }
  getActividad():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.actividadService.detail(id).subscribe(
      data =>{
        this.actividad = data;
        console.log(this.actividad);
      },
      err=>{
        this.toast.error(err.error.message, 'Error',{timeOut:2000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      }

    );
  }
}
