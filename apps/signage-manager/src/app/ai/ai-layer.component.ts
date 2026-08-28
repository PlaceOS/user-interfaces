import {
    Component,
    computed,
    effect,
    ElementRef,
    input,
    viewChild,
} from '@angular/core';

import { ensureBrandFont } from '../branding/brand-fonts';
import { AiAnchor, AiBrandKit, AiLayerState, AiTextRole } from './ai.types';

/** share of the artwork's height each role is drawn at */
const ROLE_SIZE: Record<AiTextRole, number> = {
    headline: 0.11,
    subheading: 0.055,
    body: 0.038,
};

export const ANCHORS: AiAnchor[] = [
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

/**
 * The finished poster: the artwork with the words and the logo drawn over it,
 * at the artwork's native size.
 *
 * The model is asked for a background with a clear area and no lettering,
 * because no image model spells reliably at small sizes and because a logo the
 * model drew is the one part of a poster a trademark claim would land on.
 *
 * This renders only. The controls live beside it in the modal's sidebar, so the
 * preview can hold the whole of the main pane.
 */
@Component({
    selector: 'ai-layer',
    template: `
        <canvas
            #canvas
            class="max-h-full max-w-full object-contain"
            [attr.aria-label]="'Preview of the finished image'"
        ></canvas>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 0;
                min-width: 0;
            }
        `,
    ],
})
export class AiLayerComponent {
    public readonly image_url = input.required<string>();
    public readonly logo_url = input<string>('');
    public readonly brand = input<AiBrandKit | null>(null);
    public readonly state = input.required<AiLayerState>();

    private readonly _canvas =
        viewChild<ElementRef<HTMLCanvasElement>>('canvas');
    private _artwork: HTMLImageElement | null = null;
    private _logo: HTMLImageElement | null = null;

    private readonly _family = computed(() => {
        const font = this.brand()?.font;
        return typeof font === 'string' ? font : font?.family || '';
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
            // a face has to be in the document before a canvas can draw with it
            const family = this._family();
            if (family) ensureBrandFont(family).then(() => this._draw());
        });
        effect(() => {
            this.state();
            this._draw();
        });
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
        if (!state) return;
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
        const family = this._family();
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
