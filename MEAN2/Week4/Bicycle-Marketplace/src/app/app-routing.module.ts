import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from '@shared/components';

import { authRoutes } from '@auth/auth-routing.module';
import { marketplaceRoutes } from '@marketplace/marketplace-routing.module';

const routes: Routes = [
  authRoutes,
  ...marketplaceRoutes,
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
