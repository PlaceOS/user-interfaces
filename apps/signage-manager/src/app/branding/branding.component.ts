import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';

import { AiImageService } from '../ai/ai-image.service';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { BRAND_FONTS, ensureBrandFont } from './brand-fonts';

/** the palette is stored named, so the prompt can say what each colour is for */
const COLOUR_NAMES = ['primary', 'secondary', 'accent'];

@Component({
    selector: 'app-branding',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <main
                class="bg-base-100 mx-auto flex min-h-0 w-full min-w-0 flex-1 flex-col overflow-auto p-6"
            >
            <h1 class="mb-1 text-2xl">
                {{ 'SIGNAGE_MANAGER.BRAND_HEADER' | translate }}
            </h1>
            <p class="text-base-content/60 mb-6 text-sm">
                {{ 'SIGNAGE_MANAGER.BRAND_HINT' | translate }}
            </p>

            <label for="brand-org">{{
                'SIGNAGE_MANAGER.BRAND_ORGANISATION' | translate
            }}</label>
            <mat-form-field appearance="outline" class="w-full">
                <input
                    matInput
                    id="brand-org"
                    [(ngModel)]="organisation"
                    [placeholder]="
                        'SIGNAGE_MANAGER.BRAND_ORGANISATION' | translate
                    "
                />
            </mat-form-field>

            <div class="mt-4 mb-2 flex items-center justify-between">
                <label>{{ 'SIGNAGE_MANAGER.BRAND_COLOURS' | translate }}</label>
                @if (colours().length < 3) {
                    <button mat-stroked-button type="button" (click)="addColour()">
                        {{ 'SIGNAGE_MANAGER.BRAND_ADD_COLOUR' | translate }}
                    </button>
                }
            </div>
            <div class="flex flex-col gap-2">
                @for (colour of colours(); track $index) {
                    <div class="flex items-center gap-3">
                        <input
                            type="color"
                            class="border-base-content/20 h-10 w-14 cursor-pointer rounded border bg-transparent"
                            [value]="colour"
                            (input)="setColour($index, $any($event.target).value)"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.BRAND_COLOURS' | translate
                            "
                        />
                        <mat-form-field
                            appearance="outline"
                            class="w-40"
                            subscriptSizing="dynamic"
                        >
                            <input
                                matInput
                                [ngModel]="colour"
                                (ngModelChange)="setColour($index, $event)"
                                placeholder="#0E6E52"
                            />
                        </mat-form-field>
                        <span class="text-base-content/60 text-xs uppercase">{{
                            colourName($index)
                        }}</span>
                        <button
                            icon
                            default
                            error
                            type="button"
                            [disabled]="colours().length < 2"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.BRAND_REMOVE_COLOUR' | translate
                            "
                            (click)="removeColour($index)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                }
            </div>

            <label class="mt-6" for="brand-font">{{
                'SIGNAGE_MANAGER.BRAND_FONT' | translate
            }}</label>
            <mat-form-field appearance="outline" class="w-full max-w-sm">
                <mat-select id="brand-font" [(ngModel)]="font" (ngModelChange)="previewFont()">
                    @for (option of fonts; track option.family) {
                        <mat-option [value]="option.family">{{
                            option.family
                                ? option.label
                                : (option.label | translate)
                        }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <p
                class="border-base-content/10 bg-base-200 mb-2 rounded border p-4 text-2xl"
                [style.font-family]="font_stack()"
            >
                {{ 'SIGNAGE_MANAGER.BRAND_FONT_SAMPLE' | translate }}
            </p>

            <label class="mt-6">{{
                'SIGNAGE_MANAGER.BRAND_LOGO' | translate
            }}</label>
            <div
                class="border-base-content/10 flex flex-wrap items-center gap-4 rounded border p-4"
            >
                @if (logo_id()) {
                    <img
                        auth
                        [source]="logo_url()"
                        class="bg-base-200 max-h-24 max-w-48 rounded p-2"
                        [alt]="'SIGNAGE_MANAGER.BRAND_LOGO' | translate"
                    />
                } @else {
                    <span class="text-base-content/60 text-sm">{{
                        'SIGNAGE_MANAGER.AI_NO_LOGO_YET' | translate
                    }}</span>
                }
                <button
                    mat-stroked-button
                    type="button"
                    [disabled]="uploading()"
                    (click)="logo_input.click()"
                >
                    {{
                        (uploading()
                            ? 'SIGNAGE_MANAGER.AI_LOGO_UPLOADING'
                            : logo_id()
                              ? 'SIGNAGE_MANAGER.AI_REPLACE_LOGO'
                              : 'SIGNAGE_MANAGER.AI_ADD_LOGO'
                        ) | translate
                    }}
                </button>
                <input
                    #logo_input
                    type="file"
                    class="sr-only"
                    accept="image/png,image/jpeg,image/webp,image/svg+xml"
                    [attr.aria-label]="'SIGNAGE_MANAGER.AI_ADD_LOGO' | translate"
                    (change)="pickLogo($event)"
                />
            </div>

            <div class="mt-8 flex items-center gap-3">
                <button
                    btn
                    matRipple
                    class="w-40"
                    [disabled]="saving()"
                    (click)="save()"
                >
                    {{
                        (saving() ? 'COMMON.SAVING' : 'COMMON.SAVE') | translate
                    }}
                </button>
                @if (!enabled()) {
                    <span class="text-base-content/60 text-sm">{{
                        'SIGNAGE_MANAGER.BRAND_AI_OFF' | translate
                    }}</span>
                }
            </div>
            </main>
            <nav-footer />
        </div>
    `,
    imports: [
        AuthenticatedImageDirective,
        NavFooterComponent,
        NavSidebarComponent,
        FormsModule,
        IconComponent,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        TranslatePipe,
    ],
})
export class BrandingComponent implements OnInit {
    private readonly _ai = inject(AiImageService);

    public readonly fonts = BRAND_FONTS;
    public readonly enabled = this._ai.enabled;

    public readonly organisation = signal('');
    public readonly colours = signal<string[]>(['#0E6E52']);
    public readonly font = signal('');
    public readonly logo_id = signal('');
    public readonly saving = signal(false);
    public readonly uploading = signal(false);

    public readonly logo_url = computed(() => {
        const id = this.logo_id();
        return id ? `/api/engine/v2/uploads/${encodeURIComponent(id)}/url` : '';
    });

    public readonly font_stack = computed(() => {
        const family = this.font();
        return family ? `"${family}", system-ui, sans-serif` : 'system-ui, sans-serif';
    });

    public async ngOnInit() {
        const brand = this._ai.brand_kit();
        if (brand) this._apply(brand);
        // the kit is loaded once at start up; if that has not happened yet, wait
        if (!brand) {
            await this._ai.reloadBrandKit();
            const loaded = this._ai.brand_kit();
            if (loaded) this._apply(loaded);
        }
        this.previewFont();
    }

    public colourName(index: number) {
        return COLOUR_NAMES[index] || `colour ${index + 1}`;
    }

    public addColour() {
        if (this.colours().length >= 3) return;
        this.colours.update((list) => [...list, '#1B2420']);
    }

    public removeColour(index: number) {
        if (this.colours().length < 2) return;
        this.colours.update((list) => list.filter((_, i) => i !== index));
    }

    public setColour(index: number, value: string) {
        this.colours.update((list) =>
            list.map((colour, i) => (i === index ? value : colour)),
        );
    }

    public previewFont() {
        ensureBrandFont(this.font());
    }

    public async pickLogo(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file) return;
        this.uploading.set(true);
        try {
            const id = await this._ai.uploadBrandLogo(file);
            this.logo_id.set(id);
            notifySuccess(i18n('SIGNAGE_MANAGER.AI_LOGO_SAVED'));
        } catch (error) {
            notifyError(this._message(error));
        } finally {
            this.uploading.set(false);
        }
    }

    public async save() {
        this.saving.set(true);
        try {
            const palette: Record<string, string> = {};
            this.colours().forEach((colour, index) => {
                palette[this.colourName(index)] = colour;
            });
            await this._ai.saveBrandKit({
                organisation: this.organisation().trim() || undefined,
                palette,
                font: this.font() ? { family: this.font() } : undefined,
            });
            notifySuccess(i18n('SIGNAGE_MANAGER.BRAND_SAVED'));
        } catch (error) {
            notifyError(this._message(error));
        } finally {
            this.saving.set(false);
        }
    }

    private _apply(brand: any) {
        this.organisation.set(brand.organisation || '');
        // named order first, then anything else, so loading and saving is stable
        const palette = brand.palette || {};
        const ordered = [
            ...COLOUR_NAMES.map((name) => palette[name]).filter(Boolean),
            ...Object.keys(palette)
                .filter((key) => !COLOUR_NAMES.includes(key))
                .map((key) => palette[key]),
        ] as string[];
        if (ordered.length) this.colours.set(ordered.slice(0, 3));
        const font = brand.font;
        this.font.set(typeof font === 'string' ? font : font?.family || '');
        this.logo_id.set(brand.logo_upload_id || '');
    }

    private _message(error: any) {
        return (
            error?.error?.error ||
            error?.error ||
            error?.message ||
            i18n('SIGNAGE_MANAGER.BRAND_SAVE_FAILED')
        );
    }
}
