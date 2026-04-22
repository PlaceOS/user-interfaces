import { DatePipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AsyncHandler, randomInt, settingSignal } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';

export interface CameraSnapshotData {
    camera_snapshot_urls: string[];
    camera_url?: string;
    room_name: string;
}

@Component({
    selector: 'camera-snapshot-modal',
    template: `
        <div>
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    Camera Feed - {{ data.room_name }}
                </h2>
                <button
                    icon
                    type="button"
                    matRipple
                    aria-label="Close camera feed"
                    mat-dialog-close
                >
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="mb-2 max-h-[65vh] w-3xl max-w-[calc(100vw-2rem)] space-y-4 overflow-auto px-2"
            >
                <div
                    class="border-base-300 bg-base-300 relative flex min-h-[45vmin] max-w-full min-w-[80vmin] items-center justify-center overflow-hidden rounded-lg border"
                >
                    @if (snapshot_url()) {
                        <img
                            auth
                            [source]="snapshot_url()"
                            class="h-full w-full object-contain"
                            [alt]="'Camera feed for ' + data.room_name"
                        />
                        <div
                            class="absolute right-2 bottom-2 overflow-hidden rounded-full px-2 py-1 font-mono text-xs text-white"
                        >
                            <div
                                class="absolute inset-0 z-0 bg-black opacity-30"
                            ></div>
                            <div class="relative z-10">
                                {{ timestamp() | date: 'mediumTime' }}
                            </div>
                        </div>
                    } @else {
                        <icon class="text-6xl opacity-30">hide_image</icon>
                    }
                </div>
                @if (data.camera_url) {
                    <a
                        btn
                        matRipple
                        class="flex items-center justify-center space-x-2"
                        [href]="data.camera_url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <icon>videocam</icon>
                        <span>Manage Camera</span>
                    </a>
                }
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                min-width: 500px;
                max-width: 90vw;
            }

            svg {
                font: inherit;
            }

            text {
                fill: white;
                stroke: black;
                stroke-width: 0.5px;
                stroke-linejoin: round;
            }
        `,
    ],
    imports: [
        DatePipe,
        MatDialogModule,
        AuthenticatedImageDirective,
        IconComponent,
        MatRippleModule,
    ],
})
export class CameraSnapshotModalComponent extends AsyncHandler {
    public readonly data = inject<CameraSnapshotData>(MAT_DIALOG_DATA);

    public readonly timestamp = signal(Date.now());
    private _snapshot_interval = settingSignal('snapshot_interval', 10 * 1000);

    private _on_interval = effect(() => {
        const delay = this._snapshot_interval();
        this._refresh(delay);
    });

    public readonly snapshot_url = computed(() => {
        const base_url = this.data.camera_snapshot_urls[0] || '';
        if (!base_url) return '';

        const separator = base_url.includes('?') ? '&' : '?';
        return `${base_url}${separator}t=${this.timestamp()}`;
    });

    private _refresh(delay: number) {
        this.timeout(
            'refresh',
            () => {
                this.timestamp.set(Date.now());
                this._refresh(delay);
            },
            delay + randomInt(1000),
        );
    }
}
