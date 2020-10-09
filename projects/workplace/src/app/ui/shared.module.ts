import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditorComponent, EditorModule } from '@tinymce/tinymce-angular';

import { ScrollingModule } from '@angular/cdk/scrolling';

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
import { AInteractiveMapModule } from '@acaprojects/ngx-interactive-map';
import { ADatePickerModule } from '@acaprojects/ngx-date-picker';

import { UserSearchFieldComponent } from 'src/app/ui/user-search-field/user-search-field.component';
import { TimeFieldComponent } from 'src/app/ui/time-field/time-field.component';
import { DurationFieldComponent } from 'src/app/ui/duration-field/duration-field.component';
import { LoginComponent } from 'src/app/ui/login/login.component';
import { IconComponent } from 'src/app/ui/icon/icon.component';
import { DateFieldComponent } from 'src/app/ui/date-field/date-field.component';
import { ActionFieldComponent } from 'src/app/ui/action-field/action-field.component';
import { UserListFieldComponent } from 'src/app/ui/user-list-field/user-list-field.component';
import { UserAvatarComponent } from 'src/app/ui/user-avatar/user-avatar.component';
import { CounterComponent } from 'src/app/ui/counter/counter.component';
import { TopbarHeaderComponent } from './topbar-header/topbar-header.component';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { EventTimelineComponent } from './event-timeline/event-timeline.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';

import { UserFormComponent } from 'src/app/ui/user-form/user-form.component';
import { BookingFormComponent } from './forms/booking-form/booking-form.component';

import { MapControlsComponent } from './map-controls/map-controls.component';
import { BookingFormModalComponent } from './forms/booking-form-modal/booking-form-modal-component';
import { EventViewComponent } from '../schedule/view-event/event-view/event-view.component';
import { BookingEditComponent } from './forms/booking-edit/booking-edit.component';
import { PopoutMenuComponent } from 'src/app/ui/popout-menu/popout-menu.component';
import { BindingDirective } from 'src/app/ui/binding/binding.directive';

import { InfiniteScrollComponent } from './infinite-scroll.component';

const COMPONENTS: Type<any>[] = [
    LoginComponent,
    IconComponent,
    TopbarHeaderComponent,
    OverlayMenuComponent,
    FooterMenuComponent,
    SearchbarComponent,
    UserAvatarComponent,
    UserFormComponent,
    BookingFormComponent,
    BookingFormModalComponent,
    EventViewComponent,
    BookingEditComponent,
    MapControlsComponent,
    PopoutMenuComponent,
    InfiniteScrollComponent,
    EventTimelineComponent,
    VerticalTimelineComponent,
    BindingDirective,
    CounterComponent
];

const ENTRY_COMPONENT: Type<any>[] = [
    DateFieldComponent,
    ActionFieldComponent,
    TimeFieldComponent,
    DurationFieldComponent,
    UserSearchFieldComponent,
    UserListFieldComponent,
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
    MatRadioModule
];

const CDK_MODULES: any[] = [ScrollingModule];

@NgModule({
    declarations: [...COMPONENTS, ...ENTRY_COMPONENT],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        APipesModule,
        AInteractiveMapModule,
        ADatePickerModule,
        RouterModule,
        EditorModule,
        ...MATERIAL_MODULES,
        ...CDK_MODULES,
    ],
    exports: [
        APipesModule,
        AInteractiveMapModule,
        ADatePickerModule,
        EditorModule,
        ...COMPONENTS,
        ...ENTRY_COMPONENT,
        ...MATERIAL_MODULES,
        ...CDK_MODULES,
    ],
})
export class SharedContentModule {}


