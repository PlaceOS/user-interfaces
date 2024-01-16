import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorisedComponent } from '@placeos/components';
import { BootstrapComponent } from './bootstrap.component';
import { SignagePanelComponent } from './signage.component';

const routes: Routes = [
    {
        path: 'unauthorised',
        component: UnauthorisedComponent,
    },
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'signage', component: SignagePanelComponent },
    { path: '**', redirectTo: 'bootstrap' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
