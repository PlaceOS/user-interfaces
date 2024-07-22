import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { SharedSpacesModule } from '@placeos/spaces';
import { FormFieldsModule } from '@placeos/form-fields';
import { SharedBookingsModule } from '@placeos/bookings';

import { UIModule } from '../ui/ui.module';

import { EmailTemplatesComponent } from './email-templates.component';
import { EmailTemplatesListComponent } from './email-templates-list.component';
import { EmailTemplateManageComponent } from './email-template-manage.component';

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
        SharedSpacesModule,
        SharedBookingsModule,
        FormFieldsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class EmailTemplatesModule {}
