import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { UIModule } from '../ui/ui.module';
import { SignageComponent } from './signage.component';
import { SignageTopbarComponent } from './signage-topbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SignageMediaComponent } from './signage-media.component';
import { SignageMediaPreviewModalComponent } from './signage-media-preview-modal.component';
import { ComponentsModule } from '@placeos/components';
import { SignagePlaylistModalComponent } from './signage-playlist-modal.component';
import { SignagePlaylistMediaListComponent } from './signage-playlist-media-list.component';
import { SignageMediaListComponent } from './signage-media-list.component';
import { SignageDisplaysComponent } from './signage-displays.component';
import { SearchOverlayComponent } from './search-overlay.component';
import { SignageZonesComponent } from './signage-zones.component';
import { SignageItemPlaylistsComponent } from './signage-item-playlists.component';

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
    SignageMediaPreviewModalComponent,
    SignagePlaylistModalComponent,
    SignageMediaListComponent,
    SignagePlaylistMediaListComponent,

    SignageDisplaysComponent,
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
