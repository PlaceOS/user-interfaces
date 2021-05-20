import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { BookSpaceFlowComponent } from './space-flow.component';
import { BookDeskFlowComponent } from './desk-flow.component';
import { BookCodeFlowComponent } from './code-flow.component';
import { SharedContentModule } from '../ui/shared.module';

const ROUTES: Route[] = [
    {
        path: '',
        component: BookComponent,
        children: [
            { path: 'code', component: BookCodeFlowComponent },
            { path: 'desks', component: BookDeskFlowComponent },
            { path: 'spaces', redirectTo: 'spaces/form' },
            { path: 'spaces/:step', component: BookSpaceFlowComponent },
            { path: '*', redirectTo: 'spaces/form' },
        ],
    },
    { path: '*', redirectTo: 'spaces/form' },
];

@NgModule({
    declarations: [
        BookComponent,
        BookSpaceFlowComponent,
        BookDeskFlowComponent,
        BookCodeFlowComponent,
    ],
    imports: [
        CommonModule,
        SharedContentModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
    ],
})
export class BookModule {}
