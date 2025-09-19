import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { UrlListComponent } from './url-list.component';
import { UrlManagerComponent } from './url-manager.component';
import { ShortUrlModalComponent } from './url-modal.component';

const ROUTES: Route[] = [{ path: '', component: UrlManagerComponent }];

@NgModule({
    declarations: [],
    imports: [
        UrlManagerComponent,
        UrlListComponent,
        ShortUrlModalComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class UrlManagerModule {}
