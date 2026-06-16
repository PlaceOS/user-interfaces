import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';

const ROUTES = [{ path: '', component: LandingComponent, title: 'Home' }];

@NgModule({
    declarations: [],
    imports: [LandingComponent, RouterModule.forChild(ROUTES)],
})
export class AppLandingModule {}
