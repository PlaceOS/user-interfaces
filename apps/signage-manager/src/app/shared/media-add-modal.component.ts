import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { i18n, notifyError } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';
import { SignageService } from '../signage.service';

export interface MediaAddModalData {
    mode: 'plugin' | 'link';
}

function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

@Component({
    selector: 'media-add-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (mode === 'plugin'
                    ? 'SIGNAGE_MANAGER.ADD_PLUGIN'
                    : 'SIGNAGE_MANAGER.ADD_FROM_LINK'
                ) | translate
            "
            [confirm_text]="'COMMON.ADD' | translate"
            [confirm_disabled]="!can_add()"
            (confirm)="add()"
        >
            @if (mode === 'link') {
                <label for="media-url">{{ 'COMMON.URL' | translate }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        id="media-url"
                        [placeholder]="'COMMON.URL' | translate"
                        [(ngModel)]="link"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.MEDIA_URL_ARIA' | translate
                        "
                    />
                </mat-form-field>
            } @else if (available_plugins().length) {
                <label for="plugin">{{
                    'SIGNAGE_MANAGER.SELECT_PLUGIN' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        id="plugin"
                        [(ngModel)]="selected_plugin"
                        [placeholder]="
                            'SIGNAGE_MANAGER.SELECT_PLUGIN' | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SELECT_PLUGIN_ARIA' | translate
                        "
                    >
                        @for (plugin of available_plugins(); track plugin.id) {
                            <mat-option [value]="plugin">
                                {{ plugin.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            } @else {
                <p class="text-base-content/60 m-0 text-sm">
                    {{ 'SIGNAGE_MANAGER.NO_PLUGINS' | translate }}
                </p>
            }
        </fullscreen-modal-shell>
    `,
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FullscreenModalShellComponent,
        TranslatePipe,
    ],
})
export class MediaAddModalComponent {
    private readonly _service = inject(SignageService);
    private readonly _data = inject<MediaAddModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<MatDialogRef<MediaAddModalComponent>>(MatDialogRef);

    public readonly mode = this._data.mode;
    public readonly link = signal('');
    public readonly selected_plugin = signal<any>(null);
    public readonly available_plugins = this._service.plugins;
    public readonly can_add = computed(() =>
        this.mode === 'link'
            ? !!this.link().trim()
            : !!this.selectedMediaPlugin(),
    );

    private selectedMediaPlugin() {
        const selected_plugin = this.selected_plugin();
        return this.available_plugins().find(
            ({ id }) => id === selected_plugin?.id,
        );
    }

    public async add() {
        if (this.mode === 'link') {
            const link = this.link().trim();
            if (!isValidUrl(link)) {
                notifyError(i18n('SIGNAGE_MANAGER.URL_INVALID'));
                return;
            }
            this._dialog_ref.close();
            await this._service.addMediaFromLink(link);
        } else {
            const plugin = this.selectedMediaPlugin();
            if (!plugin) return;
            this._dialog_ref.close();
            await this._service.addMediaFromPlugin(plugin);
        }
    }
}
