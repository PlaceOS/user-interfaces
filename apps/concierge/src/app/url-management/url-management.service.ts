import { inject, Injectable } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import {
    deleteShortURL,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
    queryShortURLs,
    ShortURL,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, shareReplay, switchMap } from 'rxjs/operators';
import { ShortUrlModalComponent } from './url-modal.component';

export interface UrlListOptions {
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class UrlManagementService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    private _options = new BehaviorSubject<UrlListOptions>({});
    private _change = new BehaviorSubject(0);

    public options = this._options.asObservable();

    public url_list = combineLatest([
        toObservable(this._org.active_building),
        this._options,
        this._change,
    ]).pipe(
        debounceTime(300),
        switchMap(([bld, { search }]) =>
            queryShortURLs({ q: search, limit: 1000 }),
        ),
        shareReplay(1),
    );

    public setFilters(options: Partial<UrlListOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public setSearchString(search: string) {
        this._options.next({ ...this._options.getValue(), search });
    }

    public editURL(url?: ShortURL) {
        const ref = this._dialog.open(ShortUrlModalComponent, {
            data: url,
        });
        ref.afterClosed().subscribe(() => this._change.next(Date.now()));
    }

    public async removeURL(url: ShortURL) {
        const ref = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.URLS_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.URLS_REMOVE_MSG', {
                    name: url.name,
                }),
                icon: { content: 'delete_forever' },
                confirm_text: i18n('COMMON.REMOVE'),
            },
            this._dialog,
        );
        if (ref.reason !== 'done') return ref.close();
        ref.loading(i18n('APP.CONCIERGE.URLS_REMOVE_LOADING'));
        await deleteShortURL(url.id).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.URLS_REMOVE_ERROR', {
                    error: e.message || e,
                }),
            );
            ref.close();
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.URLS_REMOVE_SUCCESS'));
        ref.close();
        this._change.next(Date.now());
    }
}
