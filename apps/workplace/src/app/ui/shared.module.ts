import { APipesModule } from '@acaprojects/ngx-pipes';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SharedCateringModule } from '@user-interfaces/catering';
import { ComponentsModule } from '@user-interfaces/components';
import { SharedSpacesModule } from '@user-interfaces/spaces';
import { SharedUsersModule } from '@user-interfaces/users';
import { FormFieldsModule } from '@user-interfaces/form-fields';
import { EventTimelineComponent } from './event-timeline/event-timeline.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { BookingEditComponent } from './forms/booking-edit/booking-edit.component';
import { BookingFormModalComponent } from './forms/booking-form-modal/booking-form-modal-component';
import { BookingFormComponent } from './forms/booking-form/booking-form.component';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import { MapControlsComponent } from './map-controls/map-controls.component';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { TopbarHeaderComponent } from './topbar-header/topbar-header.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { SharedBookingsModule } from '@user-interfaces/bookings';

const COMPONENTS: Type<any>[] = [
    TopbarHeaderComponent,
    OverlayMenuComponent,
    FooterMenuComponent,
    BookingFormComponent,
    BookingFormModalComponent,
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
        FormFieldsModule,
        ...MATERIAL_MODULES,
        ...CDK_MODULES,
    ],
    exports: [
        APipesModule,
        EditorModule,
        ComponentsModule,
        FormFieldsModule,
        SharedSpacesModule,
        SharedCateringModule,
        SharedUsersModule,
        SharedBookingsModule,
        ...COMPONENTS,
        ...MATERIAL_MODULES,
        ...CDK_MODULES,
    ],
})
export class SharedContentModule {}
