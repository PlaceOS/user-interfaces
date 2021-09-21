import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap.component';
import { ControlMainViewComponent } from './main-view.component';
import { ControlTabbedViewComponent } from './tabbed-view/tabbed-view.component';
import { ControlVideoCallViewComponent } from './video-call/video-call-view.component';

const routes: Routes = [
    {
        path: 'bootstrap',
        component: BootstrapComponent,
    },
    {
        path: 'panel/:system',
        component: ControlMainViewComponent,
    },
    {
        path: 'tabbed/:system',
        component: ControlTabbedViewComponent,
    },
    {
        path: 'tabbed/:system/:tab',
        component: ControlTabbedViewComponent,
    },
    {
        path: 'panel/:system/call',
        component: ControlVideoCallViewComponent,
    },
    { path: '**', redirectTo: 'bootstrap' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
