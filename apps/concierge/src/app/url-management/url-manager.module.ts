import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SharedUsersModule } from '@placeos/users';

import { MatChipsModule } from '@angular/material/chips';
import { UrlListComponent } from './url-list.component';
import { UrlManagerComponent } from './url-manager.component';
import { ShortUrlModalComponent } from './url-modal.component';

const ROUTES: Route[] = [{ path: '', component: UrlManagerComponent }];

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
        SharedUsersModule,
        MatChipsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class UrlManagerModule {}
