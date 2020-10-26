
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';

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
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { APipesModule } from '@acaprojects/ngx-pipes';

import { TopbarHeaderComponent } from './topbar-header.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

import { UserFormComponent } from './forms/user-form/user-form.component';
import { BookingFormComponent } from './forms/booking-form/booking-form.component';

import { MapControlsComponent } from './map-controls/map-controls.component';
import { TakePhotoComponent } from './take-photo/take-photo.component';
import { ComponentsModule } from '@user-interfaces/components';

const COMPONENTS: Type<any>[] = [
    TopbarHeaderComponent,
    FooterMenuComponent,
    SearchbarComponent,

    UserFormComponent,
    BookingFormComponent,

    MapControlsComponent,
    TakePhotoComponent
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
    MatBottomSheetModule,
    MatCheckboxModule,
    MatRadioModule
];

const CDK_MODULES: any[] = [
    ScrollingModule
];

@NgModule({
    declarations: [
        ...COMPONENTS,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        APipesModule,
        ComponentsModule,
        RouterModule,
        EditorModule,
        ...MATERIAL_MODULES,
        ...CDK_MODULES
    ],
    exports: [
        APipesModule,
        ComponentsModule,
        ...COMPONENTS,
        ...MATERIAL_MODULES,
        ...CDK_MODULES
    ]
})
export class SharedContentModule {}
