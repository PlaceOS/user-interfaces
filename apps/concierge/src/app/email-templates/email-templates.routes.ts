import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../ui/unsaved-changes.guard';
import { EmailTemplateManageComponent } from './email-template-manage.component';
import { EmailTemplatesListComponent } from './email-templates-list.component';
import { EmailTemplatesComponent } from './email-templates.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: EmailTemplatesComponent,
        children: [
            {
                path: '',
                component: EmailTemplatesListComponent,
                title: 'Email Templates',
            },
        ],
    },
    {
        path: 'manage',
        component: EmailTemplateManageComponent,
        title: 'Manage Email Template',
        canDeactivate: [unsavedChangesGuard],
    },
    {
        path: 'manage/:id',
        component: EmailTemplateManageComponent,
        title: 'Manage Email Template',
        canDeactivate: [unsavedChangesGuard],
    },
    { path: '**', redirectTo: '' },
];
