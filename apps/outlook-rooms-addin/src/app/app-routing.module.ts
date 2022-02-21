import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {
    //     path: 'dashboard',
    //     loadChildren: () =>
    //         import('./dashboard/dashboard.module').then(
    //             (m) => m.DashboardModule
    //         ),
    // },

    // { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },

    {
        path: 'book',
        loadChildren: () =>
            import('./rooms/book.module').then((m) => m.BookModule),
    },
    { path: '**', redirectTo: '/book', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
