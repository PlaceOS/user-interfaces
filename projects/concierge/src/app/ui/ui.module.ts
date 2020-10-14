
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { APipesModule } from '@acaprojects/ngx-pipes';

import { IconComponent } from 'src/app/ui/icon/icon.component';
import { SidebarComponent } from './sidebar.component';
import { DateOptionsComponent } from './date-options.component';
import { SearchbarComponent } from './searchbar.component';
import { UserAvatarComponent } from 'src/app/ui/user-avatar/user-avatar.component';
import { ConfirmModalComponent } from 'src/app/ui/confirm-modal/confirm-modal.component';

const COMPONENTS: Type<any>[] = [
    IconComponent,
    SidebarComponent,
    DateOptionsComponent,
    SearchbarComponent,
    UserAvatarComponent,
    ConfirmModalComponent
];

const MAT_MODULES: any[] = [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatRippleModule,
];

const ANGULAR_MODULES: any[] = [
    FormsModule,
    ReactiveFormsModule,
]

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, ...ANGULAR_MODULES, ...MAT_MODULES, APipesModule, RouterModule.forChild([])],
    exports: [...COMPONENTS, ...MAT_MODULES, ...ANGULAR_MODULES, APipesModule]
})
export class UIModule { }
