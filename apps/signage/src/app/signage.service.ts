import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { PlaceMetadata, showMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, interval, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    first,
    map,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';

export interface SignageResource {
    id: string;
    type: 'image' | 'video';
    name?: string;
    duration?: number;
    start?: number;
    end?: number;
    url: string;
}

export interface SignageMedia {
    id: string;
    name: string;
    description: string;
    type: 'image' | 'video';
    duration: number;
    orientation: 'landscape' | 'portrait';
    url: string;
}

const CHECK_DISPLAY_INTERVAL = 5 * 60 * 1000;
const IN_MEMORY_STORE: Record<string, { id: string; url_blob: string }> = {};

@Injectable({
    providedIn: 'root',
})
export class SignageService extends AsyncHandler {
    private _media_store?: IDBObjectStore;
    private _active_display = new BehaviorSubject('');

    private _active_media = new BehaviorSubject<SignageResource | null>(null);
    private _display_list = combineLatest([
        this._org.active_building,
        interval(CHECK_DISPLAY_INTERVAL).pipe(startWith(0)),
    ]).pipe(
        filter(([_]) => !!_?.id),
        debounceTime(200),
        switchMap(([{ id }]) =>
            showMetadata(id, 'signage-displays').pipe(
                catchError(() => of({ details: [] } as any))
            )
        ),
        map(({ details }: PlaceMetadata) =>
            details instanceof Array ? details : []
        ),
        shareReplay(1)
    );

    public readonly active_display = combineLatest([
        this._active_display,
        this._display_list,
    ]).pipe(map(([id, list]) => list.find((_) => _.id === id)));

    private _playlists = combineLatest([
        this._org.active_building,
        this.active_display,
    ]).pipe(
        filter(([_, __]) => !!_?.id && !!__),
        switchMap(([{ id }]) =>
            showMetadata(id, 'signage-playlists').pipe(
                catchError(() => of({ details: [] } as any))
            )
        ),
        map(({ details }: PlaceMetadata) =>
            details instanceof Array ? details : []
        ),
        shareReplay(1)
    );
    private _media_list = combineLatest([
        this._org.active_building,
        this.active_display,
    ]).pipe(
        filter(([_, __]) => !!_?.id && !!__),
        switchMap(([{ id }]) =>
            showMetadata(id, 'signage-media').pipe(
                catchError(() => of({ details: [] } as any))
            )
        ),
        map(({ details }: PlaceMetadata) =>
            details instanceof Array ? details : []
        ),
        shareReplay(1)
    );

    public readonly active_media = this._active_media.asObservable();

    public readonly playlists = combineLatest([
        this.active_display,
        this._playlists,
    ]).pipe(
        filter((_) => !!_),
        map(([display, list]) =>
            list.filter((_) => display.playlists.includes(_.id))
        )
    );

    public readonly media = combineLatest([
        this.playlists,
        this._media_list,
    ]).pipe(
        map(([playlists, media]) =>
            media.filter(
                (_) => _ && playlists.some((__) => __.media.includes(_.id))
            )
        )
    );

    public readonly full_playlist = combineLatest([
        this.active_display,
        this.playlists,
        this.media,
    ]).pipe(
        filter(([_]) => !!_),
        map(([display, playlists, media]) => {
            const display_playlists = display.playlists.map((_: string) =>
                playlists.find((__) => __.id === _)
            );
            const playlist_media: string[] = display_playlists
                .map((_: { media: string[] }) => _.media)
                .flat();
            const media_list = playlist_media.map((_) =>
                media.find((__) => __.id === _)
            );
            return media_list.filter((_) => !!_);
        })
    );

    public readonly check_active_media = combineLatest([
        this.full_playlist,
        interval(1000).pipe(startWith(0)),
    ]).pipe(
        map(async ([media]) => {
            const active_media = this._active_media.getValue();
            if (
                !media?.length ||
                (active_media &&
                    (!active_media.end || active_media.end > Date.now()))
            ) {
                return;
            }
            const index = active_media
                ? media.findIndex((_) => _.id === active_media.id)
                : -1;
            let next_index = (index + 1) % media.length;
            const resource = await this._loadMedia(media[next_index]);
            this._active_media.next(resource);
            next_index = (next_index + 1) % media.length;
            if (next_index !== index) this._loadMedia(media[next_index]);
        })
    );

    constructor(private _router: Router, private _org: OrganisationService) {
        super();
    }

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const bld_id = localStorage.getItem('SIGNAGE.building');
        const building = this._org.buildings.find((_) => _.id === bld_id);
        const display = localStorage.getItem('SIGNAGE.display');
        console.log('Building:', building.name);
        console.log('Display:', display);
        if (!building || !display) {
            this._router.navigate(['/bootstrap']);
            return;
        }
        this._org.building = building;
        this._active_display.next(display);
        this.subscription('full_playlist', this.full_playlist.subscribe());
        const request = indexedDB.open('SIGNAGE', 1);
        console.log('Opening media store');
        request.onupgradeneeded = () => {
            console.log('Creating media store');
            const db = request.result;
            const media_store = db.createObjectStore('media');
            media_store.createIndex('id', 'id', { unique: true });
            media_store.createIndex('url_blob', 'url_blob', { unique: false });

            media_store.transaction.oncomplete = () => {
                console.log('Media store created');
                this._media_store = db
                    .transaction('media', 'readwrite')
                    .objectStore('media');
                console.log('Starting media check');
                this.subscription('check', this.check_active_media.subscribe());
            };
        };
        request.onsuccess = () => {
            console.log('Media store opened');
            this._media_store = request.result
                .transaction('media', 'readwrite')
                .objectStore('media');
            console.log('Starting media check');
            this.subscription('check', this.check_active_media.subscribe());
        };
    }

    private _getMedia(id: string) {
        console.log('Getting media:', id);
        return new Promise<{ id: string; url_blob: string }>(
            (resolve, reject) => {
                if (IN_MEMORY_STORE[id]) return IN_MEMORY_STORE[id];
                const request = this._media_store?.get(id);
                if (!request) return reject('No media store');
                request.onerror = (event) => {
                    console.error(event);
                    reject('Error getting media');
                };
                request.onsuccess = () => resolve(request.result);
            }
        );
    }

    private _setMedia(id: string, url: string) {
        console.log('Setting media:', id);
        return new Promise<void>((resolve, reject) => {
            const request = this._media_store?.put({ id, url_blob: url });
            if (!request) return reject('No media store');
            request.onerror = (event) => {
                console.error(event);
                IN_MEMORY_STORE[id] = { id, url_blob: url };
                reject('Error setting media');
            };
            request.onsuccess = () => resolve();
        });
    }

    private async _loadMedia(media: SignageMedia): Promise<SignageResource> {
        if (!media) throw new Error('No media provided');
        const resource = await this._getMedia(media.url).catch(() => null);
        const end = media.duration
            ? Date.now() + media.duration * 1000
            : undefined;
        if (resource)
            return {
                id: media.id,
                type: media.type,
                url: resource.url_blob,
                start: Date.now(),
                end,
            };
        const blob = await fetch(media.url).then((_) => _.blob());
        const url = URL.createObjectURL(blob);
        await this._setMedia(media.url, url).catch(() => null);
        return {
            id: media.id,
            type: media.type,
            name: media.name,
            duration: media.duration,
            url,
            start: Date.now(),
            end,
        };
    }
}
