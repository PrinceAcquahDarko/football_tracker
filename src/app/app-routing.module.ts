import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'results/:teamcode',
    loadChildren: () =>
      import('./detail/detail/detail.module').then((m) => m.DetailModule),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
