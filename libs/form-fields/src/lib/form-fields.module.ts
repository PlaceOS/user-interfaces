import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';

import { ComponentsModule } from 'libs/components/src/lib/components.module';

import { ActionFieldComponent } from './action-field.component';
import { CounterComponent } from './counter.component';
import { DateFieldComponent } from './date-field.component';
import { DurationFieldComponent } from './duration-field.component';
import { TimeFieldComponent } from './time-field.component';
import { UserListFieldComponent } from './user-list-field.component';
import { UserSearchFieldComponent } from './user-search-field.component';
import { ItemListFieldComponent } from './item-list-field.component';
import { UploadListFieldComponent } from './upload-list-field.component';
import { UploadFileFieldComponent } from './upload-file-field.component';
import { AssetListFieldComponent } from './asset-list-field.component';
import { SpaceListFieldComponent } from './space-list-field.component';
import { RichTextInputComponent } from './rich-text-input.component';
import { HostSelectFieldComponent } from './host-select-field.component';
import { ImageListFieldComponent } from './image-list-field.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';

const COMPONENTS: Type<any>[] = [
    ActionFieldComponent,
    CounterComponent,
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
    ItemListFieldComponent,
    UploadListFieldComponent,
    UploadFileFieldComponent,
    AssetListFieldComponent,
    SpaceListFieldComponent,
    RichTextInputComponent,
    HostSelectFieldComponent,
    ImageListFieldComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatRadioModule,
        MatChipsModule,
        ClipboardModule,
        ComponentsModule,
    ],
    exports: [...COMPONENTS],
})
export class FormFieldsModule {}
