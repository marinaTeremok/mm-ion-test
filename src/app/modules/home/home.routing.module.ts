import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { DashboardComponent, FizzbuzzComponent, FactorialComponent } from './pages';
 
const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'fizzbuzz', component: FizzbuzzComponent },
    { path: 'factorial', component: FactorialComponent },
 ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }