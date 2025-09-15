import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { AsyncHandler, SettingsService, userSignal } from '@placeos/common';
import { Building, OrganisationService } from '@placeos/organisation';
import { startOfMinute } from 'date-fns';
import { settingSignal } from 'libs/common/src/lib/settings.service';
import { debounceTime } from 'rxjs';

@Component({
    selector: 'app-landing',
    template: `
        @if (!hide_nav()) {
            <topbar class="z-10" />
        }
        <div class="flex h-1/2 flex-1 bg-base-200">
            @if (!hide_landing_sidebar()) {
                <div
                    class="relative hidden h-full w-[18rem] flex-col overflow-hidden border-r border-base-300 bg-base-100 sm:flex"
                >
                    <div class="flex items-center space-x-2 p-2">
                        @if (!hide_colleagues()) {
                            <button
                                btn
                                matRipple
                                class="flex-1"
                                [class.inverse]="tab() !== 'people'"
                                (click)="tab.set('people')"
                            >
                                <div
                                    class="flex items-center space-x-2 capitalize"
                                >
                                    <icon>people</icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.WORKPLACE.COLLEAGUES'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            [class.inverse]="tab() !== 'fav'"
                            (click)="tab.set('fav')"
                        >
                            <div class="flex items-center space-x-2 capitalize">
                                <icon>favorite</icon>
                                <div class="pr-2">
                                    {{ 'COMMON.FAVOURITES' | translate }}
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class="h-1/2 w-full flex-1">
                        @if (tab() === 'people' && !hide_colleagues()) {
                            <landing-colleagues></landing-colleagues>
                        }
                        @if (tab() === 'fav' || hide_colleagues()) {
                            <landing-favourites></landing-favourites>
                        }
                    </div>
                </div>
            }
            <div class="z-0 h-full w-1/2 flex-1 overflow-auto sm:px-4">
                <header
                    class="sticky top-0 z-50 mb-4 flex items-center justify-between overflow-hidden bg-ternary px-4 sm:rounded-b"
                >
                    <div class="">
                        <div class="font-medium sm:text-xl">
                            {{
                                'APP.WORKPLACE.WELCOME_MESSAGE'
                                    | translate: { name: user()?.name }
                            }}
                        </div>
                        <div date class="text-sm sm:text-base">
                            {{ date() | date: 'fullDate' }}
                        </div>
                        @if (building()?.address || building()?.name) {
                            <div class="text-sm sm:text-base">
                                {{
                                    building()?.address ||
                                        building()?.display_name ||
                                        building()?.name
                                }}
                            </div>
                        }
                    </div>
                    <div class="h-32 pt-4">
                        <img src="assets/img/landing.svg" />
                    </div>
                </header>
                @if (show_quick_links()) {
                    <landing-quick-links />
                }
                @if (show_quick_book()) {
                    <landing-quick-book />
                }
                <landing-availability />
                <div
                    class="mx-4 mb-2 h-px w-[calc(100%-2rem)] bg-base-200"
                ></div>
                <landing-upcoming />
            </div>
        </div>
        @if (!hide_nav()) {
            <footer-menu />
        }
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            main {
                min-height: 50%;
            }
        `,
    ],
    standalone: false,
})
export class LandingComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly time = signal(0);
    public readonly tab = signal('people');
    public readonly hide_nav = signal(false);
    public readonly user = userSignal();
    public readonly building = signal(new Building());
    public readonly hide_landing_sidebar = settingSignal<boolean>(
        'hide_landing_sidebar',
    );
    public readonly hide_colleagues = settingSignal<boolean>('hide_colleagues');
    public readonly show_quick_links =
        settingSignal<boolean>('show_quick_links');
    public readonly show_quick_book = settingSignal<boolean>('show_quick_book');
    public readonly date = computed(() =>
        startOfMinute(this.time() || Date.now()),
    );

    public ngOnInit() {
        this.subscription(
            'building',
            this._org.active_building.pipe(debounceTime(300)).subscribe(() => {
                this.hide_nav.set(
                    localStorage.getItem('PlaceOS.hide_nav') === 'true',
                );
                this.building.set(this._org.building);
            }),
        );
    }
}
