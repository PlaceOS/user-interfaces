import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
    { path: 'bootstrap', component: BootstrapComponent },
    {
        path: 'explore',
        loadChildren: () => import('./explore/explore.module').then((m) => m.ExploreModule),
    },
    { path: 'welcome', component: WelcomeComponent },
    {
        path: 'checkin',
        loadChildren: () => import('./checkin/checkin.module').then((m) => m.AppCheckinModule),
    },
    { path: '**', redirectTo: 'bootstrap' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
