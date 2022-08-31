import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedComponentModule } from "../components/shared.module";
import { LandingAvailabilityComponent } from "./landing-availability.component";
import { LandingColleaguesComponent } from "./landing-colleagues.component";
import { LandingFavouritesComponent } from "./landing-favourites.component";
import { LandingUpcomingComponent } from "./landing-upcoming.component";
import { LandingComponent } from "./landing.component";

const COMPONENTS = [
    LandingComponent,
    LandingColleaguesComponent,
    LandingAvailabilityComponent,
    LandingUpcomingComponent,
    LandingFavouritesComponent
]

const ROUTES = [
    { path: '', component: LandingComponent }
]

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        SharedComponentModule,
        FormsModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class AppLandingModule {}
