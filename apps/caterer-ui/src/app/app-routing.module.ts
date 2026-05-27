import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';
import { CateringComponent } from './catering.component';

const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    {
        path: '',
        component: CateringComponent,
        canActivate: [AuthorisedUserGuard],
    },
    {
        path: ':view',
        component: CateringComponent,
        canActivate: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        UnauthorisedComponent,
    ],
    exports: [RouterModule, UnauthorisedComponent],
})
export class AppRoutingModule {}
