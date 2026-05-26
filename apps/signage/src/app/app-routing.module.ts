import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { BootstrapComponent } from './bootstrap.component';
import { SignagePanelComponent } from './signage.component';

const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    {
        path: 'bootstrap',
        component: BootstrapComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'signage',
        component: SignagePanelComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: 'signage/:system_id',
        component: SignagePanelComponent,
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'bootstrap' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
