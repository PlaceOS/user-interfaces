import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ExploreComponent } from '@placeos/explore';

/**
 * Explore view for the visitor kiosk. The app returns to the welcome page
 * when idle, so the explore view does not run its own reset timer.
 */
@Component({
    selector: 'visitor-kiosk-explore',
    template: `<div app-explore [reset_when_idle]="false"></div>`,
    imports: [ExploreComponent],
})
export class VisitorKioskExploreComponent {}

export const ROUTES: Routes = [
    { path: '', component: VisitorKioskExploreComponent },
    { path: ':search_type', component: VisitorKioskExploreComponent },
];
