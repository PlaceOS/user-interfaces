import { Routes } from '@angular/router';
import { BootstrapComponent } from './bootstrap.component';
import { PanelViewComponent } from './panel-view.component';

export const routes: Routes = [
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'panel/:system_id', component: PanelViewComponent },
    { path: '**', redirectTo: 'bootstrap' },
];
