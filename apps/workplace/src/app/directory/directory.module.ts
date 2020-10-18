import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { SharedContentModule } from '../ui/shared.module';
import { DirectoryUserListComponent } from './user-list/user-list.component';
import { DirectoryUserListItemComponent } from './user-list/item/item.component';

const ROUTES: Route[] = [{ path: '', component: DirectoryUserListComponent }];

@NgModule({
    declarations: [DirectoryUserListComponent, DirectoryUserListItemComponent],
    imports: [CommonModule, RouterModule.forChild(ROUTES), SharedContentModule]
})
export class DirectoryModule {}
