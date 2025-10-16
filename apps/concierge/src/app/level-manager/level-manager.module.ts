import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LevelManagerComponent } from './level-manager.component';

const ROUTES: Route[] = [{ path: '', component: LevelManagerComponent }];

@NgModule({
    declarations: [],
    imports: [LevelManagerComponent, RouterModule.forChild(ROUTES)],
})
export class LevelManagerModule {}
