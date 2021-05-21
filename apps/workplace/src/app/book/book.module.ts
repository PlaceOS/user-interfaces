import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SharedContentModule } from '../ui/shared.module';
import { BookComponent } from './book.component';
import { BookCodeFlowComponent } from './code-flow.component';
import { BookDeskFlowComponent } from './desk-flow.component';
import { BookSpaceFlowComponent } from './space-flow.component';
import { SpaceFlowConfirmComponent } from './space-flow/confirm.component';
import { DetailBookSpaceFormComponent } from './space-flow/detailed-form.component';
import { SpaceFlowFindItemComponent } from './space-flow/find-item.component';
import { SpaceFlowFindComponent } from './space-flow/find.component';
import { SpaceFlowFormComponent } from './space-flow/form.component';


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
        SpaceFlowFormComponent,
        SpaceFlowFindComponent,
        SpaceFlowFindItemComponent,
        SpaceFlowConfirmComponent,
        DetailBookSpaceFormComponent,
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
