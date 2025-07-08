import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BootstrapComponent } from './bootstrap.component';
import { CheckinViewComponent } from './checkin/checkin-view.component';
import { EventPanelComponent } from './event-panel.component';
import { PanelViewComponent } from './new-panel/panel-view.component';

const routes: Routes = [
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'panel/:system_id', component: PanelViewComponent },
    { path: 'checkin/:system_id', component: CheckinViewComponent },
    { path: 'events/:system_id', component: EventPanelComponent },
    { path: '**', redirectTo: 'bootstrap' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
