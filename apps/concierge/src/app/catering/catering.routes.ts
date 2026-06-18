import { Routes } from '@angular/router';
import { CateringComponent } from './catering.component';

export const ROUTES: Routes = [
    { path: '', component: CateringComponent, title: 'Catering' },
    { path: ':view', component: CateringComponent, title: 'Catering' },
];
