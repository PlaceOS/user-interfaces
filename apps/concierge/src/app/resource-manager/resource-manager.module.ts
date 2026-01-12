import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ResourceManagerComponent } from './resource-manager.component';

const ROUTES: Route[] = [{ path: '', component: ResourceManagerComponent }];

@NgModule({
    declarations: [],
    imports: [ResourceManagerComponent, RouterModule.forChild(ROUTES)],
})
export class ResourceManagerModule {}
