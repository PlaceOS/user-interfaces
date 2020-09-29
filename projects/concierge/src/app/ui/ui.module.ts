
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatNativeDateModule } from '@angular/material/core';
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

import { IconComponent } from 'src/app/ui/icon/icon.component';
import { SidebarComponent } from './sidebar.component';
import { DateOptionsComponent } from './date-options.component';
import { SearchbarComponent } from './searchbar.component';
import { UserAvatarComponent } from 'src/app/ui/user-avatar/user-avatar.component';
import { APipesModule } from '@acaprojects/ngx-pipes';

const COMPONENTS: Type<any>[] = [
    IconComponent,
    SidebarComponent,
    DateOptionsComponent,
    SearchbarComponent,
    UserAvatarComponent
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
    MatProgressSpinnerModule
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, FormsModule, APipesModule, ...MAT_MODULES, RouterModule.forChild([])],
    exports: [...COMPONENTS, ...MAT_MODULES, APipesModule]
})
export class UIModule { }
