import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap.component';
import { WelcomeComponent } from './welcome.component';
import { VisitorRegistrationComponent } from './visitor-registration.component';

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
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
