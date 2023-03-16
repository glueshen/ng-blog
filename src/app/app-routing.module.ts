import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularOriginalPageComponent } from './angular-original-page/angular-original-page.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

const routes: Routes = [
  {path:'original',component:AngularOriginalPageComponent},
  {path:'tasks', component:TaskManagerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
