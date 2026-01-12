import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SettingsManagerComponent } from './settings-manager.component';

const ROUTES: Route[] = [{ path: '', component: SettingsManagerComponent }];

@NgModule({
    declarations: [],
    imports: [SettingsManagerComponent, RouterModule.forChild(ROUTES)],
})
export class SettingsManagerModule {}
