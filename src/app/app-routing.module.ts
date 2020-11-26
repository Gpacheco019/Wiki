import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component'

const routes: Routes = [
  //{path: '**', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  { path: 'conteudo', component: ConteudoComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
