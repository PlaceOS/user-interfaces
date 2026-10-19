import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanDeactivateFn,
    Router,
    Routes,
} from '@angular/router';

import { StoreService } from './data/store.service';
import type { EditorComponent } from './editor/editor.component';

/** Opens the floorplan for a PlaceOS level, which is how Concierge links here. */
async function openLevel(route: ActivatedRouteSnapshot) {
    const router = inject(Router);
    const store = inject(StoreService);
    const level_id = route.paramMap.get('level_id') ?? '';
    try {
        const floorplan = await store.floorplanForLevel(level_id);
        return router.createUrlTree(['/editor', floorplan.id]);
    } catch (error) {
        console.warn(`Failed to open level ${level_id}`, error);
        return router.createUrlTree(['/']);
    }
}

/** Saves pending editor changes before any navigation away, Back included */
const saveBeforeLeaving: CanDeactivateFn<EditorComponent> = (editor) =>
    editor.canLeave();

export const routes: Routes = [
    {
        path: 'level/:level_id',
        canActivate: [openLevel],
        children: [],
    },
    {
        path: 'editor/:floorplan_id',
        loadComponent: () =>
            import('./editor/editor.component').then((m) => m.EditorComponent),
        canDeactivate: [saveBeforeLeaving],
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
