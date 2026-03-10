import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { reloadOnChunkLoadError } from '@placeos/common';

import { BootstrapComponent } from './bootstrap.component';
import { VisitorRegistrationComponent } from './visitor-registration.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'register', component: VisitorRegistrationComponent },
    {
        path: 'explore',
        loadChildren: () =>
            import('./explore.module').then((m) => m.AppExploreModule),
    },
    {
        path: 'checkin',
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
