import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@placeos/components';

import { GlobalSearchComponent } from './global-search.component';
import { NavMenuComponent } from './nav-menu.component';
import { TopbarComponent } from './topbar.component';

const COMPONENTS: Type<any>[] = [
    TopbarComponent,
    NavMenuComponent,
    GlobalSearchComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        RouterModule.forChild([]),
        FormsModule,
        ComponentsModule,
        MatAutocompleteModule,
        MatButtonModule,
    ],
    exports: [...COMPONENTS, ComponentsModule],
})
export class NewSharedComponents {}
