import { UserCardComponent } from './main/user-card/user-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { InterfaceComponent } from './main/interface/interface.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'quicky',
  component: InterfaceComponent,
},
{
  path: 'userview',
  component: UserCardComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
