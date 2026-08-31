import {
    Component,
    computed,
    ElementRef,
    inject,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
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
import { errorMessage } from '../ai/ai-image.util';
import { AiBrandKit, AiLogoSlot } from '../ai/ai.types';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { SignageService } from '../signage.service';
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

                @if (!can_edit()) {
                    <p
                        class="border-base-300 bg-base-200 mb-6 flex items-center gap-2 rounded border p-3 text-sm"
                    >
                        <icon class="text-base-content/60">lock</icon>
                        {{ 'SIGNAGE_MANAGER.BRAND_READ_ONLY' | translate }}
                    </p>
                }

                <label for="brand-org">{{
                    'SIGNAGE_MANAGER.BRAND_ORGANISATION' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        id="brand-org"
                        [(ngModel)]="organisation"
                        [disabled]="!can_edit()"
                        [placeholder]="
                            'SIGNAGE_MANAGER.BRAND_ORGANISATION' | translate
                        "
                    />
                </mat-form-field>

                <label class="mt-4 mb-2 block">{{
                    'SIGNAGE_MANAGER.BRAND_COLOURS' | translate
                }}</label>
                <div class="flex flex-col items-start gap-2">
                    @for (colour of colours(); track $index) {
                        <div class="flex items-center gap-3">
                            <input
                                type="color"
                                class="border-base-content/20 h-10 w-14 rounded border bg-transparent disabled:cursor-not-allowed disabled:opacity-60"
                                [class.cursor-pointer]="can_edit()"
                                [disabled]="!can_edit()"
                                [value]="colour"
                                (input)="setColourFromInput($index, $event)"
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
                                    [disabled]="!can_edit()"
                                    [class.text-error]="colour_errors()[$index]"
                                    [attr.aria-invalid]="
                                        colour_errors()[$index] ? 'true' : null
                                    "
                                    placeholder="#0E6E52"
                                />
                            </mat-form-field>
                            <span
                                class="text-base-content/60 text-xs uppercase"
                                >{{ colourName($index) }}</span
                            >
                            @if (can_edit()) {
                                <button
                                    icon
                                    default
                                    error
                                    type="button"
                                    [disabled]="colours().length < 2"
                                    [matTooltip]="
                                        'SIGNAGE_MANAGER.BRAND_REMOVE_COLOUR'
                                            | translate
                                    "
                                    (click)="removeColour($index)"
                                >
                                    <icon>delete</icon>
                                </button>
                            }
                        </div>
                    }
                    @if (can_edit() && colours().length < 3) {
                        <button
                            mat-stroked-button
                            type="button"
                            (click)="addColour()"
                        >
                            {{ 'SIGNAGE_MANAGER.BRAND_ADD_COLOUR' | translate }}
                        </button>
                    }
                </div>

                <label class="mt-6" for="brand-font">{{
                    'SIGNAGE_MANAGER.BRAND_FONT' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full max-w-sm">
                    <mat-select
                        id="brand-font"
                        [(ngModel)]="font"
                        [disabled]="!can_edit()"
                        (ngModelChange)="previewFont()"
                    >
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
                @if (can_edit()) {
                    <p class="text-base-content/60 mb-2 text-sm">
                        {{ 'SIGNAGE_MANAGER.BRAND_LOGO_HINT' | translate }}
                    </p>
                }
                <div class="flex flex-col gap-4 sm:flex-row">
                    @for (slot of slots; track slot.id) {
                        <div
                            class="border-base-content/10 flex min-w-0 flex-1 flex-col gap-3 rounded border p-4"
                        >
                            <div
                                class="flex items-baseline justify-between gap-2"
                            >
                                <span class="text-sm font-medium">{{
                                    slot.label | translate
                                }}</span>
                                @if (derived() === slot.id) {
                                    <span
                                        class="text-base-content/60 shrink-0 text-xs"
                                        >{{
                                            'SIGNAGE_MANAGER.BRAND_LOGO_DERIVED'
                                                | translate
                                        }}</span
                                    >
                                }
                            </div>

                            <!-- shown on the ground it is meant for, which is the
                             only way to tell whether it actually works -->
                            <div
                                class="flex h-28 items-center justify-center rounded p-3"
                                [style.background]="slot.ground"
                            >
                                @if (logoId(slot.id)) {
                                    <img
                                        auth
                                        [source]="logoUrl(slot.id)"
                                        class="max-h-full max-w-full"
                                        [alt]="slot.label | translate"
                                    />
                                } @else {
                                    <span
                                        class="text-xs"
                                        [style.color]="slot.faded"
                                        >{{
                                            'SIGNAGE_MANAGER.AI_NO_LOGO_YET'
                                                | translate
                                        }}</span
                                    >
                                }
                            </div>

                            @if (can_edit()) {
                                <div class="flex flex-wrap gap-2">
                                    <button
                                        mat-stroked-button
                                        type="button"
                                        [disabled]="!!busy()"
                                        (click)="pick(slot.id)"
                                    >
                                        {{
                                            (busy() === slot.id
                                                ? 'SIGNAGE_MANAGER.AI_LOGO_UPLOADING'
                                                : logoId(slot.id)
                                                  ? 'SIGNAGE_MANAGER.AI_REPLACE_LOGO'
                                                  : 'SIGNAGE_MANAGER.AI_ADD_LOGO'
                                            ) | translate
                                        }}
                                    </button>
                                    @if (
                                        !logoId(slot.id) &&
                                        logoId(other(slot.id))
                                    ) {
                                        <button
                                            mat-stroked-button
                                            type="button"
                                            [disabled]="!!busy()"
                                            (click)="derive(slot.id)"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.BRAND_LOGO_MAKE_IT'
                                                    | translate
                                            }}
                                        </button>
                                    }
                                </div>
                            }
                        </div>
                    }
                    <input
                        #logo_input
                        type="file"
                        class="sr-only"
                        accept="image/png,image/jpeg,image/webp,image/svg+xml"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.AI_ADD_LOGO' | translate
                        "
                        (change)="pickLogo($event)"
                    />
                </div>

                <div class="mt-8 flex items-center gap-3">
                    @if (can_edit()) {
                        <button
                            btn
                            matRipple
                            class="w-40"
                            [disabled]="saving()"
                            (click)="save()"
                        >
                            {{
                                (saving() ? 'COMMON.SAVING' : 'COMMON.SAVE')
                                    | translate
                            }}
                        </button>
                    }
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
    private readonly _service = inject(SignageService);

    public readonly fonts = BRAND_FONTS;
    public readonly enabled = this._ai.enabled;

    /**
     * The brand kit is one object for the whole domain, so a change here lands
     * on every screen every group runs. That is an administrator's call, and
     * everyone else gets to see what it is set to.
     */
    public readonly can_edit = this._service.is_sys_admin;

    public readonly organisation = signal('');
    public readonly colours = signal<string[]>(['#0E6E52']);
    public readonly font = signal('');
    public readonly saving = signal(false);

    /** which slot is mid upload or mid conversion, so only one runs at a time */
    public readonly busy = signal<AiLogoSlot | ''>('');
    public readonly logos = signal<Record<AiLogoSlot, string>>({
        on_light: '',
        on_dark: '',
    });
    public readonly derived = signal<AiLogoSlot | ''>('');

    public readonly slots = [
        {
            id: 'on_light' as AiLogoSlot,
            label: 'SIGNAGE_MANAGER.BRAND_LOGO_ON_LIGHT',
            ground: '#FFFFFF',
            faded: 'rgba(0, 0, 0, 0.45)',
        },
        {
            id: 'on_dark' as AiLogoSlot,
            label: 'SIGNAGE_MANAGER.BRAND_LOGO_ON_DARK',
            ground: '#1B2420',
            faded: 'rgba(255, 255, 255, 0.55)',
        },
    ];

    private readonly _logo_input =
        viewChild<ElementRef<HTMLInputElement>>('logo_input');
    private _target: AiLogoSlot = 'on_light';

    public readonly font_stack = computed(() => {
        const family = this.font();
        return family
            ? `"${family}", system-ui, sans-serif`
            : 'system-ui, sans-serif';
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

    /** #rgb or #rrggbb, the only thing the canvas and the prompt can use */
    public static readonly COLOUR = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

    public readonly colour_errors = computed(() =>
        this.colours().map((colour) => !BrandingComponent.COLOUR.test(colour)),
    );

    public setColour(index: number, value: string) {
        this.colours.update((list) =>
            list.map((colour, i) => (i === index ? value : colour)),
        );
    }

    public setColourFromInput(index: number, event: Event) {
        const input = event.target;
        if (input instanceof HTMLInputElement) {
            this.setColour(index, input.value);
        }
    }

    public previewFont() {
        ensureBrandFont(this.font());
    }

    public logoId(slot: AiLogoSlot) {
        return this.logos()[slot];
    }

    public logoUrl(slot: AiLogoSlot) {
        const id = this.logos()[slot];
        return id ? `/api/engine/v2/uploads/${encodeURIComponent(id)}/url` : '';
    }

    public other(slot: AiLogoSlot): AiLogoSlot {
        return slot === 'on_light' ? 'on_dark' : 'on_light';
    }

    public pick(slot: AiLogoSlot) {
        if (!this.can_edit()) return;
        this._target = slot;
        this._logo_input()?.nativeElement.click();
    }

    public async pickLogo(event: Event) {
        if (!this.can_edit()) return;
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file) return;
        const slot = this._target;
        this.busy.set(slot);
        try {
            // filling the empty counterpart is only right when there is nothing
            // there yet; replacing one slot leaves a real file in the other one
            const kit = await this._ai.replaceBrandLogo(
                slot,
                file,
                !this.logoId(this.other(slot)),
            );
            this._applyLogos(kit);
            notifySuccess(i18n('SIGNAGE_MANAGER.AI_LOGO_SAVED'));
        } catch (error) {
            notifyError(
                errorMessage(error, i18n('SIGNAGE_MANAGER.BRAND_SAVE_FAILED')),
            );
        } finally {
            this.busy.set('');
        }
    }

    /** make this slot from the other one */
    public async derive(slot: AiLogoSlot) {
        if (!this.can_edit()) return;
        this.busy.set(slot);
        try {
            const kit = await this._ai.deriveBrandLogo(slot);
            this._applyLogos(kit);
            notifySuccess(i18n('SIGNAGE_MANAGER.BRAND_LOGO_MADE'));
        } catch (error) {
            notifyError(
                errorMessage(error, i18n('SIGNAGE_MANAGER.BRAND_SAVE_FAILED')),
            );
        } finally {
            this.busy.set('');
        }
    }

    public async save() {
        if (!this.can_edit()) return;
        if (this.colour_errors().some(Boolean)) {
            notifyError(i18n('SIGNAGE_MANAGER.BRAND_COLOUR_INVALID'));
            return;
        }
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
            notifyError(
                errorMessage(error, i18n('SIGNAGE_MANAGER.BRAND_SAVE_FAILED')),
            );
        } finally {
            this.saving.set(false);
        }
    }

    private _apply(brand: AiBrandKit) {
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
        this._applyLogos(brand);
    }

    private _applyLogos(brand: AiBrandKit) {
        this.logos.set({
            on_light: brand.logo_upload_id || '',
            on_dark: brand.logo_dark_upload_id || '',
        });
        this.derived.set(brand.logo_derived || '');
    }
}
