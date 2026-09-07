import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AsyncHandler } from '@placeos/common';
import { IconComponent, SafePipe } from '@placeos/components';

export interface EmbeddedControlModalData {
    control_url: string;
}

@Component({
    selector: 'embedded-control-modal',
    template: `
        <div class="bg-base-100 absolute inset-0"></div>
        <div
            class="bg-secondary absolute w-screen overflow-hidden"
            modal
            (window:click)="reset()"
        >
            <div class="h-full w-full border-none">
                <iframe
                    class="h-full w-full border-none"
                    [src]="control_url | safe: 'resource'"
                ></iframe>
            </div>
        </div>
        <div class="absolute top-0 left-0 flex h-12 items-center">
            <div countdown class="mx-2 text-2xl">{{ countdown() }}</div>
            <button
                icon
                matRipple
                class="close"
                (click)="close()"
                (contextmenu)="$event.preventDefault()"
            >
                <icon class="mx-2 text-2xl">close</icon>
            </button>
        </div>
    `,
    styles: [
        `
            [modal] {
                animation: control-modal-enter 500ms ease-out;
                height: calc(100vh - 3em);
                box-sizing: content-box;
                border: 2px solid #fff;
                border-top: 1px solid #ccc;
                transform: translate(-50%, calc(-50% + 1.75em));
            }

            @keyframes control-modal-enter {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            .overlay {
                position: absolute;
                top: 0;
                right: 0;
                display: flex;
                align-items: center;
                height: 3em;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [SafePipe, MatRippleModule, IconComponent],
})
export class EmbeddedControlModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog_ref =
        inject<MatDialogRef<EmbeddedControlModalComponent>>(MatDialogRef);
    private _data = inject<EmbeddedControlModalData>(MAT_DIALOG_DATA);

    /** Control URL to embed into the modal */
    public readonly control_url: string = this._data.control_url;
    /** Display value for the time remain until the modal automatically closes */
    public readonly countdown = signal(30);

    public ngOnInit(): void {
        this.countdown.set(30);
        this.interval('countdown', () => this.tick(), 1000);
    }

    /**
     * Close the modal
     */
    public close() {
        this._dialog_ref.close();
        this.countdown.set(30);
    }

    /**
     * User confirmation of the content of the modal
     */
    public reset() {
        this.countdown.set(30);
        this.interval('countdown', () => this.tick(), 1000);
    }

    /**
     * Decrement countdown and close if 0
     */
    public tick() {
        if (this.countdown() <= 0) {
            this.close();
        }
        this.countdown.update((value) => value - 1);
    }
}
