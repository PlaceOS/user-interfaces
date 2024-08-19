import { Injectable } from '@angular/core';
import { AsyncHandler, log, shuffleArray } from '@placeos/common';
import {
    showSignage,
    SignageMedia,
    SignagePlaylist,
    responseHeaders,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilKeyChanged,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs/operators';
import { MediaCacheService } from './media-cache.service';

const DISPLAY_KEY = 'PlaceOS.SIGNAGE.display_details';
const EMPTY_URL = 'assets/icons/not-found.svg';

@Injectable({
    providedIn: 'root',
})
export class SignageService extends AsyncHandler {
    private _display = new BehaviorSubject<string>('');
    private _poll = new BehaviorSubject(0);
    private _retry = new BehaviorSubject(0);
    private _last_modified = 0;

    public readonly display = combineLatest([this._display, this._poll]).pipe(
        filter(([_]) => !!_),
        switchMap(([id]) =>
            showSignage(
                id,
                {},
                {
                    headers: {
                        'If-Modified-Since': new Date(
                            this._last_modified,
                        ).toUTCString(),
                    },
                },
            ).pipe(
                catchError((_) => of(null)),
                map((d) => {
                    if (!d) {
                        d = JSON.parse(
                            localStorage.getItem(DISPLAY_KEY) || '{}',
                        );
                        if (d.id !== id) d = {};
                    }
                    localStorage.setItem(DISPLAY_KEY, JSON.stringify(d));
                    const path = `/api/engine/v2/signage/${id}`;
                    const headers = responseHeaders(
                        `${location.origin}${path}`,
                    );
                    this._last_modified =
                        new Date(headers['last-modified']).valueOf() ||
                        Date.now();
                    return [d, this._last_modified];
                }),
            ),
        ),
        distinctUntilKeyChanged(1),
        map(([value]) => {
            log('Signage', 'Display updated.');
            value.playlist_media =
                value.playlist_media?.map((_) => new SignageMedia(_)) || [];
            return value;
        }),
        shareReplay(1),
    );

    public readonly playlist = this.display.pipe(
        map((item) => {
            if (!item) return [];
            // Constuct list of playlists
            let playlists = [...item.playlist_mappings[item.id]];
            for (const zone of item.zones) {
                if (!item.playlist_mappings[zone]) continue;
                playlists = playlists.concat(item.playlist_mappings[zone]);
            }
            // Map playlists to media
            let playlist_media = playlists
                .map((id) => {
                    const [_, media_list] = item.playlist_config[id] as [
                        SignagePlaylist,
                        string[],
                    ];
                    const media = media_list.map((media_id) => ({
                        id: media_id,
                        playlist_id: id,
                    }));
                    return _.random ? shuffleArray(media) : media;
                })
                .flat();
            return playlist_media
                .map(({ id, playlist_id }) => {
                    const media_ref: SignageMedia | null =
                        item.playlist_media.find((item) => item.id === id);
                    if (!media_ref) return null;
                    const playlist: SignagePlaylist | undefined =
                        item.playlist_config[playlist_id][0];
                    return {
                        id,
                        url: media_ref.media_url,
                        name: media_ref.name,
                        animation:
                            media_ref.animation ?? playlist.default_animation,
                        playlist_name: playlist?.name || '',
                        type: media_ref.media_type,
                        start_time: media_ref.start_time || 0,
                        duration:
                            media_ref.play_time ||
                            media_ref.video_length ||
                            playlist?.default_duration ||
                            15 * 1000,
                        getURL: async () =>
                            media_ref
                                ? await this._media_cache
                                      .getFile(media_ref.media_url)
                                      .then((_) => URL.createObjectURL(_))
                                      .catch((_) => EMPTY_URL)
                                : null,
                    };
                })
                .filter((_) => !!_);
        }),
        shareReplay(1),
    );

    public setDisplay(system_id: string) {
        this._display.next(system_id);
    }

    constructor(private _media_cache: MediaCacheService) {
        super();
        combineLatest([
            this.display,
            this._retry.pipe(debounceTime(15 * 1000), startWith(0)),
        ]).subscribe(([_]) => {
            const available_media = this._media_cache.availableFiles();
            const media = _.playlist_media.map((_) => _.media_url);
            const extra_media = available_media.filter(
                (url) => !media.includes(url),
            );
            const has_failures = this._media_cache.requestFilesToCache(media);
            // Remove unneeded media items
            for (const item of extra_media) {
                this._media_cache.invalidateFile(item);
            }
            if (has_failures) this._retry.next(Date.now());
        });
        this.interval('poll', () => this._poll.next(Date.now()), 60 * 1000);
    }
}
