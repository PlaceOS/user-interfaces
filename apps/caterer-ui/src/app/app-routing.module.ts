import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorisedComponent } from '@placeos/components';
import { CateringComponent } from './catering.component';

const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    { path: '', component: CateringComponent },
    { path: ':view', component: CateringComponent },
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
