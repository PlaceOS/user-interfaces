import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap.component';
import { BookingPanelComponent } from './panel/panel.component';
import { BookingPanelArrayComponent } from './panel-array.component';
import { BookingPanelSelectComponent } from './panel-select.component';
import { PanelViewComponent } from './new-panel/panel-view.component';
import { CheckinViewComponent } from './checkin/checkin-view.component';
import { EventPanelComponent } from './event-panel.component';

const routes: Routes = [
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'panel/:system_id', component: PanelViewComponent },
    { path: 'checkin/:system_id', component: CheckinViewComponent },
    { path: 'panel-old/:system_id', component: BookingPanelComponent },
    { path: 'events/:system_id', component: EventPanelComponent },
    { path: 'panel-array', component: BookingPanelArrayComponent },
    { path: 'panel-select', component: BookingPanelSelectComponent },
    { path: '**', redirectTo: 'bootstrap' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
