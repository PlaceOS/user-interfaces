import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorisedUserGuard } from 'src/app/common/guards/authorised-user.guard';
import { UnauthorisedComponent } from 'src/app/ui/unauthorised/unauthorised.component';

const routes: Routes = [
    { path: 'unauthorised', component: UnauthorisedComponent },
    {
        path: 'day-view',
        loadChildren: () => import('./day-view/day-view.module').then((m) => m.DayViewModule),
        canActivate: [AuthorisedUserGuard],
        canLoad: [AuthorisedUserGuard],
    },
    { path: '**', redirectTo: 'day-view' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
