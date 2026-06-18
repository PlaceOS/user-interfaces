import { Routes } from '@angular/router';
import { SignageDisplaysComponent } from './signage-displays.component';
import { SignageMediaComponent } from './signage-media.component';
import { SignageZonesComponent } from './signage-zones.component';
import { SignageComponent } from './signage.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: SignageComponent,
        children: [
            { path: '', redirectTo: 'media', pathMatch: 'full' },
            {
                path: 'media',
                component: SignageMediaComponent,
                title: 'Signage Media',
            },
            {
                path: 'displays',
                component: SignageDisplaysComponent,
                title: 'Signage Displays',
            },
            {
                path: 'zones',
                component: SignageZonesComponent,
                title: 'Signage Zones',
            },
            { path: '*', redirectTo: 'media', pathMatch: 'full' },
        ],
    },
];
