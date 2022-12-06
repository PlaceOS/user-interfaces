import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
    AuthorisedUserGuard,
    UnauthorisedComponent,
} from '@placeos/components';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import(
                '.././../../../libs/survey-creator/src/lib/lib-routing.module'
            ).then((m) => m.LibRoutingModule),
    },
];

@NgModule({})
export class AppRoutingModule {}
