import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingManagerComponent } from './booking-manager.component';

const routes: Routes = [
    {
        path: '',
        component: BookingManagerComponent,
    },
];

@NgModule({
    imports: [BookingManagerComponent, RouterModule.forChild(routes)],
})
export class BookingManagerModule {}
