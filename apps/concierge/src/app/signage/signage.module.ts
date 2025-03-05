import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { ComponentsModule } from '@placeos/components';
import { UIModule } from '../ui/ui.module';
import { SearchOverlayComponent } from './search-overlay.component';
import { SignageDisplayModalComponent } from './signage-display-modal.component';
import { SignageDisplaysComponent } from './signage-displays.component';
import { SignageItemPlaylistsComponent } from './signage-item-playlists.component';
import { SignageMediaListComponent } from './signage-media-list.component';
import { SignageMediaModalComponent } from './signage-media-modal.component';
import { SignageMediaPreviewModalComponent } from './signage-media-preview-modal.component';
import { SignageMediaComponent } from './signage-media.component';
import { SignagePlaylistMediaListComponent } from './signage-playlist-media-list.component';
import { SignagePlaylistModalComponent } from './signage-playlist-modal.component';
import { SignageTopbarComponent } from './signage-topbar.component';
import { SignageZonesComponent } from './signage-zones.component';
import { SignageComponent } from './signage.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: SignageComponent,
        children: [
            { path: '', redirectTo: 'media', pathMatch: 'full' },
            { path: 'media', component: SignageMediaComponent },
            { path: 'displays', component: SignageDisplaysComponent },
            { path: 'zones', component: SignageZonesComponent },
            { path: '*', redirectTo: 'media', pathMatch: 'full' },
        ],
    },
];

export const COMPONENTS: Type<any>[] = [
    SignageComponent,
    SignageTopbarComponent,
    SignageMediaComponent,
    SignageMediaModalComponent,
    SignageMediaPreviewModalComponent,
    SignagePlaylistModalComponent,
    SignageMediaListComponent,
    SignagePlaylistMediaListComponent,

    SignageDisplaysComponent,
    SignageDisplayModalComponent,
    SignageZonesComponent,
    SearchOverlayComponent,
    SignageItemPlaylistsComponent,
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
        DragDropModule,
    ],
})
export class SignageModule {}
