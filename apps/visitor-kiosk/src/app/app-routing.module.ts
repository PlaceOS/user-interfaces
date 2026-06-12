import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { reloadOnChunkLoadError } from '@placeos/common';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

import { BootstrapComponent } from './bootstrap.component';
import { VisitorRegistrationComponent } from './visitor-registration.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'bootstrap',
        component: BootstrapComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'welcome',
        component: WelcomeComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'register',
        component: VisitorRegistrationComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'explore',
        canActivate: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./explore.module').then((m) => m.AppExploreModule),
    },
    {
        path: 'checkin',
        canActivate: [AuthorisedUserGuard],
        loadChildren: () =>
            import('./checkin/checkin.module').then(
                (m) => m.VisitorCheckinModule,
            ),
    },
    { path: '**', redirectTo: 'bootstrap' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            errorHandler: (error) => reloadOnChunkLoadError(error),
            useHash: true,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
