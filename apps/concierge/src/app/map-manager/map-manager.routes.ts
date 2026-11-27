import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../ui/unsaved-changes.guard';
import { MapManagerComponent } from './map-manager.component';

export const ROUTES: Routes = [
    { path: '', component: MapManagerComponent, title: 'Map Management' },
    {
        path: ':level_id/3d',
        title: 'Map Management',
        loadComponent: () =>
            import('./map-3d-page.component').then((m) => m.Map3DPageComponent),
        canDeactivate: [unsavedChangesGuard],
    },
    {
        path: ':level_id',
        title: 'Map Management',
        loadComponent: () =>
            import('./map-editor-page.component').then(
                (m) => m.MapEditorPageComponent,
            ),
        canDeactivate: [unsavedChangesGuard],
    },
];
