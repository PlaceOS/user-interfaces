import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentsModule } from "@placeos/components";
import { PanelViewDetailsComponent } from "./panel-view-details.component";
import { PanelViewStatusComponent } from "./panel-view-status.component";
import { PanelViewComponent } from "./panel-view.component";

const COMPONENTS = [
    PanelViewComponent,
    PanelViewDetailsComponent,
    PanelViewStatusComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, ComponentsModule],
    exports: [...COMPONENTS]
})
export class AppPanelViewModule {}