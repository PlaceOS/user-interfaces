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
import { TranslatePipe } from '@placeos/components';

import { AiBrandKit, AiLayerState } from './ai.types';

const DEFAULT_STATE: AiLayerState = {
    headline: '',
    body: '',
    position: 'top',
    align: 'left',
    colour: '#FFFFFF',
    panel: true,
    logo: true,
    logo_position: 'bottom-right',
    logo_scale: 0.14,
};

/**
 * The words and the logo, drawn over the artwork in the browser.
 *
 * The model is asked for a background with a clear area and no lettering,
 * because no image model spells reliably at small sizes and because a logo the
 * model drew is the one part of a poster a trademark claim would land on. Both
 * are composited here from real text and the customer's own logo file, at the
 * artwork's native size.
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
                    [attr.aria-label]="'SIGNAGE_MANAGER.AI_LAYER_PREVIEW' | translate"
                ></canvas>
            </div>
            <div class="flex w-full flex-col gap-2">
                <label for="ai-headline">{{
                    'SIGNAGE_MANAGER.AI_HEADLINE' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        id="ai-headline"
                        [ngModel]="state().headline"
                        (ngModelChange)="patch({ headline: $event })"
                    />
                </mat-form-field>
                <label for="ai-body">{{
                    'SIGNAGE_MANAGER.AI_SUBHEADING' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        id="ai-body"
                        [ngModel]="state().body"
                        (ngModelChange)="patch({ body: $event })"
                    />
                </mat-form-field>
                <div class="flex gap-2">
                    <mat-form-field appearance="outline" class="flex-1">
                        <mat-select
                            [ngModel]="state().position"
                            (ngModelChange)="patch({ position: $event })"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.AI_TEXT_POSITION' | translate
                            "
                        >
                            <mat-option value="top">{{
                                'SIGNAGE_MANAGER.AI_POS_TOP' | translate
                            }}</mat-option>
                            <mat-option value="centre">{{
                                'SIGNAGE_MANAGER.AI_POS_CENTRE' | translate
                            }}</mat-option>
                            <mat-option value="bottom">{{
                                'SIGNAGE_MANAGER.AI_POS_BOTTOM' | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="flex-1">
                        <mat-select
                            [ngModel]="state().align"
                            (ngModelChange)="patch({ align: $event })"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.AI_TEXT_ALIGN' | translate
                            "
                        >
                            <mat-option value="left">{{
                                'SIGNAGE_MANAGER.AI_ALIGN_LEFT' | translate
                            }}</mat-option>
                            <mat-option value="centre">{{
                                'SIGNAGE_MANAGER.AI_ALIGN_CENTRE' | translate
                            }}</mat-option>
                            <mat-option value="right">{{
                                'SIGNAGE_MANAGER.AI_ALIGN_RIGHT' | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-sm">{{
                        'SIGNAGE_MANAGER.AI_TEXT_COLOUR' | translate
                    }}</span>
                    @for (colour of palette(); track colour) {
                        <button
                            type="button"
                            class="border-base-content/20 h-6 w-6 rounded-full border"
                            [style.background]="colour"
                            [class.ring-2]="state().colour === colour"
                            (click)="patch({ colour })"
                            [attr.aria-label]="colour"
                        ></button>
                    }
                </div>
                <mat-slide-toggle
                    [ngModel]="state().panel"
                    (ngModelChange)="patch({ panel: $event })"
                >
                    {{ 'SIGNAGE_MANAGER.AI_TEXT_PANEL' | translate }}
                </mat-slide-toggle>
                @if (logo_url()) {
                    <mat-slide-toggle
                        [ngModel]="state().logo"
                        (ngModelChange)="patch({ logo: $event })"
                    >
                        {{ 'SIGNAGE_MANAGER.AI_SHOW_LOGO' | translate }}
                    </mat-slide-toggle>
                    @if (state().logo) {
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [ngModel]="state().logo_position"
                                (ngModelChange)="patch({ logo_position: $event })"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.AI_LOGO_POSITION' | translate
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
                    }
                }
            </div>
        </div>
    `,
    imports: [
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        TranslatePipe,
    ],
})
export class AiLayerComponent {
    /** object URL for the chosen candidate */
    public readonly image_url = input.required<string>();
    public readonly logo_url = input<string>('');
    public readonly brand = input<AiBrandKit | null>(null);

    public readonly changed = output<AiLayerState>();

    public readonly state = signal<AiLayerState>({ ...DEFAULT_STATE });

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

    public patch(changes: Partial<AiLayerState>) {
        this.state.update((state) => ({ ...state, ...changes }));
        this.changed.emit(this.state());
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
        this._drawText(context, width, height, state);
        if (state.logo) this._drawLogo(context, width, height, state);
    }

    private _drawText(
        context: CanvasRenderingContext2D,
        width: number,
        height: number,
        state: AiLayerState,
    ) {
        const headline = state.headline.trim();
        const body = state.body.trim();
        if (!headline && !body) return;

        const margin = Math.round(width * 0.06);
        const headline_size = Math.round(height * 0.11);
        const body_size = Math.round(height * 0.05);
        const family = this._fontFamily();

        const lines: { text: string; size: number; weight: string }[] = [];
        if (headline) {
            context.font = `700 ${headline_size}px ${family}`;
            for (const line of this._wrap(
                context,
                headline,
                width - margin * 2,
            )) {
                lines.push({ text: line, size: headline_size, weight: '700' });
            }
        }
        if (body) {
            context.font = `400 ${body_size}px ${family}`;
            for (const line of this._wrap(context, body, width - margin * 2)) {
                lines.push({ text: line, size: body_size, weight: '400' });
            }
        }

        const spacing = Math.round(headline_size * 0.28);
        const block =
            lines.reduce((total, line) => total + line.size, 0) +
            spacing * Math.max(0, lines.length - 1);

        let top = margin;
        if (state.position === 'centre') top = (height - block) / 2;
        if (state.position === 'bottom') top = height - block - margin;

        if (state.panel) {
            const pad = Math.round(headline_size * 0.4);
            context.fillStyle = this._panelColour(state.colour);
            context.fillRect(
                0,
                Math.max(0, top - pad),
                width,
                block + pad * 2,
            );
        }

        let x = margin;
        context.textAlign = 'left';
        if (state.align === 'centre') {
            x = width / 2;
            context.textAlign = 'center';
        } else if (state.align === 'right') {
            x = width - margin;
            context.textAlign = 'right';
        }

        context.fillStyle = state.colour;
        context.textBaseline = 'top';
        let y = top;
        for (const line of lines) {
            context.font = `${line.weight} ${line.size}px ${family}`;
            context.fillText(line.text, x, y);
            y += line.size + spacing;
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
