import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { SignageComponent } from './signage.component';
import { SignageTopbarComponent } from './signage-topbar.component';
import { SignagePlaylistsComponent } from './signage-playlists.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SignageMediaComponent } from './signage-media.component';
import { SignageMediaPreviewModalComponent } from './signage-media-preview-modal.component';
import { ComponentsModule } from '@placeos/components';
import { SignagePlaylistModalComponent } from './signage-playlist-modal.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: SignageComponent,
        children: [
            { path: '', redirectTo: 'media', pathMatch: 'full' },
            { path: 'media', component: SignageMediaComponent },
            { path: 'playlists', component: SignagePlaylistsComponent },
            { path: '*', redirectTo: 'media', pathMatch: 'full' },
        ],
    },
];

export const COMPONENTS: Type<any>[] = [
    SignageComponent,
    SignageTopbarComponent,
    SignageMediaComponent,
    SignageMediaPreviewModalComponent,
    SignagePlaylistsComponent,
    SignagePlaylistModalComponent,
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
