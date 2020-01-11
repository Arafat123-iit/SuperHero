import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroComponent} from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent }  from './hero-details/hero-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'hero',component:HeroComponent},
  {path:'detail/:id',component:HeroDetailsComponent},
  {path:'dashboard',component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
