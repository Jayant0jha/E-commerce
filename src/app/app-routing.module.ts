import { ShoppingComponent } from './shopping/shopping.component';
import { AdminDashboardSharedModule } from './../../projects/admin-dashboard/src/app/app.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'shopping',
   component: ShoppingComponent
  },

  {path: 'admin', 
  loadChildren: '../../projects/admin-dashboard/src/app/app.module#AdminDashboardSharedModule'},

  { path: '**', redirectTo: '/shopping'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminDashboardSharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
