import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { ChatComponent } from 'libs/components/src/lib/chat/chat.component';
import { GlobalBannerComponent } from 'libs/components/src/lib/global-banner.component';
import { GlobalLoadingComponent } from 'libs/components/src/lib/global-loading.component';
import { SidebarComponent } from './sidebar.component';

const STANDALONE_COMPONENTS = [
    ChatComponent,
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
