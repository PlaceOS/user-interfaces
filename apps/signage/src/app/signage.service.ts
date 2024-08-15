import { Injectable } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { showSignage, SignageMedia } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { MediaCacheService } from './media-cache.service';

@Injectable({
    providedIn: 'root',
})
export class SignageService extends AsyncHandler {
    private _display = new BehaviorSubject<string>('');

    public readonly display = this._display.pipe(
        filter((_) => !!_),
        switchMap((id) => showSignage(id)),
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
            const media = _.playlist_media.map((_) => _.media_url);
            this._media_cache.requestFilesToCache(media);
        });
    }
}
