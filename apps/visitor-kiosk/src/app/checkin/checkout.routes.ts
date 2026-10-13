import { Routes } from '@angular/router';

import { CheckinErrorComponent } from './checkin-error.component';
import { CheckinQRScanComponent } from './checkin-qr-scan.component';
import { CheckinComponent } from './checkin.component';
import { CheckoutComponent } from './checkout.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: CheckinComponent,
        children: [
            {
                path: 'scan',
                component: CheckinQRScanComponent,
                data: { flow: 'checkout' },
            },
            { path: 'confirm', component: CheckoutComponent },
            { path: 'error', component: CheckinErrorComponent },
            { path: '**', redirectTo: 'scan' },
        ],
    },
    { path: '**', redirectTo: '' },
];
