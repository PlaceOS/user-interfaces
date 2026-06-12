import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { UrlManagerComponent } from './url-manager.component';

const ROUTES: Route[] = [
    { path: '', component: UrlManagerComponent, title: 'URL Management' },
];

@NgModule({
    declarations: [],
    imports: [UrlManagerComponent, RouterModule.forChild(ROUTES)],
})
export class UrlManagerModule {}
