import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Service1Component } from './components/service1/service1.component';
import { Service2Component } from './components/service2/service2.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'service1', component: Service1Component },
  { path: 'service2', component: Service2Component },
  { path: '**', redirectTo: '' }
]; 