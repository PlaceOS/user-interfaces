import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';

const COMPONENTS = [LandingComponent];

const ROUTES = [{ path: '', component: LandingComponent }];

@NgModule({
    declarations: [],
    imports: [...COMPONENTS, RouterModule.forChild(ROUTES)],
})
export class AppLandingModule {}
