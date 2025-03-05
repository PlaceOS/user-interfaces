import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from '../components/shared.module';
import { DirectoryUserListItemComponent } from './user-details.component';
import { DirectoryUserListComponent } from './user-list.component';

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
