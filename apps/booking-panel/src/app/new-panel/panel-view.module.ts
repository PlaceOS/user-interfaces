import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelViewDetailsComponent } from './panel-view-details.component';
import { PanelViewStatusComponent } from './panel-view-status.component';
import { PanelViewComponent } from './panel-view.component';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SafePipe } from 'libs/components/src/lib/safe.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

const COMPONENTS = [
    PanelViewComponent,
    PanelViewDetailsComponent,
    PanelViewStatusComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, IconComponent, TranslatePipe, SafePipe],
    exports: [...COMPONENTS],
})
export class AppPanelViewModule {}
