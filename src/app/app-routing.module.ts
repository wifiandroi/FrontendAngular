import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './actividad/create.component';
import { DetailsComponent } from './actividad/details.component';
import { ListComponent } from './actividad/list.component';
import { UpdateComponent } from './actividad/update.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'detail/:id',component:DetailsComponent},
  {path:'create',component:CreateComponent},
  {path:'update',component:UpdateComponent},
  {path:'**',redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
