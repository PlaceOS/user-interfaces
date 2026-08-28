import {
    Component,
    computed,
    effect,
    ElementRef,
    input,
    output,
    signal,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';

import { AiAnchor, AiBrandKit, AiLayerState, AiTextBlock, AiTextRole } from './ai.types';

/** share of the artwork's height each role is drawn at */
const ROLE_SIZE: Record<AiTextRole, number> = {
    headline: 0.11,
    subheading: 0.055,
    body: 0.038,
};

const ANCHORS: AiAnchor[] = [
    'top-left',
    'top-centre',
    'top-right',
    'centre-left',
    'centre',
    'centre-right',
    'bottom-left',
    'bottom-centre',
    'bottom-right',
];

function newBlock(role: AiTextRole, anchor: AiAnchor): AiTextBlock {
    return {
        id: `${Date.now()}-${Math.round(Math.random() * 1e6)}`,
        text: '',
        role,
        anchor,
        colour: '#FFFFFF',
        panel: true,
    };
}

/**
 * The words and the logo, drawn over the artwork in the browser.
 *
 * The model is asked for a background with a clear area and no lettering,
 * because no image model spells reliably at small sizes and because a logo the
 * model drew is the one part of a poster a trademark claim would land on. Both
 * are composited here from real text and the customer's own logo file, at the
 * artwork's native size.
 *
 * Text is a list of blocks rather than a fixed headline and subheading: a
 * poster usually wants a title, a date and a location, and they do not all
 * belong in the same corner. Blocks sharing an anchor stack in order, so
 * placement stays predictable without a drag surface.
 */
@Component({
    selector: 'ai-layer',
    template: `
        <div class="flex flex-col gap-4">
            <div
                class="bg-base-200 flex w-full items-center justify-center overflow-hidden rounded p-2"
            >
                <canvas
                    #canvas
                    class="max-h-[40vh] max-w-full"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.AI_LAYER_PREVIEW' | translate
                    "
                ></canvas>
            </div>

            <div class="flex w-full flex-col gap-3">
                @for (block of state().blocks; track block.id; let i = $index) {
                    <div
                        class="border-base-content/10 flex flex-col gap-2 rounded border p-3"
                    >
                        <div class="flex items-center gap-2">
                            <mat-form-field
                                appearance="outline"
                                class="flex-1"
                                subscriptSizing="dynamic"
                            >
                                <input
                                    matInput
                                    [ngModel]="block.text"
                                    (ngModelChange)="
                                        patchBlock(block.id, { text: $event })
                                    "
                                    [placeholder]="
                                        placeholderFor(block.role) | translate
                                    "
                                    [attr.aria-label]="
                                        placeholderFor(block.role) | translate
                                    "
                                />
                            </mat-form-field>
                            <button
                                icon
                                default
                                error
                                type="button"
                                [disabled]="state().blocks.length < 2"
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.AI_REMOVE_TEXT' | translate
                                "
                                (click)="removeBlock(block.id)"
                            >
                                <icon>delete</icon>
                            </button>
                        </div>

                        <div class="flex flex-wrap items-center gap-2">
                            <mat-form-field
                                appearance="outline"
                                class="w-36"
                                subscriptSizing="dynamic"
                            >
                                <mat-select
                                    [ngModel]="block.role"
                                    (ngModelChange)="
                                        patchBlock(block.id, { role: $event })
                                    "
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.AI_TEXT_SIZE'
                                            | translate
                                    "
                                >
                                    <mat-option value="headline">{{
                                        'SIGNAGE_MANAGER.AI_ROLE_HEADLINE'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="subheading">{{
                                        'SIGNAGE_MANAGER.AI_ROLE_SUBHEADING'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="body">{{
                                        'SIGNAGE_MANAGER.AI_ROLE_BODY'
                                            | translate
                                    }}</mat-option>
                                </mat-select>
                            </mat-form-field>

                            <mat-form-field
                                appearance="outline"
                                class="w-40"
                                subscriptSizing="dynamic"
                            >
                                <mat-select
                                    [ngModel]="block.anchor"
                                    (ngModelChange)="
                                        patchBlock(block.id, { anchor: $event })
                                    "
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.AI_TEXT_POSITION'
                                            | translate
                                    "
                                >
                                    @for (anchor of anchors; track anchor) {
                                        <mat-option [value]="anchor">{{
                                            anchorLabel(anchor) | translate
                                        }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>

                            @for (colour of palette(); track colour) {
                                <button
                                    type="button"
                                    class="border-base-content/20 h-6 w-6 rounded-full border"
                                    [style.background]="colour"
                                    [class.ring-2]="block.colour === colour"
                                    (click)="patchBlock(block.id, { colour })"
                                    [attr.aria-label]="colour"
                                ></button>
                            }

                            <mat-slide-toggle
                                [ngModel]="block.panel"
                                (ngModelChange)="
                                    patchBlock(block.id, { panel: $event })
                                "
                            >
                                {{
                                    'SIGNAGE_MANAGER.AI_TEXT_PANEL' | translate
                                }}
                            </mat-slide-toggle>
                        </div>
                    </div>
                }

                <button
                    mat-stroked-button
                    type="button"
                    class="self-start"
                    (click)="addBlock()"
                >
                    {{ 'SIGNAGE_MANAGER.AI_ADD_TEXT' | translate }}
                </button>

                <div
                    class="border-base-content/10 flex flex-wrap items-center gap-3 rounded border p-3"
                >
                    @if (!logo_url()) {
                        <!-- nothing in PlaceOS stores a customer logo, so this
                             is where one gets added -->
                        <span class="text-sm">{{
                            'SIGNAGE_MANAGER.AI_NO_LOGO_YET' | translate
                        }}</span>
                        <button
                            mat-stroked-button
                            type="button"
                            [disabled]="uploading()"
                            (click)="logo_input.click()"
                        >
                            {{
                                (uploading()
                                    ? 'SIGNAGE_MANAGER.AI_LOGO_UPLOADING'
                                    : 'SIGNAGE_MANAGER.AI_ADD_LOGO'
                                ) | translate
                            }}
                        </button>
                    } @else {
                        <mat-slide-toggle
                            [ngModel]="state().logo"
                            (ngModelChange)="patch({ logo: $event })"
                        >
                            {{ 'SIGNAGE_MANAGER.AI_SHOW_LOGO' | translate }}
                        </mat-slide-toggle>
                        @if (state().logo) {
                            <mat-form-field
                                appearance="outline"
                                class="w-40"
                                subscriptSizing="dynamic"
                            >
                                <mat-select
                                    [ngModel]="state().logo_position"
                                    (ngModelChange)="
                                        patch({ logo_position: $event })
                                    "
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.AI_LOGO_POSITION'
                                            | translate
                                    "
                                >
                                    <mat-option value="bottom-right">{{
                                        'SIGNAGE_MANAGER.AI_POS_BOTTOM_RIGHT'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="bottom-left">{{
                                        'SIGNAGE_MANAGER.AI_POS_BOTTOM_LEFT'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="top-right">{{
                                        'SIGNAGE_MANAGER.AI_POS_TOP_RIGHT'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="top-left">{{
                                        'SIGNAGE_MANAGER.AI_POS_TOP_LEFT'
                                            | translate
                                    }}</mat-option>
                                </mat-select>
                            </mat-form-field>
                            <button
                                mat-stroked-button
                                type="button"
                                [disabled]="uploading()"
                                (click)="logo_input.click()"
                            >
                                {{
                                    (uploading()
                                        ? 'SIGNAGE_MANAGER.AI_LOGO_UPLOADING'
                                        : 'SIGNAGE_MANAGER.AI_REPLACE_LOGO'
                                    ) | translate
                                }}
                            </button>
                        }
                    }
                </div>

                <input
                    #logo_input
                    type="file"
                    class="sr-only"
                    accept="image/png,image/jpeg,image/webp,image/svg+xml"
                    [attr.aria-label]="'SIGNAGE_MANAGER.AI_ADD_LOGO' | translate"
                    (change)="pickLogo($event)"
                />
            </div>
        </div>
    `,
    imports: [
        FormsModule,
        IconComponent,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        TranslatePipe,
    ],
})
export class AiLayerComponent {
    /** object URL for the chosen candidate */
    public readonly image_url = input.required<string>();
    public readonly logo_url = input<string>('');
    public readonly brand = input<AiBrandKit | null>(null);

    public readonly changed = output<AiLayerState>();
    public readonly logoPicked = output<File>();

    /** set by the parent while the upload is in flight */
    public readonly uploading = input(false);

    public readonly anchors = ANCHORS;

    public readonly state = signal<AiLayerState>({
        blocks: [newBlock('headline', 'top-left')],
        logo: true,
        logo_position: 'bottom-right',
        logo_scale: 0.14,
    });

    private readonly _canvas =
        viewChild<ElementRef<HTMLCanvasElement>>('canvas');
    private _artwork: HTMLImageElement | null = null;
    private _logo: HTMLImageElement | null = null;

    public readonly palette = computed(() => {
        const brand = this.brand();
        const colours = Object.values(brand?.palette || {});
        return ['#FFFFFF', '#1B2420', ...colours].filter(
            (colour, index, all) => all.indexOf(colour) === index,
        );
    });

    constructor() {
        effect(() => {
            const url = this.image_url();
            if (url) this._loadArtwork(url);
        });
        effect(() => {
            const url = this.logo_url();
            if (url) this._loadLogo(url);
        });
        effect(() => {
            this.state();
            this._draw();
        });
    }

    public pickLogo(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (file) this.logoPicked.emit(file);
    }

    public patch(changes: Partial<AiLayerState>) {
        this.state.update((state) => ({ ...state, ...changes }));
        this.changed.emit(this.state());
    }

    public patchBlock(id: string, changes: Partial<AiTextBlock>) {
        this.patch({
            blocks: this.state().blocks.map((block) =>
                block.id === id ? { ...block, ...changes } : block,
            ),
        });
    }

    public addBlock() {
        // a second block is usually the detail line under the title, and a
        // third is usually somewhere else on the poster
        const count = this.state().blocks.length;
        const role: AiTextRole = count === 1 ? 'subheading' : 'body';
        const anchor: AiAnchor =
            count < 2 ? this.state().blocks[0]?.anchor || 'top-left' : 'bottom-left';
        this.patch({ blocks: [...this.state().blocks, newBlock(role, anchor)] });
    }

    public removeBlock(id: string) {
        if (this.state().blocks.length < 2) return;
        this.patch({
            blocks: this.state().blocks.filter((block) => block.id !== id),
        });
    }

    public placeholderFor(role: AiTextRole) {
        return role === 'headline'
            ? 'SIGNAGE_MANAGER.AI_HEADLINE'
            : role === 'subheading'
              ? 'SIGNAGE_MANAGER.AI_SUBHEADING'
              : 'SIGNAGE_MANAGER.AI_BODY_TEXT';
    }

    public anchorLabel(anchor: AiAnchor) {
        return `SIGNAGE_MANAGER.AI_ANCHOR_${anchor
            .toUpperCase()
            .replace('-', '_')}`;
    }

    /** the composited image, at the artwork's native size */
    public toBlob(): Promise<Blob | null> {
        const canvas = this._canvas()?.nativeElement;
        if (!canvas) return Promise.resolve(null);
        return new Promise((resolve) =>
            canvas.toBlob((blob) => resolve(blob), 'image/png'),
        );
    }

    private _loadArtwork(url: string) {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = () => {
            this._artwork = image;
            const canvas = this._canvas()?.nativeElement;
            if (canvas) {
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;
            }
            this._draw();
        };
        image.src = url;
    }

    private _loadLogo(url: string) {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = () => {
            this._logo = image;
            this._draw();
        };
        image.src = url;
    }

    private _draw() {
        const canvas = this._canvas()?.nativeElement;
        const artwork = this._artwork;
        if (!canvas || !artwork) return;
        const context = canvas.getContext('2d');
        if (!context) return;

        const { width, height } = canvas;
        context.clearRect(0, 0, width, height);
        context.drawImage(artwork, 0, 0, width, height);

        const state = this.state();
        this._drawBlocks(context, width, height, state);
        if (state.logo) this._drawLogo(context, width, height, state);
    }

    /** blocks sharing an anchor are laid out as one stack, in order */
    private _drawBlocks(
        context: CanvasRenderingContext2D,
        width: number,
        height: number,
        state: AiLayerState,
    ) {
        const margin = Math.round(width * 0.06);
        const family = this._fontFamily();
        const max_width = width - margin * 2;

        for (const anchor of ANCHORS) {
            const blocks = state.blocks.filter(
                (block) => block.anchor === anchor && block.text.trim(),
            );
            if (!blocks.length) continue;

            // measure the whole stack first so it can be placed as one unit
            const lines: {
                text: string;
                size: number;
                weight: string;
                colour: string;
                panel: boolean;
            }[] = [];
            for (const block of blocks) {
                const size = Math.round(height * ROLE_SIZE[block.role]);
                const weight = block.role === 'headline' ? '700' : '400';
                context.font = `${weight} ${size}px ${family}`;
                for (const text of this._wrap(
                    context,
                    block.text.trim(),
                    max_width,
                )) {
                    lines.push({
                        text,
                        size,
                        weight,
                        colour: block.colour,
                        panel: block.panel,
                    });
                }
            }

            const spacing = Math.round(height * 0.02);
            const block_height =
                lines.reduce((total, line) => total + line.size, 0) +
                spacing * Math.max(0, lines.length - 1);

            let top = margin;
            if (anchor.startsWith('centre')) top = (height - block_height) / 2;
            if (anchor.startsWith('bottom'))
                top = height - block_height - margin;

            const horizontal = anchor.endsWith('right')
                ? 'right'
                : anchor.endsWith('left')
                  ? 'left'
                  : 'center';
            let x = margin;
            if (horizontal === 'center') x = width / 2;
            if (horizontal === 'right') x = width - margin;

            if (lines.some((line) => line.panel)) {
                const pad = Math.round(height * 0.022);
                context.fillStyle = this._panelColour(lines[0].colour);
                context.fillRect(
                    0,
                    Math.max(0, top - pad),
                    width,
                    block_height + pad * 2,
                );
            }

            context.textAlign = horizontal as CanvasTextAlign;
            context.textBaseline = 'top';
            let y = top;
            for (const line of lines) {
                context.font = `${line.weight} ${line.size}px ${family}`;
                context.fillStyle = line.colour;
                context.fillText(line.text, x, y);
                y += line.size + spacing;
            }
        }
    }

    private _drawLogo(
        context: CanvasRenderingContext2D,
        width: number,
        height: number,
        state: AiLayerState,
    ) {
        const logo = this._logo;
        if (!logo) return;

        const margin = Math.round(width * 0.04);
        const target_width = Math.round(width * state.logo_scale);
        const scale = target_width / logo.naturalWidth;
        const target_height = Math.round(logo.naturalHeight * scale);

        const left = state.logo_position.endsWith('left')
            ? margin
            : width - target_width - margin;
        const top = state.logo_position.startsWith('top')
            ? margin
            : height - target_height - margin;

        context.drawImage(logo, left, top, target_width, target_height);
    }

    /** a translucent band behind the words, tinted away from the text colour */
    private _panelColour(text_colour: string) {
        return this._isLight(text_colour)
            ? 'rgba(0, 0, 0, 0.45)'
            : 'rgba(255, 255, 255, 0.6)';
    }

    private _isLight(hex: string) {
        const value = hex.replace('#', '');
        if (value.length < 6) return true;
        const r = parseInt(value.slice(0, 2), 16);
        const g = parseInt(value.slice(2, 4), 16);
        const b = parseInt(value.slice(4, 6), 16);
        return (r * 299 + g * 587 + b * 114) / 1000 > 140;
    }

    private _fontFamily() {
        const brand = this.brand();
        const font = brand?.font;
        const family = typeof font === 'string' ? font : font?.family;
        return family
            ? `"${family}", system-ui, sans-serif`
            : 'system-ui, sans-serif';
    }

    private _wrap(
        context: CanvasRenderingContext2D,
        text: string,
        max_width: number,
    ) {
        const words = text.split(/\s+/);
        const lines: string[] = [];
        let current = '';
        for (const word of words) {
            const candidate = current ? `${current} ${word}` : word;
            if (context.measureText(candidate).width > max_width && current) {
                lines.push(current);
                current = word;
            } else {
                current = candidate;
            }
        }
        if (current) lines.push(current);
        return lines;
    }
}
