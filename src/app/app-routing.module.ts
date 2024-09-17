import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./componentes/acceso/login/login.component";
import { HomeComponent } from "./componentes/acceso/home/home.component";

import { AuthGuard } from "./guard/auth.guard";

import { UsuariosComponent } from "./componentes/administracion/usuarios/usuarios.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
