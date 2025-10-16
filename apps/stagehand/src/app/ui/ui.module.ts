import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';

import { SidebarComponent } from './sidebar.component';

const STANDALONE_COMPONENTS = [
    GlobalLoadingComponent,
    GlobalBannerComponent,
    SidebarComponent,
];

@NgModule({
    declarations: [],
    imports: [...STANDALONE_COMPONENTS, RouterModule],
    exports: [...STANDALONE_COMPONENTS],
})
export class UiModule {}
