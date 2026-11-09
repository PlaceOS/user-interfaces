import { Component, computed, input, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';

/**
 * A camera snapshot, loaded again whenever `timestamp` changes. A refresh of
 * the same camera keeps showing the last image until the new one loads; a
 * different camera shows a loading placeholder until its first image does.
 * An image that fails to load shows a broken image icon.
 */
@Component({
    selector: 'camera-image',
    template: `
        <img
            auth
            [source]="source()"
            [alt]="alt()"
            class="h-full w-full"
            [class.object-cover]="fit() === 'cover'"
            [class.object-contain]="fit() === 'contain'"
            [class.invisible]="state() !== 'loaded'"
            (load)="onLoad()"
            (error)="onError()"
        />
        @if (state() === 'loading') {
            <div
                class="absolute inset-0 flex items-center justify-center"
                role="status"
                [attr.aria-label]="'Loading ' + alt()"
            >
                <mat-spinner [diameter]="spinner_diameter()"></mat-spinner>
            </div>
        } @else if (state() === 'error') {
            <div
                class="absolute inset-0 flex items-center justify-center"
                role="img"
                [attr.aria-label]="'Failed to load ' + alt()"
            >
                <icon class="opacity-30" [class]="icon_class()"
                    >broken_image</icon
                >
            </div>
        }
    `,
    styles: [
        `
            :host {
                position: relative;
                display: block;
            }
        `,
    ],
    imports: [
        AuthenticatedImageDirective,
        IconComponent,
        MatProgressSpinnerModule,
    ],
})
export class CameraImageComponent {
    /** The camera's snapshot URL, without the refresh timestamp */
    public readonly base_url = input.required<string>();
    /** Changes to load a new snapshot */
    public readonly timestamp = input<number>(0);
    public readonly alt = input('Camera feed');
    public readonly fit = input<'contain' | 'cover'>('contain');
    public readonly spinner_diameter = input(36);
    public readonly icon_class = input('text-6xl');

    /** The camera whose image is showing */
    private readonly _shown_base = signal('');
    /** The snapshot that last failed to load */
    private readonly _failed_source = signal('');

    public readonly source = computed(() => {
        const base_url = this.base_url();
        if (!base_url) return '';
        const separator = base_url.includes('?') ? '&' : '?';
        return `${base_url}${separator}t=${this.timestamp()}`;
    });

    public readonly state = computed<'loading' | 'loaded' | 'error'>(() => {
        if (this._failed_source() === this.source()) return 'error';
        if (this._shown_base() === this.base_url()) return 'loaded';
        return 'loading';
    });

    public onLoad() {
        this._shown_base.set(this.base_url());
        this._failed_source.set('');
    }

    public onError() {
        this._failed_source.set(this.source());
    }
}
