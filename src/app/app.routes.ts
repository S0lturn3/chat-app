import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './shared/views/not-found/not-found.component';

export const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'inicio' },
   { path: 'inicio', component: HomeComponent, title: "Início" },
   // Adicione mais rotas abaixo desta linha


  { path: '**', component: NotFoundComponent, title: "Página não encontrada" },
  { path: 'pagina-nao-encontrada', component: NotFoundComponent, title: "Página não encontrada" }
];
