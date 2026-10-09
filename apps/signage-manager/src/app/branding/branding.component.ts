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
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';

import { ImageGenService } from '../image-gen/image-gen.service';
import {
    ImageGenBrandKit,
    ImageGenLogoSlot,
} from '../image-gen/image-gen.types';
import { actionError } from '../image-gen/image-gen.util';
import { SignageContextService } from '../signage-context.service';
import { brandEditingOn, canEditBrandKit } from './brand-access';
import { BRAND_FONTS, ensureBrandFont } from './brand-fonts';

const COLOUR_NAMES = ['primary', 'secondary', 'accent'];

/** how many palette colours the page shows and edits */
const MAX_COLOURS = 3;

/** a palette colour and the key it is stored under */
interface BrandColour {
    key: string;
    value: string;
}

@Component({
    selector: 'app-branding',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-auto p-6">
            <h1 class="mb-1 text-2xl">
                {{ 'SIGNAGE_MANAGER.BRAND_HEADER' | translate }}
            </h1>
            <p class="text-base-content/60 mb-6 text-sm">
                {{ 'SIGNAGE_MANAGER.BRAND_HINT' | translate }}
            </p>

            @if (load_state() === 'loading') {
                <div class="flex justify-center p-8">
                    <mat-spinner diameter="32" />
                </div>
            } @else if (load_state() === 'failed') {
                <div
                    class="border-error/40 bg-error/10 flex items-center gap-3 rounded-lg border p-3 text-sm"
                >
                    <icon class="text-error">error</icon>
                    <span class="flex-1">{{
                        'SIGNAGE_MANAGER.BRAND_LOAD_ERROR' | translate
                    }}</span>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        (click)="load()"
                    >
                        {{ 'COMMON.RETRY' | translate }}
                    </button>
                </div>
            } @else {
                @if (!can_edit()) {
                    <p
                        class="border-base-300 bg-base-200 mb-6 flex items-center gap-2 rounded-lg border p-3 text-sm"
                    >
                        <icon class="text-base-content/60">lock</icon>
                        {{
                            (branding_disabled()
                                ? 'SIGNAGE_MANAGER.BRAND_DISABLED'
                                : 'SIGNAGE_MANAGER.BRAND_READ_ONLY'
                            ) | translate
                        }}
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
                                class="border-base-300 h-10 w-14 rounded border bg-transparent disabled:cursor-not-allowed disabled:opacity-60"
                                [class.cursor-pointer]="can_edit()"
                                [disabled]="!can_edit()"
                                [value]="colour.value"
                                (input)="setColourFromInput($index, $event)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.BRAND_COLOURS' | translate
                                "
                            />
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-40"
                            >
                                <input
                                    matInput
                                    [ngModel]="colour.value"
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
                                >{{ colour.key }}</span
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
                    @if (can_edit() && colours().length < max_colours) {
                        <button
                            btn
                            matRipple
                            type="button"
                            class="inverse"
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
                    class="border-base-300 bg-base-200 mb-2 rounded-lg border p-4 text-2xl"
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
                            class="border-base-300 flex min-w-0 flex-1 flex-col gap-3 rounded-lg border p-4"
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
                                            'SIGNAGE_MANAGER.IMAGE_GEN_NO_LOGO_YET'
                                                | translate
                                        }}</span
                                    >
                                }
                            </div>

                            @if (can_edit()) {
                                <div class="flex flex-wrap gap-2">
                                    <button
                                        btn
                                        matRipple
                                        type="button"
                                        class="inverse"
                                        [disabled]="!!busy()"
                                        (click)="pick(slot.id)"
                                    >
                                        {{
                                            (busy() === slot.id
                                                ? 'SIGNAGE_MANAGER.IMAGE_GEN_LOGO_UPLOADING'
                                                : logoId(slot.id)
                                                  ? 'SIGNAGE_MANAGER.IMAGE_GEN_REPLACE_LOGO'
                                                  : 'SIGNAGE_MANAGER.IMAGE_GEN_ADD_LOGO'
                                            ) | translate
                                        }}
                                    </button>
                                    @if (
                                        !logoId(slot.id) &&
                                        logoId(other(slot.id))
                                    ) {
                                        <button
                                            btn
                                            matRipple
                                            type="button"
                                            class="inverse"
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
                            'SIGNAGE_MANAGER.IMAGE_GEN_ADD_LOGO' | translate
                        "
                        (change)="pickLogo($event)"
                    />
                </div>

                <div class="mt-8 flex items-center gap-3">
                    @if (can_edit()) {
                        <button
                            btn
                            matRipple
                            type="button"
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
                            'SIGNAGE_MANAGER.BRAND_IMAGE_GEN_OFF' | translate
                        }}</span>
                    }
                </div>
            }
        </div>
    `,
    imports: [
        AuthenticatedImageDirective,
        FormsModule,
        IconComponent,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTooltipModule,
        TranslatePipe,
    ],
})
export class BrandingComponent implements OnInit {
    private readonly _image_gen = inject(ImageGenService);
    private readonly _context = inject(SignageContextService);

    public readonly fonts = BRAND_FONTS;
    public readonly enabled = this._image_gen.enabled;

    public readonly branding_disabled = computed(
        () => !brandEditingOn(this._context),
    );
    /** Whether the stored brand kit is read. The form shows only after a
     * read works, so its defaults cannot replace the stored kit. */
    public readonly load_state = signal<'loading' | 'ready' | 'failed'>(
        'loading',
    );
    public readonly can_edit = computed(
        () => canEditBrandKit(this._context) && this.load_state() === 'ready',
    );

    public readonly organisation = signal('');
    public readonly colours = signal<BrandColour[]>([
        { key: 'primary', value: '#0E6E52' },
    ]);
    public readonly max_colours = MAX_COLOURS;
    public readonly font = signal('');
    public readonly saving = signal(false);

    /** which slot is mid upload or mid conversion, so only one runs at a time */
    public readonly busy = signal<ImageGenLogoSlot | ''>('');
    public readonly logos = signal<Record<ImageGenLogoSlot, string>>({
        on_light: '',
        on_dark: '',
    });
    public readonly derived = signal<ImageGenLogoSlot | ''>('');
    /** Palette colours after the ones that the page edits. A save replaces
     * the whole kit, so they are saved back as they are. */
    private _extra_palette: Record<string, string> = {};

    public readonly slots = [
        {
            id: 'on_light' as ImageGenLogoSlot,
            label: 'SIGNAGE_MANAGER.BRAND_LOGO_ON_LIGHT',
            ground: '#FFFFFF',
            faded: 'rgba(0, 0, 0, 0.45)',
        },
        {
            id: 'on_dark' as ImageGenLogoSlot,
            label: 'SIGNAGE_MANAGER.BRAND_LOGO_ON_DARK',
            ground: '#1B2420',
            faded: 'rgba(255, 255, 255, 0.55)',
        },
    ];

    private readonly _logo_input =
        viewChild<ElementRef<HTMLInputElement>>('logo_input');
    private _target: ImageGenLogoSlot = 'on_light';

    public readonly font_stack = computed(() => {
        const family = this.font();
        return family
            ? `"${family}", system-ui, sans-serif`
            : 'system-ui, sans-serif';
    });

    public async ngOnInit() {
        await this.load();
        this.previewFont();
    }

    /** Read the brand kit, unless an earlier read already worked */
    public async load() {
        this.load_state.set('loading');
        if (this._image_gen.brand_kit_read() !== 'ok') {
            await this._image_gen.reloadBrandKit();
        }
        if (this._image_gen.brand_kit_read() !== 'ok') {
            this.load_state.set('failed');
            return;
        }
        const brand = this._image_gen.brand_kit();
        if (brand) this._apply(brand);
        this.load_state.set('ready');
    }

    public addColour() {
        if (this.colours().length >= MAX_COLOURS) return;
        this.colours.update((list) => [
            ...list,
            { key: this._freeKey(), value: '#1B2420' },
        ]);
    }

    /** the first palette key not in use, so a new colour replaces nothing */
    private _freeKey() {
        const used = new Set([
            ...this.colours().map((colour) => colour.key),
            ...Object.keys(this._extra_palette),
        ]);
        // one more numbered name than keys in use, so one is always free
        const names = [
            ...COLOUR_NAMES,
            ...Array.from(
                { length: used.size + 1 },
                (_, index) => `colour ${index + 1}`,
            ),
        ];
        return (
            names.find((name) => !used.has(name)) || `colour ${used.size + 1}`
        );
    }

    public removeColour(index: number) {
        if (this.colours().length < 2) return;
        this.colours.update((list) => list.filter((_, i) => i !== index));
    }

    /** #rgb or #rrggbb, the only thing the canvas and the prompt can use */
    public static readonly COLOUR = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

    public readonly colour_errors = computed(() =>
        this.colours().map(
            (colour) => !BrandingComponent.COLOUR.test(colour.value),
        ),
    );

    public setColour(index: number, value: string) {
        this.colours.update((list) =>
            list.map((colour, i) =>
                i === index ? { ...colour, value } : colour,
            ),
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

    public logoId(slot: ImageGenLogoSlot) {
        return this.logos()[slot];
    }

    public logoUrl(slot: ImageGenLogoSlot) {
        const id = this.logos()[slot];
        return id ? `/api/engine/v2/uploads/${encodeURIComponent(id)}/url` : '';
    }

    public other(slot: ImageGenLogoSlot): ImageGenLogoSlot {
        return slot === 'on_light' ? 'on_dark' : 'on_light';
    }

    public pick(slot: ImageGenLogoSlot) {
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
            const kit = await this._image_gen.replaceBrandLogo(
                slot,
                file,
                !this.logoId(this.other(slot)),
            );
            this._applyLogos(kit);
            notifySuccess(i18n('SIGNAGE_MANAGER.IMAGE_GEN_LOGO_SAVED'));
        } catch (error) {
            notifyError(
                actionError(error, i18n('SIGNAGE_MANAGER.BRAND_SAVE_FAILED')),
            );
        } finally {
            this.busy.set('');
        }
    }

    /** make this slot from the other one */
    public async derive(slot: ImageGenLogoSlot) {
        if (!this.can_edit()) return;
        this.busy.set(slot);
        try {
            const kit = await this._image_gen.deriveBrandLogo(slot);
            this._applyLogos(kit);
            notifySuccess(i18n('SIGNAGE_MANAGER.BRAND_LOGO_MADE'));
        } catch (error) {
            notifyError(
                actionError(error, i18n('SIGNAGE_MANAGER.BRAND_SAVE_FAILED')),
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
            // each colour keeps the key it was read from
            const palette = { ...this._extra_palette };
            for (const colour of this.colours()) {
                palette[colour.key] = colour.value;
            }
            await this._image_gen.saveBrandKit({
                organisation: this.organisation().trim() || undefined,
                palette,
                font: this.font() ? { family: this.font() } : undefined,
            });
            notifySuccess(i18n('SIGNAGE_MANAGER.BRAND_SAVED'));
        } catch (error) {
            notifyError(
                actionError(error, i18n('SIGNAGE_MANAGER.BRAND_SAVE_FAILED')),
            );
        } finally {
            this.saving.set(false);
        }
    }

    private _apply(brand: ImageGenBrandKit) {
        this.organisation.set(brand.organisation || '');
        const palette = brand.palette || {};
        const ordered = [
            ...COLOUR_NAMES.filter((name) => palette[name]),
            ...Object.keys(palette).filter(
                (key) => !COLOUR_NAMES.includes(key),
            ),
        ];
        if (ordered.length) {
            this.colours.set(
                ordered
                    .slice(0, MAX_COLOURS)
                    .map((key) => ({ key, value: palette[key] })),
            );
        }
        this._extra_palette = Object.fromEntries(
            ordered.slice(MAX_COLOURS).map((key) => [key, palette[key]]),
        );
        const font = brand.font;
        this.font.set(typeof font === 'string' ? font : font?.family || '');
        this._applyLogos(brand);
    }

    private _applyLogos(brand: ImageGenBrandKit) {
        this.logos.set({
            on_light: brand.logo_upload_id || '',
            on_dark: brand.logo_dark_upload_id || '',
        });
        this.derived.set(brand.logo_derived || '');
    }
}
