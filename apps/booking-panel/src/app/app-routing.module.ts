import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap.component';
import { BookingPanelComponent } from './panel/panel.component';
import { BookingPanelArrayComponent } from './panel-array.component';
import { BookingPanelSelectComponent } from './panel-select.component';
import { PanelViewComponent } from './new-panel/panel-view.component';

const routes: Routes = [
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'panel/:system_id', component: PanelViewComponent },
    // { path: 'panel/:system_id', component: BookingPanelComponent },
    { path: 'panel-array', component: BookingPanelArrayComponent },
    { path: 'panel-select', component: BookingPanelSelectComponent },
    { path: '**', redirectTo: 'bootstrap' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
