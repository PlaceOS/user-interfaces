import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { settingSignal } from '@placeos/common';
import { SafePipe, TranslatePipe } from '@placeos/components';
import { FooterMenuComponent } from './footer-menu.component';
import type { TopMenuEmbedItem } from './top-menu.component';
import { TopbarComponent } from './topbar.component';

@Component({
    selector: 'embedded-url',
    template: `
        <topbar />
        <div class="bg-base-200 flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                @if (item(); as item) {
                    <iframe
                        class="bg-base-100 h-full w-full border-0"
                        referrerpolicy="no-referrer"
                        [title]="item.name"
                        [src]="item.url | safe: 'resource'"
                    ></iframe>
                } @else {
                    <div
                        class="flex h-full w-full items-center justify-center p-8"
                    >
                        <div
                            class="bg-base-100 max-w-md rounded-xl p-8 text-center shadow"
                        >
                            <h1 class="mb-2 text-xl font-medium">
                                {{
                                    'APP.WORKPLACE.EMBED_UNAVAILABLE_TITLE'
                                        | translate
                                }}
                            </h1>
                            <p class="opacity-60">
                                {{
                                    'APP.WORKPLACE.EMBED_UNAVAILABLE_MSG'
                                        | translate
                                }}
                            </p>
                            <a btn matRipple class="mt-6" [routerLink]="['/']">
                                {{
                                    'APP.WORKPLACE.BOOKING_FINISHED' | translate
                                }}
                            </a>
                        </div>
                    </div>
                }
            </main>
        </div>
        <footer-menu />
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }
        `,
    ],
    imports: [
        RouterModule,
        SafePipe,
        TranslatePipe,
        MatRippleModule,
        TopbarComponent,
        FooterMenuComponent,
    ],
})
export class EmbeddedUrlComponent {
    private readonly _route = inject(ActivatedRoute);
    /** The route stays active between embeds, so read the ID on each change */
    private readonly _params = toSignal(this._route.paramMap, {
        initialValue: this._route.snapshot.paramMap,
    });
    private readonly _id = computed(() => this._params().get('id') || '');

    public readonly items = settingSignal<TopMenuEmbedItem[]>(
        'menu_embeds',
        [],
    );

    public readonly item = computed(() =>
        this.items().find((item) => item.id === this._id()),
    );
}
