import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { SharedBookingsModule } from 'libs/bookings/src/lib/bookings.module';
import { FormFieldsModule } from 'libs/form-fields/src/lib/form-fields.module';

import { UIModule } from '../ui/ui.module';

import { EmailTemplateManageComponent } from './email-template-manage.component';
import { EmailTemplatesListComponent } from './email-templates-list.component';
import { EmailTemplatesComponent } from './email-templates.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: EmailTemplatesComponent,
        children: [{ path: '', component: EmailTemplatesListComponent }],
    },
    { path: 'manage', component: EmailTemplateManageComponent },
    { path: 'manage/:id', component: EmailTemplateManageComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [
        EmailTemplatesComponent,
        EmailTemplatesListComponent,
        EmailTemplateManageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        SharedBookingsModule,
        FormFieldsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class EmailTemplatesModule {}
