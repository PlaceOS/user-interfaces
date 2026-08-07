import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'editor/:floorplan_id',
        loadComponent: () =>
            import('./editor/editor.component').then((m) => m.EditorComponent),
    },
    {
        path: 'kiosk/:project_id',
        loadComponent: () =>
            import('./kiosk/kiosk.component').then((m) => m.KioskComponent),
    },
    {
        path: 'kiosk/:project_id/:floorplan_id',
        loadComponent: () =>
            import('./kiosk/kiosk.component').then((m) => m.KioskComponent),
    },
    {
        path: '',
        loadComponent: () =>
            import('./layout.component').then((m) => m.LayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./pages/projects.component').then(
                        (m) => m.ProjectsComponent,
                    ),
            },
            {
                path: 'project/:id',
                loadComponent: () =>
                    import('./pages/project-detail.component').then(
                        (m) => m.ProjectDetailComponent,
                    ),
            },
            {
                path: 'import',
                loadComponent: () =>
                    import('./pages/import.component').then(
                        (m) => m.ImportComponent,
                    ),
            },
            {
                path: 'settings',
                loadComponent: () =>
                    import('./pages/settings.component').then(
                        (m) => m.SettingsComponent,
                    ),
            },
        ],
    },
    { path: '**', redirectTo: '' },
];
