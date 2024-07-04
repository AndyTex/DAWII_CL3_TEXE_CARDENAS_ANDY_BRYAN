import { Routes } from '@angular/router';
import { Pregunta02Component } from './pregunta02/pregunta02.component';
import { Pregunta03Component } from './pregunta03/pregunta03.component';

export const routes: Routes = [
  {path: 'pregunta02', component: Pregunta02Component},
  {path: 'pregunta03', component: Pregunta03Component},
  {path: '', redirectTo: '',pathMatch: 'full'}
];
