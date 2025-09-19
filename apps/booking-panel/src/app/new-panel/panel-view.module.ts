import { NgModule } from '@angular/core';

import { PanelViewDetailsComponent } from './panel-view-details.component';
import { PanelViewStatusComponent } from './panel-view-status.component';
import { PanelViewComponent } from './panel-view.component';

const COMPONENTS = [
    PanelViewComponent,
    PanelViewDetailsComponent,
    PanelViewStatusComponent,
];

@NgModule({
    declarations: [],
    imports: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class AppPanelViewModule {}
