import { Routes } from '@angular/router';

import { InvoicesListComponent } from './invoices-list.component';
import { PaymentsListComponent } from './payments-list.component';
import { PaymentsComponent } from './payments.component';
import { ProductsListComponent } from './products-list.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: PaymentsComponent,
        children: [
            {
                path: 'list',
                component: PaymentsListComponent,
                title: 'Payments',
            },
            {
                path: 'invoices',
                component: InvoicesListComponent,
                title: 'Invoices',
            },
            {
                path: 'products',
                component: ProductsListComponent,
                title: 'Products & Services',
            },
            { path: '**', redirectTo: 'list' },
        ],
    },
];
