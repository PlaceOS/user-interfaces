import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorisedComponent } from '@user-interfaces/components';

const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    { path: '**', redirectTo: 'unauthorised' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
