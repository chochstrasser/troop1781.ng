import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CampoutsComponent } from './campouts/campouts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Troop 1781 - Home' }
  },
  {
    path: 'Campouts',
    component: CampoutsComponent,
    data: { title: 'Troop 1781 - Home' }
  },
  {
    path: 'Home',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes)
