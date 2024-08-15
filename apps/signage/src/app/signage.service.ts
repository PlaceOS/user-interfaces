import { Injectable } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { showSignage, SignageMedia, SignagePlaylist } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, interval } from 'rxjs';
import { filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { MediaCacheService } from './media-cache.service';

@Injectable({
    providedIn: 'root',
})
export class SignageService extends AsyncHandler {
    private _display = new BehaviorSubject<string>('');
    private _poll = new BehaviorSubject(0);

    public readonly display = combineLatest([this._display, this._poll]).pipe(
        filter(([_]) => !!_),
        switchMap(([id]) => showSignage(id)),
        map((value: any) => {
            value.playlist_media = value.playlist_media?.map(
                (_) => new SignageMedia(_),
            );
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
                    const [_, media_list] = item.playlist_config[id];
                    return media_list.map((media_id) => ({
                        id: media_id,
                        playlist_id: id,
                    }));
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
                        type: media_ref.media_type,
                        start_time: media_ref.start_time || 0,
                        duration:
                            media_ref.play_time ||
                            playlist?.default_duration ||
                            15 * 1000,
                        getURL: async () =>
                            URL.createObjectURL(
                                await this._media_cache.getFile(
                                    media_ref.media_url,
                                ),
                            ),
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
        this.display.subscribe((_) => {
            const available_media = this._media_cache.availableFiles();
            const media = _.playlist_media.map((_) => _.media_url);
            const extra_media = available_media.filter(
                (url) => !media.includes(url),
            );
            this._media_cache.requestFilesToCache(media);
            // Remove unneeded media items
            for (const item of extra_media) {
                this._media_cache.invalidateFile(item);
            }
        });
        this.interval('poll', () => this._poll.next(Date.now()), 60 * 1000);
    }
}
