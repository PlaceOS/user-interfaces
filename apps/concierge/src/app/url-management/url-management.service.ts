import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { ShortUrlModalComponent } from './url-modal.component';
import {
    notifyError,
    notifySuccess,
    openConfirmModal,
    queryShortURLs,
    deleteShortURL,
    ShortURL,
} from '@placeos/common';

export interface UrlListOptions {
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class UrlManagementService {
    private _options = new BehaviorSubject<UrlListOptions>({});
    private _change = new BehaviorSubject(0);

    public options = this._options.asObservable();

    private _url_list = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        switchMap(([bld]) => queryShortURLs({})),
        shareReplay(1)
    );

    public readonly filtered_urls = combineLatest([
        this._url_list,
        this._options,
    ]).pipe(
        map(([list, options]) =>
            list.filter(
                (i) =>
                    !options.search ||
                    i.name.toLowerCase().includes(options.search.toLowerCase())
            )
        )
    );

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

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
                title: 'Remove Short URL',
                content: `Are you sure you want to remove the Short URL "${url.name}"?`,
                icon: { content: 'delete_forever' },
                confirm_text: 'Remove',
            },
            this._dialog
        );
        if (ref.reason !== 'done') return ref.close();
        ref.loading('Removing Short URL...');
        await deleteShortURL(url.id)
            .toPromise()
            .catch((e) => {
                notifyError(`Error removing Short URL: ${e.message}`);
                ref.close();
                throw e;
            });
        notifySuccess('Successfully removed Short URL.');
        ref.close();
        this._change.next(Date.now());
    }
}
