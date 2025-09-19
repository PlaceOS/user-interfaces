import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

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
    declarations: [],
    imports: [
        EmailTemplatesComponent,
        EmailTemplatesListComponent,
        EmailTemplateManageComponent,
        RouterModule.forChild(ROUTES),
    ],
})
export class EmailTemplatesModule {}
