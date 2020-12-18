import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
    { path: 'bootstrap', component: BootstrapComponent },
    { path: ':system_id', component: PanelComponent },
    { path: '**', redirectTo: 'bootstrap' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
