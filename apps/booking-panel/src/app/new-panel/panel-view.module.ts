import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelViewDetailsComponent } from './panel-view-details.component';
import { PanelViewStatusComponent } from './panel-view-status.component';
import { PanelViewComponent } from './panel-view.component';

import { IconComponent, SafePipe, TranslatePipe } from '@placeos/components';

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
