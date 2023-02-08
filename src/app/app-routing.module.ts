import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SintesisComponent } from './components/sintesis/sintesis.component';

const routes: Routes = [
  {path: '',component: InicioComponent},
  {path: 'inicio',component: InicioComponent},
  {path: 'sintesis', component: SintesisComponent},
  {path : '**', redirectTo: 'inicio',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
