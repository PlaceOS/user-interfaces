import { effect, inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    deleteShortURL,
    getShortUrlQRCode,
    i18n,
    notifySuccess,
    OrganisationService,
    ShortURL,
} from '@placeos/common';
import { queryAllShortURLs } from '../query-all-pages';
import { confirmAction, errorText } from '../ui/modal-actions';
import { ShortUrlModalComponent } from './url-modal.component';

export interface UrlListOptions {
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class UrlManagementService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    private readonly _change = signal(0);

    public readonly options = signal<UrlListOptions>({});
    public readonly url_list = signal<ShortURL[]>([]);
    /** Cache of loaded QR code object URLs, keyed by short URL id */
    public readonly qr_codes = signal<Record<string, string>>({});

    constructor() {
        super();
        effect(() => {
            this._org.active_building();
            const { search } = this.options();
            this._change();
            this.timeout('load', () => this._load(search), 300);
        });
    }

    public setFilters(options: Partial<UrlListOptions>) {
        this.options.set({ ...this.options(), ...options });
    }

    public setSearchString(search: string) {
        this.options.set({ ...this.options(), search });
    }

    public editURL(url?: ShortURL) {
        const ref = this._dialog.open(ShortUrlModalComponent, {
            data: url,
        });
        ref.afterClosed().subscribe(() => this._change.set(Date.now()));
    }

    public async removeURL(url: ShortURL) {
        const removed = await confirmAction(
            this._dialog,
            {
                title: i18n('APP.CONCIERGE.URLS_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.URLS_REMOVE_MSG', {
                    name: url.name,
                }),
                icon: { content: 'delete_forever' },
                confirm_text: i18n('COMMON.REMOVE'),
            },
            {
                loading: i18n('APP.CONCIERGE.URLS_REMOVE_LOADING'),
                action: () => deleteShortURL(url.id),
                error: (e) =>
                    i18n('APP.CONCIERGE.URLS_REMOVE_ERROR', {
                        error: errorText(e),
                    }),
            },
        );
        if (!removed) return;
        notifySuccess(i18n('APP.CONCIERGE.URLS_REMOVE_SUCCESS'));
        this._change.set(Date.now());
    }

    public async loadQrCode(item: ShortURL) {
        if (this.qr_codes()[item.id]) return;
        const code = await getShortUrlQRCode(item.id);
        this.qr_codes.update((codes) => ({
            ...codes,
            [item.id]: code,
        }));
    }

    private async _load(search?: string) {
        const list = await queryAllShortURLs({ q: search, limit: 200 });
        this.url_list.set(list);
        for (const item of list) {
            this.loadQrCode(item);
        }
    }
}
