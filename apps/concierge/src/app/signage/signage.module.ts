import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SignageDisplaysComponent } from './signage-displays.component';
import { SignageMediaComponent } from './signage-media.component';
import { SignageZonesComponent } from './signage-zones.component';
import { SignageComponent } from './signage.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: SignageComponent,
        children: [
            { path: '', redirectTo: 'media', pathMatch: 'full' },
            { path: 'media', component: SignageMediaComponent, title: 'Signage Media' },
            {
                path: 'displays',
                component: SignageDisplaysComponent,
                title: 'Signage Displays',
            },
            { path: 'zones', component: SignageZonesComponent, title: 'Signage Zones' },
            { path: '*', redirectTo: 'media', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [
        SignageComponent,
        SignageMediaComponent,
        SignageDisplaysComponent,
        SignageZonesComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class SignageModule {}
