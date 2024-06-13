import { Routes } from '@angular/router';
import { PanelViewComponent } from './panel-view.component';
import { BootstrapComponent } from './bootstrap.component';

export const routes: Routes = [
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'panel/:system_id', component: PanelViewComponent },
    { path: '**', redirectTo: 'bootstrap' },
];
