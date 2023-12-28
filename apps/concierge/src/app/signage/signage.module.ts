import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { SignageComponent } from './signage.component';
import { SignageTopbarComponent } from './signage-topbar.component';
import { SignagePlaylistsComponent } from './signage-playlists.component';
import { SignageDisplaysComponent } from './signage-displays.component';
import { SignageZonesComponent } from './signage-zones.component';
import { SignageTriggersComponent } from './signage-triggers.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SignageMediaComponent } from './signage-media.component';
import { SignageMediaPreviewModalComponent } from './signage-media-preview-modal.component';
import { ComponentsModule } from '@placeos/components';

const ROUTES: Route[] = [
    {
        path: '',
        component: SignageComponent,
        children: [
            { path: '', component: SignagePlaylistsComponent },
            { path: 'playlists', component: SignagePlaylistsComponent },
            { path: 'media', component: SignageMediaComponent },
            { path: 'displays', component: SignageDisplaysComponent },
            { path: 'zones', component: SignageZonesComponent },
            { path: 'triggers', component: SignageTriggersComponent },
            { path: '*', redirectTo: 'playlists', pathMatch: 'full' },
        ],
    },
];

export const COMPONENTS: Type<any>[] = [
    SignageComponent,
    SignageTopbarComponent,
    SignagePlaylistsComponent,
    SignageMediaComponent,
    SignageDisplaysComponent,
    SignageZonesComponent,
    SignageTriggersComponent,
    SignageMediaPreviewModalComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        UIModule,
        ComponentsModule,
        RouterModule.forChild(ROUTES),
        MatTabsModule,
    ],
})
export class SignageModule {}
