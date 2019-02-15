import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
}, {
  path: 'registration',
  component: RegistrationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
