import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { VERSION } from '@placeos/common';
import { ChangelogService, TranslatePipe } from '@placeos/components';
import { ControlStateService } from '../control-state.service';

/**
 * Full screen shown while the room is powered off. A tap powers on the room.
 * Projects extra content, such as the next meeting, under the room name.
 */
@Component({
    selector: 'control-splash',
    template: `
        <h2 class="mb-4 text-4xl font-light">
            {{ 'APP.CONTROL.TOUCH_TO_START' | translate }}
        </h2>
        <p class="text-lg">{{ system()?.name }}</p>
        <ng-content />
        <div class="absolute bottom-0 left-0 p-2">
            <div class="w-full text-xs opacity-60">
                {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                <button
                    class="m-0 border-none bg-none p-0 text-xs underline"
                    [disabled]="!changelog_available()"
                    (click)="$event.stopPropagation(); viewChangelog()"
                >
                    {{ version.hash }}
                </button>
            </div>
            <div class="w-full text-xs opacity-60">
                {{ version.time | date: 'longDate' }}
                ({{ version.time | date: 'shortTime' }})
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                animation: crossfade 10s linear;
                animation-iteration-count: infinite;
            }
        `,
    ],
    host: {
        name: 'splash',
        class: 'absolute inset-0 flex flex-col items-center justify-center text-white',
        '(click)': 'powerOn()',
    },
    imports: [TranslatePipe, DatePipe],
})
export class SplashComponent {
    private _state = inject(ControlStateService);
    private _changelog = inject(ChangelogService);

    public readonly system = this._state.system;
    public readonly version = VERSION;
    public readonly changelog_available = this._changelog.available;
    public readonly viewChangelog = () => this._changelog.view();
    public readonly powerOn = () => this._state.powerOn();
}
