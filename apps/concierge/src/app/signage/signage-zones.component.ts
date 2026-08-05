import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Component, computed, inject, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncHandler, i18n, notifySuccess } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    listZoneTriggers,
    SignagePlaylist,
    updateTrigger,
    updateZone,
} from '@placeos/ts-client';
import { SearchOverlayComponent } from './search-overlay.component';
import { SignageItemPlaylistsComponent } from './signage-item-playlists.component';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-zones',
    template: `
        <div class="relative flex h-full w-full space-x-2 overflow-visible">
            <div
                sidebar
                class="border-base-300 flex h-full w-64 flex-col space-y-2 overflow-auto rounded-xl border p-2"
            >
                <h3
                    class="bg-base-200 rounded-lg p-2 text-center text-xl font-medium"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_ZONES' | translate }}
                </h3>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.SEARCH' | translate"
                        [(ngModel)]="search"
                    />
                </mat-form-field>
                @if (zones().length > 0) {
                    <div class="h-1/2 w-full flex-1 space-y-2 overflow-auto">
                        @for (zone of zones(); track zone.id) {
                            <a
                                matRipple
                                class="border-base-100 even:border-base-200 even:bg-base-200 hover:border-info z-10 flex h-12 min-h-12 w-full items-center truncate rounded-3xl border px-6"
                                [class.bg-secondary!]="selected() === zone.id"
                                [class.text-secondary-content]="
                                    selected() === zone.id
                                "
                                [routerLink]="[]"
                                [queryParams]="{ zone: zone.id }"
                            >
                                {{ zone.display_name || zone.name }}
                            </a>
                            @if (
                                active_zone()?.id === zone.id && !switching()
                            ) {
                                @for (trigger of triggers(); track trigger.id) {
                                    <div
                                        class="relative z-0 flex items-center space-x-2"
                                    >
                                        <div class="w-6">
                                            <div
                                                class="border-base-300 absolute top-1/2 left-6 h-16 w-4 -translate-y-full border-b-2 border-l-2"
                                            ></div>
                                        </div>
                                        <a
                                            matRipple
                                            class="hover:bg-base-200 flex min-h-12 w-full items-center truncate rounded-3xl px-6"
                                            [class.bg-secondary!]="
                                                selected_trigger() ===
                                                trigger?.id
                                            "
                                            [class.text-secondary-content]="
                                                selected_trigger() ===
                                                trigger?.id
                                            "
                                            [routerLink]="[]"
                                            [queryParams]="{
                                                zone: zone.id,
                                                trigger: trigger?.id,
                                            }"
                                        >
                                            {{
                                                trigger?.display_name ||
                                                    trigger?.name ||
                                                    'Trigger'
                                            }}
                                        </a>
                                    </div>
                                }
                            }
                        }
                    </div>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-2 p-8 opacity-30"
                    >
                        <icon class="text-6xl">hide_image</icon>
                        <p class="text-center">
                            {{
                                (search()
                                    ? 'APP.CONCIERGE.SIGNAGE_ZONES_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_ZONES_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                }
            </div>
            <div
                class="border-base-300 bg-base-200 relative flex h-full w-1/2 flex-1 flex-col space-y-2 overflow-auto rounded-lg border p-2 shadow-sm"
            >
                @if (active_zone()) {
                    <signage-item-playlists
                        class="flex flex-1 flex-col"
                        [item]="active_trigger() || active_zone()"
                        [name]="active_trigger() ? 'trigger' : 'zone'"
                        (add)="this.adding.set(true)"
                        (remove)="removePlaylist($event)"
                        (ondrop)="drop($event)"
                    ></signage-item-playlists>
                } @else {
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        <icon class="text-6xl">desktop_windows</icon>
                        <p>
                            {{
                                'APP.CONCIERGE.SIGNAGE_ZONES_SELECT' | translate
                            }}
                        </p>
                    </div>
                }
                @if (adding()) {
                    <search-overlay
                        [item_list]="playlists()"
                        (selected)="addPlaylist($event)"
                        (close)="adding.set(false)"
                    ></search-overlay>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        RouterModule,
        IconComponent,
        SearchOverlayComponent,
        SignageItemPlaylistsComponent,
        FormsModule,
    ],
})
export class SignageZonesComponent extends AsyncHandler {
    private _state = inject(SignageStateService);
    private _route = inject(ActivatedRoute);

    public readonly adding = signal(false);
    public readonly switching = signal(false);
    public readonly search = signal('');
    public readonly loading = this._state.loading;

    public readonly zones = computed(() => {
        const search_value = this.search().toLowerCase();
        const list = this._state.zones();
        return list.filter((_) => _.name.toLowerCase().includes(search_value));
    });

    public readonly selected = signal('');
    public readonly selected_trigger = signal('');

    public readonly active_zone = computed(() => {
        const zones = this.zones();
        const id = this.selected();
        return zones.find((item) => item.id === id);
    });

    private readonly _triggers = resource({
        params: () => this.selected(),
        defaultValue: [] as any[],
        loader: async ({ params: id }) => {
            if (!id) return [];
            const resp = await listZoneTriggers(id);
            setTimeout(() => this.switching.set(false), 100);
            return resp.data as any[];
        },
    });
    public readonly triggers = this._triggers.value;

    public readonly active_trigger = computed(() => {
        const list = this.triggers();
        const id = this.selected_trigger();
        return list.find((item) => item.id === id);
    });

    public readonly playlists = computed(() => {
        const zone = this.active_zone();
        const trigger = this.active_trigger();
        const playlists = this._state.playlists();
        this._state.has_changed(); // Track changes
        return playlists.filter(
            (_) => !(trigger || zone)?.playlists.find((id) => _.id === id),
        );
    });

    constructor() {
        super();
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (!params) return;
                this.switching.set(params.get('zone') !== this.selected());
                this.selected.set(params.get('zone') || '');
                this.selected_trigger.set(params.get('trigger') || '');
            }),
        );
    }

    public async addPlaylist(playlist: Partial<SignagePlaylist>) {
        const zone = this.active_zone();
        const trigger = this.active_trigger();
        const item = trigger || zone;
        const playlists = [...item.playlists, playlist.id];
        const method: any = trigger ? updateTrigger : updateZone;
        await method(item.id, { playlists, version: zone.version }, 'patch');
        notifySuccess(
            i18n(
                trigger
                    ? 'APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_ADDED'
                    : 'APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_ADDED',
            ),
        );
        this._state.changed();
        this.adding.set(false);
    }

    public async removePlaylist(playlist: SignagePlaylist) {
        const zone = this.active_zone();
        const trigger = this.active_trigger();
        const item = trigger || zone;
        const playlists = item.playlists.filter((id) => playlist.id !== id);
        const method: any = trigger ? updateTrigger : updateZone;
        await method(item.id, { playlists, version: zone.version }, 'patch');
        notifySuccess(
            i18n(
                trigger
                    ? 'APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REMOVED'
                    : 'APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_REMOVED',
            ),
        );
        this._state.changed();
        this.adding.set(false);
    }

    public async drop(event: CdkDragDrop<SignagePlaylist[]>) {
        const zone = this.active_zone();
        const trigger = this.active_trigger();
        const item = trigger || zone;
        const old_playlist = item.playlists;
        const playlists = [...old_playlist];
        moveItemInArray(playlists, event.previousIndex, event.currentIndex);
        (item as any).playlists = playlists;
        this._state.changed();
        const method: any = trigger ? updateTrigger : updateZone;
        await method(
            item.id,
            { playlists, version: zone.version },
            'patch',
        ).catch((e) => {
            (item as any).playlists = old_playlist;
            this._state.changed();
            throw e;
        });
        notifySuccess(
            i18n(
                trigger
                    ? 'APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REORDER'
                    : 'APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_REORDER',
            ),
        );
        this._state.changed();
    }
}
