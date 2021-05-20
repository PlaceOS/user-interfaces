import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@placeos/components';

import { NavMenuComponent } from './nav-menu.component';
import { TopbarComponent } from './topbar.component';

const COMPONENTS: Type<any>[] = [TopbarComponent, NavMenuComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, RouterModule.forChild([]), ComponentsModule],
    exports: [...COMPONENTS, ComponentsModule],
})
export class NewSharedComponents {}
