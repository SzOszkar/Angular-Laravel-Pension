import { DataTableComponent } from './components/data-table/data-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AfterLoginService] },
  { path: 'data-table', component: DataTableComponent, canActivate: [AfterLoginService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
