import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { i18n, notifyError } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';
import { PlaceGroup } from '@placeos/ts-client';
import {
    SIGNAGE_FEATURE_IDS,
    SIGNAGE_FEATURES,
    SignageGroupFeatures,
    signageGroupFeatures,
} from '../signage-features';
import { SignageService } from '../signage.service';

type ListKey = keyof SignageGroupFeatures;

/**
 * Edit the signage features and plugins a group allows for itself and its
 * children. Each list shows the effective value. A list the group does not
 * set comes from its parent groups, and a missing list allows everything.
 */
@Component({
    selector: 'signage-group-features-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                'SIGNAGE_MANAGER.GROUP_FEATURES_HEADING'
                    | translate: { name: group.name }
            "
            [loading]="
                saving() ? ('SIGNAGE_MANAGER.GROUP_SAVING' | translate) : ''
            "
            [confirm_disabled]="!inherited_loaded()"
            (confirm)="save()"
        >
            <div class="flex w-[36rem] max-w-full flex-col gap-4">
                <p class="text-base-content/70 text-sm">
                    {{ 'SIGNAGE_MANAGER.GROUP_FEATURES_HINT' | translate }}
                </p>
                @if (!inherited_loaded()) {
                    <div class="flex justify-center p-8">
                        <mat-spinner diameter="32" />
                    </div>
                } @else {
                    <section
                        class="border-base-300 flex flex-col rounded-lg border"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                list_header;
                                context: {
                                    key: 'features',
                                    label: 'SIGNAGE_MANAGER.FEATURE_FEATURES',
                                }
                            "
                        />
                        <ul class="divide-base-300 divide-y">
                            @for (
                                feature of available_features();
                                track feature.id
                            ) {
                                <li class="flex items-center gap-3 px-4 py-3">
                                    <div class="min-w-0 flex-1 text-sm">
                                        {{ feature.label | translate }}
                                    </div>
                                    <mat-slide-toggle
                                        [ngModel]="
                                            isAllowed('features', feature.id)
                                        "
                                        (ngModelChange)="
                                            setAllowed(
                                                'features',
                                                feature.id,
                                                $event
                                            )
                                        "
                                        [aria-label]="feature.label | translate"
                                    ></mat-slide-toggle>
                                </li>
                            } @empty {
                                <li class="text-base-content/60 p-4 text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.FEATURE_NONE_AVAILABLE'
                                            | translate
                                    }}
                                </li>
                            }
                        </ul>
                    </section>
                    <section
                        class="border-base-300 flex flex-col rounded-lg border"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                list_header;
                                context: {
                                    key: 'available_plugins',
                                    label: 'SIGNAGE_MANAGER.FEATURE_PLUGINS',
                                }
                            "
                        />
                        @for (plugin of plugins(); track plugin.id) {
                            <mat-checkbox
                                class="px-2"
                                [ngModel]="
                                    isAllowed('available_plugins', plugin.id)
                                "
                                (ngModelChange)="
                                    setAllowed(
                                        'available_plugins',
                                        plugin.id,
                                        $event
                                    )
                                "
                            >
                                {{ plugin.name }}
                            </mat-checkbox>
                        } @empty {
                            <p class="text-base-content/60 p-4 text-sm">
                                {{
                                    'SIGNAGE_MANAGER.FEATURE_NO_PLUGINS'
                                        | translate
                                }}
                            </p>
                        }
                    </section>
                }
            </div>
        </fullscreen-modal-shell>

        <ng-template #list_header let-key="key" let-label="label">
            <div
                class="border-base-300 flex items-center gap-3 border-b px-4 py-3"
            >
                <div class="min-w-0 flex-1">
                    <div class="text-sm font-medium">
                        {{ label | translate }}
                    </div>
                    <div class="text-base-content/60 text-xs">
                        {{
                            (isSet(key)
                                ? 'SIGNAGE_MANAGER.FEATURE_SET_HERE'
                                : 'SIGNAGE_MANAGER.FEATURE_INHERITED'
                            ) | translate
                        }}
                    </div>
                </div>
                @if (isSet(key)) {
                    <button
                        btn
                        matRipple
                        type="button"
                        class="clear text-xs"
                        (click)="reset(key)"
                    >
                        {{ 'SIGNAGE_MANAGER.FEATURE_RESET' | translate }}
                    </button>
                }
            </div>
        </ng-template>
    `,
    imports: [
        FullscreenModalShellComponent,
        FormsModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSlideToggleModule,
        NgTemplateOutlet,
        TranslatePipe,
    ],
})
export class SignageGroupFeaturesModalComponent {
    private readonly _data = inject<{ group: PlaceGroup }>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<MatDialogRef<SignageGroupFeaturesModalComponent>>(MatDialogRef);
    private readonly _service = inject(SignageService);

    /** Replaced by a fresh read, so a save keeps flags set elsewhere */
    public group = this._data.group;
    public readonly plugins = this._service.all_plugins;
    /** Only features the global settings allow can be given to a group */
    public readonly available_features = computed(() => {
        const global = this._service.global_features() || [];
        return SIGNAGE_FEATURES.filter(({ id }) => global.includes(id));
    });
    public readonly saving = signal(false);
    /** Lists the group sets itself */
    public readonly own = signal<SignageGroupFeatures>({});
    /** Effective lists of the parent group, or none for a root group */
    private readonly _inherited = signal<SignageGroupFeatures | null>(null);
    public readonly inherited_loaded = computed(() => !!this._inherited());
    public readonly effective = computed<SignageGroupFeatures>(() => ({
        ...this._inherited(),
        ...this.own(),
    }));

    private readonly _options: Record<ListKey, () => string[]> = {
        features: () => this.available_features().map(({ id }) => id),
        available_plugins: () => this.plugins().map(({ id }) => id),
    };

    constructor() {
        this._load();
    }

    // Without current values the rows would show wrong defaults, so a failed
    // read closes the editor.
    private async _load() {
        try {
            const group = await this._service.loadGroup(this.group.id);
            const inherited = await this._service.loadGroupFeatures(
                group.parent_id,
            );
            this.group = group;
            this.own.set(signageGroupFeatures(group.features));
            this._inherited.set(inherited);
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.GROUP_FEATURES_LOAD_ERROR'));
            this._dialog_ref.close();
        }
    }

    public isSet(key: ListKey) {
        return this.own()[key] !== undefined;
    }

    /** A missing list allows every option */
    public isAllowed(key: ListKey, id: string) {
        const allowed = this.effective()[key];
        return !allowed || allowed.includes(id);
    }

    /**
     * Start the group's own list from what it allows now, then change one.
     * Features the global settings hide stay as they were, so turning them
     * on globally later still reaches this group.
     */
    public setAllowed(key: ListKey, id: string, allowed: boolean) {
        const options = this._options[key]();
        const hidden = (
            this.effective()[key] ??
            (key === 'features' ? SIGNAGE_FEATURE_IDS : [])
        ).filter((option) => !options.includes(option));
        const shown = options.filter(
            (option) => option !== id && this.isAllowed(key, option),
        );
        const list = [...hidden, ...shown, ...(allowed ? [id] : [])];
        this.own.update((own) => ({ ...own, [key]: list }));
    }

    /** Remove a list the group sets, so it uses the parent value again */
    public reset(key: ListKey) {
        this.own.update((own) => {
            const next = { ...own };
            delete next[key];
            return next;
        });
    }

    public async save() {
        if (this.saving() || !this.inherited_loaded()) return;
        this.saving.set(true);
        this._dialog_ref.disableClose = true;
        try {
            const result = await this._service.saveGroupFeatures(
                this.group,
                this._withKnownPlugins(this.own()),
            );
            this._dialog_ref.disableClose = false;
            if (result) this._dialog_ref.close(result);
            else this.saving.set(false);
        } catch {
            this._dialog_ref.disableClose = false;
            this.saving.set(false);
        }
    }

    /** Drop plugin IDs that no longer exist. Keeps the list as is when the
     * plugin list is empty, as a failed read also gives an empty list. */
    private _withKnownPlugins(
        features: SignageGroupFeatures,
    ): SignageGroupFeatures {
        const ids = new Set(this.plugins().map((plugin) => plugin.id));
        if (!features.available_plugins || !ids.size) return features;
        return {
            ...features,
            available_plugins: features.available_plugins.filter((id) =>
                ids.has(id),
            ),
        };
    }
}
