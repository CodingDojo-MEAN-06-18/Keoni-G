import { Route } from '@angular/router';

import * as fromAuth from '@auth/containers';

export const authRoutes: Route = {
  path: '',
  pathMatch: 'full',
  component: fromAuth.AuthComponent,
};
