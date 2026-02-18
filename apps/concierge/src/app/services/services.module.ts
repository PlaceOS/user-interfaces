import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { ServicesPackagesComponent } from './services-packages.component';
import { ServicesSpacesComponent } from './services-spaces.component';
import { ServicesAdditionalComponent } from './services-additional.component';
import { ServiceFormComponent } from './service-form.component';

const routes: Route[] = [
    {
        path: '',
        component: ServicesComponent,
        children: [
            { path: 'packages', component: ServicesPackagesComponent },
            { path: 'spaces', component: ServicesSpacesComponent },
            { path: 'additional', component: ServicesAdditionalComponent },
            { path: 'form', component: ServiceFormComponent },
            { path: 'form/:id', component: ServiceFormComponent },
            { path: '**', redirectTo: 'packages' },
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [
        ServicesComponent,
        ServicesPackagesComponent,
        ServicesSpacesComponent,
        ServicesAdditionalComponent,
        ServiceFormComponent,
        RouterModule.forChild(routes),
    ],
})
export class ServicesModule {}
