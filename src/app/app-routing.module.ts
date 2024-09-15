import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sign-in', loadChildren: () => import('./auth/components/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'log-in', loadChildren: () => import('./auth/components/log-in/log-in.module').then(m => m.LogInModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
