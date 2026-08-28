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

import { ensureBrandFont } from '../branding/brand-fonts';
import {
    AiBrandKit,
    AiLayerState,
    AiLogoSlot,
    AiTextBlock,
    AiTextRole,
} from './ai.types';

/** share of the artwork's height each role is drawn at */
const ROLE_SIZE: Record<AiTextRole, number> = {
    headline: 0.11,
    subheading: 0.055,
    body: 0.038,
};

/** line to line, as a multiple of the type size: tight for a headline, open
 * enough for a paragraph to be read */
const ROLE_LEADING: Record<AiTextRole, number> = {
    headline: 1.12,
    subheading: 1.3,
    body: 1.45,
};

/** how far an arrow key moves a block, as a share of the artwork */
const NUDGE = 0.005;
const NUDGE_FAST = 0.02;

interface Box {
    left: number;
    top: number;
    width: number;
    height: number;
}

/**
 * The finished poster: the artwork with the words and the logo drawn over it,
 * at the artwork's native size.
 *
 * The model is asked for a background with a clear area and no lettering,
 * because no image model spells reliably at small sizes and because a logo the
 * model drew is the one part of a poster a trademark claim would land on.
 *
 * Words are placed by dragging them. Nine anchors were quicker to build and
 * never put a headline quite where the artwork left room for it, which is the
 * whole point of generating a background with a clear area.
 */
@Component({
    selector: 'ai-layer',
    template: `
        <canvas
            #canvas
            tabindex="0"
            class="max-h-full max-w-full touch-none"
            [class.cursor-grab]="hover_id() && !drag_id()"
            [class.cursor-grabbing]="!!drag_id()"
            [attr.aria-label]="'Preview of the finished image'"
            (pointerdown)="onPointerDown($event)"
            (pointermove)="onPointerMove($event)"
            (pointerup)="onPointerUp($event)"
            (pointercancel)="onPointerUp($event)"
            (pointerleave)="onPointerLeave()"
            (keydown)="onKeyDown($event)"
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
            canvas:focus-visible {
                outline: 2px solid currentColor;
                outline-offset: 2px;
            }
        `,
    ],
})
export class AiLayerComponent {
    public readonly image_url = input.required<string>();
    /** the logo to use on a light background, so dark ink */
    public readonly logo_on_light = input<string>('');
    /** the logo to use on a dark background, so light ink */
    public readonly logo_on_dark = input<string>('');
    public readonly brand = input<AiBrandKit | null>(null);
    public readonly state = input.required<AiLayerState>();

    /** a block was dragged or nudged */
    public readonly changed = output<AiLayerState>();

    public readonly hover_id = signal('');
    public readonly drag_id = signal('');
    public readonly selected_id = signal('');

    private readonly _canvas =
        viewChild<ElementRef<HTMLCanvasElement>>('canvas');
    private _artwork: HTMLImageElement | null = null;
    private readonly _logos: Record<AiLogoSlot, HTMLImageElement | null> = {
        on_light: null,
        on_dark: null,
    };

    /** where each block ended up last draw, in artwork pixels, for hit testing */
    private _boxes = new Map<string, Box>();
    /** pointer offset inside the block when the drag started */
    private _grab = { x: 0, y: 0 };

    /** the organisation's face, used by any block that has not picked its own */
    private readonly _brand_family = computed(() => {
        const font = this.brand()?.font;
        return typeof font === 'string' ? font : font?.family || '';
    });

    constructor() {
        effect(() => {
            const url = this.image_url();
            if (url) this._loadArtwork(url);
        });
        effect(() => {
            const url = this.logo_on_light();
            if (url) this._loadLogo('on_light', url);
        });
        effect(() => {
            const url = this.logo_on_dark();
            if (url) this._loadLogo('on_dark', url);
        });
        effect(() => {
            // a face has to be in the document before a canvas can draw with it
            const families = new Set(
                [
                    this._brand_family(),
                    ...this.state().blocks.map((block) => block.font),
                ].filter(Boolean),
            );
            for (const family of families) {
                ensureBrandFont(family).then(() => this._draw());
            }
        });
        effect(() => {
            this.state();
            this.hover_id();
            this.drag_id();
            this._draw();
        });
    }

    /** the composited image, at the artwork's native size */
    public toBlob(): Promise<Blob | null> {
        const canvas = this._canvas()?.nativeElement;
        if (!canvas) return Promise.resolve(null);
        // the outline is an editing aid, not part of the poster
        const hovered = this.hover_id();
        this.hover_id.set('');
        this._draw();
        return new Promise((resolve) =>
            canvas.toBlob((blob) => {
                this.hover_id.set(hovered);
                resolve(blob);
            }, 'image/png'),
        );
    }

    public onPointerDown(event: PointerEvent) {
        const point = this._toArtwork(event);
        if (!point) return;
        const block = this._blockAt(point.x, point.y);
        this.selected_id.set(block?.id || '');
        if (!block) return;
        const box = this._boxes.get(block.id);
        if (!box) return;
        this._grab = { x: point.x - box.left, y: point.y - box.top };
        this.drag_id.set(block.id);
        this._canvas()?.nativeElement.setPointerCapture(event.pointerId);
        event.preventDefault();
    }

    public onPointerMove(event: PointerEvent) {
        const point = this._toArtwork(event);
        if (!point) return;

        const dragging = this.drag_id();
        if (!dragging) {
            this.hover_id.set(this._blockAt(point.x, point.y)?.id || '');
            return;
        }

        const canvas = this._canvas()?.nativeElement;
        const box = this._boxes.get(dragging);
        if (!canvas || !box) return;
        this._move(
            dragging,
            (point.x - this._grab.x) / canvas.width,
            (point.y - this._grab.y) / canvas.height,
            box,
        );
    }

    public onPointerUp(event: PointerEvent) {
        if (!this.drag_id()) return;
        this._canvas()?.nativeElement.releasePointerCapture(event.pointerId);
        this.drag_id.set('');
    }

    public onPointerLeave() {
        if (!this.drag_id()) this.hover_id.set('');
    }

    /** the same moves without a mouse, for whoever cannot use one */
    public onKeyDown(event: KeyboardEvent) {
        const id = this.selected_id() || this.state().blocks[0]?.id;
        const box = id ? this._boxes.get(id) : null;
        const block = this.state().blocks.find((item) => item.id === id);
        if (!box || !block) return;

        const step = event.shiftKey ? NUDGE_FAST : NUDGE;
        let x = block.x;
        let y = block.y;
        if (event.key === 'ArrowLeft') x -= step;
        else if (event.key === 'ArrowRight') x += step;
        else if (event.key === 'ArrowUp') y -= step;
        else if (event.key === 'ArrowDown') y += step;
        else return;

        event.preventDefault();
        this.selected_id.set(id);
        this._move(id, x, y, box);
    }

    /** keep the whole block on the artwork, then write the new position out */
    private _move(id: string, x: number, y: number, box: Box) {
        const canvas = this._canvas()?.nativeElement;
        if (!canvas) return;
        const max_x = Math.max(0, 1 - box.width / canvas.width);
        const max_y = Math.max(0, 1 - box.height / canvas.height);
        const next = {
            x: Math.min(Math.max(x, 0), max_x),
            y: Math.min(Math.max(y, 0), max_y),
        };
        const state = this.state();
        this.changed.emit({
            ...state,
            blocks: state.blocks.map((block) =>
                block.id === id ? { ...block, ...next } : block,
            ),
        });
    }

    private _toArtwork(event: PointerEvent) {
        const canvas = this._canvas()?.nativeElement;
        if (!canvas) return null;
        const rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return null;
        return {
            x: ((event.clientX - rect.left) / rect.width) * canvas.width,
            y: ((event.clientY - rect.top) / rect.height) * canvas.height,
        };
    }

    /** last drawn wins, so the block on top is the one you grab */
    private _blockAt(x: number, y: number): AiTextBlock | null {
        const blocks = this.state().blocks;
        for (let index = blocks.length - 1; index >= 0; index--) {
            const box = this._boxes.get(blocks[index].id);
            if (!box) continue;
            if (
                x >= box.left &&
                x <= box.left + box.width &&
                y >= box.top &&
                y <= box.top + box.height
            ) {
                return blocks[index];
            }
        }
        return null;
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

    private _loadLogo(slot: AiLogoSlot, url: string) {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = () => {
            this._logos[slot] = image;
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
        if (state.logo) this._drawLogo(context, width, height, state);
        this._drawBlocks(context, width, height, state);
    }

    private _drawBlocks(
        context: CanvasRenderingContext2D,
        width: number,
        height: number,
        state: AiLayerState,
    ) {
        this._boxes.clear();
        const wrap_at = width * 0.88;

        for (const block of state.blocks) {
            const text = block.text.trim();
            if (!text) continue;

            const size = Math.round(height * ROLE_SIZE[block.role]);
            const weight = block.role === 'headline' ? '700' : '400';
            context.font = `${weight} ${size}px ${this._fontFamily(block.font)}`;
            const lines = this._wrap(context, text, wrap_at);
            const leading = Math.round(size * ROLE_LEADING[block.role]);
            const line_height = Math.round(size * 1.2);
            const box: Box = {
                left: block.x * width,
                top: block.y * height,
                width: Math.max(
                    ...lines.map((line) => context.measureText(line).width),
                ),
                height: line_height + leading * (lines.length - 1),
            };
            this._boxes.set(block.id, box);

            if (block.panel) {
                const pad = Math.round(size * 0.35);
                context.fillStyle = this._panelColour(block.colour);
                context.fillRect(
                    box.left - pad,
                    box.top - pad * 0.6,
                    box.width + pad * 2,
                    box.height + pad * 1.2,
                );
            }

            context.textAlign = (
                block.align === 'centre' ? 'center' : block.align
            ) as CanvasTextAlign;
            context.textBaseline = 'top';
            const x =
                block.align === 'left'
                    ? box.left
                    : block.align === 'right'
                      ? box.left + box.width
                      : box.left + box.width / 2;
            context.fillStyle = block.colour;
            const offset = (line_height - size) / 2;
            lines.forEach((line, index) => {
                context.fillText(line, x, box.top + offset + leading * index);
            });

            if (this.hover_id() === block.id || this.drag_id() === block.id) {
                this._outline(context, box, Math.round(size * 0.35));
            }
        }
    }

    /** shows what you are about to pick up; never drawn into the saved file */
    private _outline(context: CanvasRenderingContext2D, box: Box, pad: number) {
        context.save();
        context.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        context.lineWidth = Math.max(2, box.height * 0.02);
        context.setLineDash([context.lineWidth * 3, context.lineWidth * 3]);
        context.strokeRect(
            box.left - pad,
            box.top - pad * 0.6,
            box.width + pad * 2,
            box.height + pad * 1.2,
        );
        context.restore();
    }

    private _drawLogo(
        context: CanvasRenderingContext2D,
        width: number,
        height: number,
        state: AiLayerState,
    ) {
        const margin = Math.round(width * 0.04);
        const target_width = Math.round(width * state.logo_scale);

        // measured first, because which version to draw depends on what is
        // behind it, and that is only known once the box is known
        const sample = this._logos.on_light || this._logos.on_dark;
        if (!sample) return;
        const scale = target_width / (sample.naturalWidth || target_width);
        const target_height = Math.round(sample.naturalHeight * scale);
        const left = state.logo_position.endsWith('left')
            ? margin
            : width - target_width - margin;
        const top = state.logo_position.startsWith('top')
            ? margin
            : height - target_height - margin;

        const logo = this._logoFor(state, context, {
            left,
            top,
            width: target_width,
            height: target_height,
        });
        if (!logo) return;
        context.drawImage(logo, left, top, target_width, target_height);
    }

    /**
     * On auto, the artwork under the logo decides: a dark corner takes the
     * light version and a light corner takes the dark one. Posters are
     * generated, so the corner is different every time and asking the user to
     * pick each time is asking them to do the machine's job.
     */
    private _logoFor(
        state: AiLayerState,
        context: CanvasRenderingContext2D,
        box: Box,
    ) {
        const choice =
            state.logo_choice === 'auto'
                ? this._backgroundIsDark(context, box)
                    ? 'on_dark'
                    : 'on_light'
                : state.logo_choice;
        return (
            this._logos[choice] || this._logos.on_light || this._logos.on_dark
        );
    }

    private _backgroundIsDark(context: CanvasRenderingContext2D, box: Box) {
        try {
            const { data } = context.getImageData(
                Math.max(0, Math.round(box.left)),
                Math.max(0, Math.round(box.top)),
                Math.max(1, Math.round(box.width)),
                Math.max(1, Math.round(box.height)),
            );
            let total = 0;
            let count = 0;
            // every fourth pixel is plenty for an average and keeps this cheap
            for (let index = 0; index < data.length; index += 16) {
                total +=
                    0.299 * data[index] +
                    0.587 * data[index + 1] +
                    0.114 * data[index + 2];
                count++;
            }
            return count ? total / count < 140 : false;
        } catch {
            return false;
        }
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

    private _fontFamily(chosen?: string) {
        const family = chosen || this._brand_family();
        return family
            ? `"${family}", system-ui, sans-serif`
            : 'system-ui, sans-serif';
    }

    /**
     * Line breaks the author typed are kept, including the empty ones, since a
     * gap between two paragraphs is a decision rather than stray whitespace.
     * Anything still too wide for the artwork is wrapped on top of that.
     */
    private _wrap(
        context: CanvasRenderingContext2D,
        text: string,
        max_width: number,
    ) {
        const lines: string[] = [];
        for (const paragraph of text.split('\n')) {
            const words = paragraph.trim().split(/\s+/).filter(Boolean);
            if (!words.length) {
                lines.push('');
                continue;
            }
            let current = '';
            for (const word of words) {
                const candidate = current ? `${current} ${word}` : word;
                if (
                    context.measureText(candidate).width > max_width &&
                    current
                ) {
                    lines.push(current);
                    current = word;
                } else {
                    current = candidate;
                }
            }
            if (current) lines.push(current);
        }
        return lines;
    }
}
