import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BuildingManagerComponent } from './building-manager.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: BuildingManagerComponent,
        title: 'Building Management',
    },
];

@NgModule({
    declarations: [],
    imports: [BuildingManagerComponent, RouterModule.forChild(ROUTES)],
})
export class BuildingManagerModule {}
