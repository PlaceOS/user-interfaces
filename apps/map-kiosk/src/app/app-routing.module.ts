import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorisedComponent } from '@placeos/components';
import { BootstrapComponent } from './bootstrap.component';
import { ExploreComponent } from './explore.component';

const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'explore', component: ExploreComponent },
    { path: '**', redirectTo: 'bootstrap' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
