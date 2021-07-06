import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { DirectoryUserListComponent } from './user-list.component';
import { DirectoryUserListItemComponent } from './user-details.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from '../components/shared.module';

const ROUTES: Route[] = [{ path: '', component: DirectoryUserListComponent }];

@NgModule({
    declarations: [DirectoryUserListComponent, DirectoryUserListItemComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedComponentModule,
    ],
})
export class DirectoryModule {}
