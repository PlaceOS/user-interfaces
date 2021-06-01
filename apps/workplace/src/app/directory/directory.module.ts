import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { SharedContentModule } from '../ui/shared.module';
import { DirectoryUserListComponent } from './user-list.component';
import { DirectoryUserListItemComponent } from './user-details.component';
import { FormsModule } from '@angular/forms';

const ROUTES: Route[] = [{ path: '', component: DirectoryUserListComponent }];

@NgModule({
    declarations: [DirectoryUserListComponent, DirectoryUserListItemComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        SharedContentModule,
    ],
})
export class DirectoryModule {}
