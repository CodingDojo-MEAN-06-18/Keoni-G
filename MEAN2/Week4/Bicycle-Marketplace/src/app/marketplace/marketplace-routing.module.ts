import { Routes } from '@angular/router';

import * as fromBikes from '@marketplace/containers';
import { AuthGuard } from '@auth/guards';

export const marketplaceRoutes: Routes = [
  {
  path: 'browse',
    component: fromBikes.BrowseComponent,
  },
  {
    path: 'listings',
    component: fromBikes.ListingsComponent,
  },
];
