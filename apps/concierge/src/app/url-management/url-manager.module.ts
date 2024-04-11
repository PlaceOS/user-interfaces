import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedSpacesModule } from '@placeos/spaces';
import { SharedUsersModule } from '@placeos/users';

import { UrlManagerComponent } from './url-manager.component';
import { MatChipsModule } from '@angular/material/chips';
import { UrlListComponent } from './url-list.component';
import { ShortUrlModalComponent } from './url-modal.component';

const ROUTES: Route[] = [
    { path: '', component: UrlManagerComponent },
    { path: 'new', component: UrlManagerComponent },
];

@NgModule({
    declarations: [
        UrlManagerComponent,
        UrlListComponent,
        ShortUrlModalComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedSpacesModule,
        SharedUsersModule,
        MatChipsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class UrlManagerModule {}
