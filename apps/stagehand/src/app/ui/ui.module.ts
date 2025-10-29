import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { GlobalBannerComponent } from 'libs/components/src/lib/global-banner.component';
import { GlobalLoadingComponent } from 'libs/components/src/lib/global-loading.component';
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
