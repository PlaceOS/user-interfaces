import { Injectable } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { showSignage, SignageMedia } from '@placeos/ts-client';
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
            value.playlist_media = value.playlist_media.map(
                (_) => new SignageMedia(_),
            );
            return value;
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
