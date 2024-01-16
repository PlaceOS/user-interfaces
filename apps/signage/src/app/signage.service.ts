import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OrganisationService } from '@placeos/organisation';
import { PlaceMetadata, showMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, interval, of } from 'rxjs';
import {
    catchError,
    filter,
    first,
    map,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs/operators';

export interface SignageResource {
    id: string;
    type: 'image' | 'video';
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

@Injectable({
    providedIn: 'root',
})
export class SignageService {
    private _media_store?: IDBObjectStore;
    private _active_display = new BehaviorSubject('');

    private _active_media = new BehaviorSubject<SignageResource | null>(null);
    private _display_list = combineLatest([
        this._org.active_building,
        interval(CHECK_DISPLAY_INTERVAL).pipe(startWith(0)),
    ]).pipe(
        filter(([_]) => !!_?.id),
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
        filter(([_, __]) => !!_?.id && !!__?.length),
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
        filter(([_, __]) => !!_?.id && !!__?.length),
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
            media.filter((_) => playlists.some((__) => __.media.includes(_.id)))
        )
    );

    public readonly full_playlist = combineLatest([
        this.active_display,
        this.playlists,
        this.media,
    ]).pipe(
        map(([display, playlists, media]) => {
            const display_playlists = display.playlists.map((_: string) =>
                playlists.find((__) => __.id === _)
            );
            const playlist_media: string[] = display_playlists
                .map((_: { media: string[] }) => _.media)
                .flat();
            return playlist_media
                .map((_) => media.find((__) => __.id === _))
                .flat();
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

    constructor(private _router: Router, private _org: OrganisationService) {}

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const bld_id = localStorage.getItem('SIGNAGE.building');
        const building = this._org.buildings.find((_) => _.id === bld_id);
        const display = localStorage.getItem('SIGNAGE.display');
        if (!building || !display) {
            this._router.navigate(['/bootstrap']);
            return;
        }
        this._org.building = building;
        this._active_display.next(display);
        const request = indexedDB.open('SIGNAGE', 1);
        request.onupgradeneeded = () => {
            const db = request.result;
            const media_store = db.createObjectStore('media');
            media_store.createIndex('id', 'id', { unique: true });
            media_store.createIndex('url_blob', 'url_blob', { unique: false });

            media_store.transaction.oncomplete = () => {
                this._media_store = db
                    .transaction('media', 'readwrite')
                    .objectStore('media');
            };
        };
    }

    private _getMedia(id: string) {
        return new Promise<{ id: string; url_blob: string }>(
            (resolve, reject) => {
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
        return new Promise<void>((resolve, reject) => {
            const request = this._media_store?.put({ id, url_blob: url });
            if (!request) return reject('No media store');
            request.onerror = (event) => {
                console.error(event);
                reject('Error setting media');
            };
            request.onsuccess = () => resolve();
        });
    }

    private async _loadMedia(media: SignageMedia): Promise<SignageResource> {
        const resource = await this._getMedia(media.id).catch(() => null);
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
        const url = await fetch(media.url).then((_) => _.blob());
        const url_blob = URL.createObjectURL(url);
        await this._setMedia(media.id, url_blob);
        return {
            id: media.id,
            type: media.type,
            url: url_blob,
            start: Date.now(),
            end,
        };
    }
}
