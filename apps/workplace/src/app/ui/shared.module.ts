import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EditorModule } from '@tinymce/tinymce-angular';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';

import { APipesModule } from '@acaprojects/ngx-pipes';

import { SharedSpacesModule } from '@user-interfaces/spaces';
import { SharedCateringModule } from '@user-interfaces/catering';
import { SharedUsersModule } from '@user-interfaces/users';

import { TopbarHeaderComponent } from './topbar-header/topbar-header.component';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { EventTimelineComponent } from './event-timeline/event-timeline.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';

import { ComponentsModule, UserFormComponent } from '@user-interfaces/components';
import { BookingFormComponent } from './forms/booking-form/booking-form.component';

import { MapControlsComponent } from './map-controls/map-controls.component';
import { BookingFormModalComponent } from './forms/booking-form-modal/booking-form-modal-component';
import { EventViewComponent } from '../schedule/view-event/event-view/event-view.component';
import { BookingEditComponent } from './forms/booking-edit/booking-edit.component';

import { InfiniteScrollComponent } from './infinite-scroll.component';

const COMPONENTS: Type<any>[] = [
    TopbarHeaderComponent,
    OverlayMenuComponent,
    FooterMenuComponent,
    SearchbarComponent,
    UserFormComponent,
    BookingFormComponent,
    BookingFormModalComponent,
    EventViewComponent,
    BookingEditComponent,
    MapControlsComponent,
    InfiniteScrollComponent,
    EventTimelineComponent,
    VerticalTimelineComponent,
];

const MATERIAL_MODULES: any[] = [
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatChipsModule,
    MatRippleModule,
    MatMenuModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTabsModule,
    MatBadgeModule,
    MatTooltipModule,
    MatRadioModule,
];

const CDK_MODULES: any[] = [ScrollingModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        APipesModule,
        RouterModule,
        EditorModule,
        ComponentsModule,
        ...MATERIAL_MODULES,
        ...CDK_MODULES,
    ],
    exports: [
        APipesModule,
        EditorModule,
        ComponentsModule,
        SharedSpacesModule,
        SharedCateringModule,
        SharedUsersModule,
        ...COMPONENTS,
        ...MATERIAL_MODULES,
        ...CDK_MODULES,
    ],
})
export class SharedContentModule {}
