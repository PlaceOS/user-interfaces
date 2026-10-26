import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ChangelogModalComponent } from './changelog-modal.component';

@Injectable({ providedIn: 'root' })
export class ChangelogService {
    private readonly _document = inject(DOCUMENT);
    private readonly _dialog = inject(MatDialog);
    private readonly _changelog = signal<string | null>(null);

    public readonly available = computed(() => this._changelog() !== null);

    constructor() {
        void this._load();
    }

    public view() {
        const changelog = this._changelog();
        if (changelog === null) return;
        this._dialog.open(ChangelogModalComponent, { data: { changelog } });
    }

    private async _load() {
        try {
            const url = new URL('CHANGELOG.md', this._document.baseURI);
            const response = await fetch(url);
            if (!response.ok) return;
            this._changelog.set(await response.text());
        } catch {
            // Builds made before application changelogs were added have no file.
        }
    }
}
