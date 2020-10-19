import { Routes } from '@angular/router';
import { AppCheckinComponent } from './checkin.component';

export const ROUTES: Routes = [
    { path: '', component: AppCheckinComponent },
    { path: ':page', component: AppCheckinComponent },
    { path: '**',      redirectTo: '' }
];
