import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { SettingsService, userSignal } from '@placeos/common';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'landing-virtual-concierge',
    template: `
        <!-- Compact Card View -->
        @if (!is_fullscreen()) {
            <div
                class="flex flex-col space-y-4 rounded-lg border border-base-300 bg-base-100 p-6 shadow md:col-span-3"
            >
                <div class="flex items-center space-x-4">
                    <div
                        class="relative flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-base-300 bg-base-200"
                    >
                        <div
                            class="absolute z-0 h-full w-full bg-base-100 opacity-30"
                        ></div>
                        <img
                            class="z-10 h-12"
                            src="assets/icons/ben_icon.svg"
                        />
                    </div>
                    <div class="flex-1">
                        <h2 class="text-lg font-medium">
                            Welcome {{ user().name }}, it's
                            {{ time() | date: 'fullDate' }}
                        </h2>
                        <p class="opacity-80">I'm Ben, your virtual concierge</p>
                    </div>
                </div>

                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        placeholder="Ask Ben anything about your workplace..."
                        (focus)="openFullscreen()"
                    />
                </mat-form-field>

                <div class="space-y-2">
                    <h4 class="opacity-60">Try asking me:</h4>
                    <div class="-mx-1 flex flex-wrap text-sm">
                        @for (prompt of prompts(); track prompt) {
                            <button
                                btn
                                matRipple
                                class="inverse white m-1 h-10 min-h-0 rounded-full"
                            >
                                {{ prompt }}
                            </button>
                        }
                    </div>
                </div>
            </div>
        }

        <!-- Fullscreen View -->
        @if (is_fullscreen()) {
            <div
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                (click)="closeFullscreen()"
            >
                <div
                    class="relative mx-auto flex h-full w-full max-w-4xl flex-col bg-base-100 p-8 sm:h-auto sm:max-h-[90vh] sm:rounded-xl sm:shadow-2xl"
                    (click)="$event.stopPropagation()"
                >
                    <button
                        icon
                        matRipple
                        class="absolute right-4 top-4 h-12 w-12"
                        (click)="closeFullscreen()"
                    >
                        <icon class="text-2xl">close</icon>
                    </button>

                    <div class="flex flex-col space-y-6 overflow-auto">
                        <div class="flex items-center space-x-4">
                            <div
                                class="relative flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-base-300 bg-base-200"
                            >
                                <div
                                    class="absolute z-0 h-full w-full bg-base-100 opacity-30"
                                ></div>
                                <img
                                    class="z-10 h-14"
                                    src="assets/icons/ben_icon.svg"
                                />
                            </div>
                            <div class="flex-1">
                                <h2 class="text-2xl font-medium">
                                    Welcome {{ user().name }}, it's
                                    {{ time() | date: 'fullDate' }}
                                </h2>
                                <p class="text-lg opacity-80">
                                    I'm Ben, your virtual concierge
                                </p>
                            </div>
                        </div>

                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                #fullscreenInput
                                matInput
                                placeholder="Ask Ben anything about your workplace..."
                            />
                        </mat-form-field>

                        <div class="space-y-4">
                            <h4 class="text-base opacity-60">Try asking me:</h4>
                            <div class="-mx-1 flex flex-wrap text-sm">
                                @for (prompt of prompts(); track prompt) {
                                    <button
                                        btn
                                        matRipple
                                        class="inverse white m-1 h-10 min-h-0 rounded-full"
                                    >
                                        {{ prompt }}
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        RouterModule,
        IconComponent,
    ],
})
export class LandingVirtualConciergeComponent {
    private readonly _settings = inject(SettingsService);

    public readonly user = userSignal();
    public readonly time = signal(Date.now());
    public readonly is_fullscreen = signal(false);

    private readonly _fullscreen_input =
        viewChild<ElementRef<HTMLInputElement>>('fullscreenInput');

    public readonly prompts = computed(() => {
        const config_prompts =
            this._settings.signal('virtual_concierge.prompts')();
        return config_prompts && Array.isArray(config_prompts)
            ? config_prompts
            : [
                  'Book a meeting room tomorrow at 2pm for 4 people',
                  'Find me an available desk near a window',
                  'Reserve parking for Friday morning',
              ];
    });

    constructor() {
        effect(() => {
            if (this.is_fullscreen() && this._fullscreen_input()) {
                setTimeout(
                    () => this._fullscreen_input()?.nativeElement.focus(),
                    100,
                );
            }
        });
    }

    public openFullscreen() {
        this.is_fullscreen.set(true);
    }

    public closeFullscreen() {
        this.is_fullscreen.set(false);
    }
}
