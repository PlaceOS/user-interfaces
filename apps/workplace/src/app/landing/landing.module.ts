import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingAvailabilityComponent } from './landing-availability.component';
import { LandingColleaguesComponent } from './landing-colleagues.component';
import { LandingFavouritesComponent } from './landing-favourites.component';
import { LandingQuickBookComponent } from './landing-quick-book.component';
import { LandingQuickLinksComponent } from './landing-quick-links.component';
import { LandingUpcomingComponent } from './landing-upcoming.component';
import { LandingComponent } from './landing.component';

const COMPONENTS = [
    LandingComponent,
    LandingColleaguesComponent,
    LandingAvailabilityComponent,
    LandingUpcomingComponent,
    LandingFavouritesComponent,
    LandingQuickLinksComponent,
    LandingQuickBookComponent,
];

const ROUTES = [{ path: '', component: LandingComponent }];

@NgModule({
    declarations: [],
    imports: [...COMPONENTS, RouterModule.forChild(ROUTES)],
})
export class AppLandingModule {}
