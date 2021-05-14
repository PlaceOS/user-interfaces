import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, first } from 'rxjs/operators';

import { BaseClass, SettingsService } from '@placeos/common';
import { format } from 'date-fns';

@Component({
    selector: 'app-booking-panel-array',
    template: `
        <div
            class="absolute inset-0 flex items-center justify-center flex-wrap"
        >
            <ng-container *ngIf="systems && systems.length > 0; else none">
                <div
                    panel
                    class="relative flex-1 border border-white"
                    *ngFor="let id of systems | slice: 0:4; let i = index"
                    [style.height]="systems.length >= 2 ? '50%' : '100%'"
                >
                    <app-booking-panel
                        *ngIf="id; else empty_state"
                        [system_id]="id"
                        [topbar]="false"
                    ></app-booking-panel>
                </div>
            </ng-container>
            <ng-template #none>
                <div class="info-block">
                    <div class="text">
                        No systems are set for displaying on the panel array
                    </div>
                </div>
            </ng-template>
        </div>
        <ng-template #empty_state>
            <div class="absolute inset-0 flex flex-col items-center text-white">
                <div class="content center">
                    <div class="mb-4" *ngIf="logo">
                        <img [src]="logo" />
                    </div>
                    <div class="text-3xl">{{ time }}</div>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            [panel] {
                min-width: 40%;
            }

            .container {
                background-color: var(--bg-dark);
                background-image: url("data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18c0-1.105.887-2 1.998-2 1.104 0 2-.895 2.002-1.994V14v6h-4v-2zM0 13.998C0 12.895.888 12 2 12c1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2 .888 2 2v2H0v-6.002zm16 4.004A1.994 1.994 0 0 1 14 20c-1.105 0-2-.887-2-1.998v-4.004A1.994 1.994 0 0 0 10 12c-1.105 0-2-.888-2-2 0-1.105-.888-2-2-2-1.105 0-2-.887-2-1.998V1.998A1.994 1.994 0 0 0 2 0a2 2 0 0 0-2 2V0h8v2c0 1.105.888 2 2 2 1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2-.888 2-2 0-1.105.888-2 2-2 1.105 0 2-.888 2-2V0h4v6.002A1.994 1.994 0 0 1 22 8c-1.105 0-2 .888-2 2 0 1.105-.888 2-2 2-1.105 0-2 .887-2 1.998v4.004z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
                color: var(--font-light);
            }

            img {
                max-width: 12em;
            }
        `,
    ],
})
export class BookingPanelArrayComponent extends BaseClass implements OnInit {
    /** List of systems to show panels for */
    public systems: string[];
    /** Application logo */
    public logo: string;

    /** Display value for the current time */
    public get time(): string {
        return format(new Date(), 'h:mm:ss a');
    }

    constructor(
        private route: ActivatedRoute,
        private _settings: SettingsService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._settings.initialised
            .pipe(
                first((_) => _),
                delay(1000)
            )
            .toPromise();
        this.subscription(
            'route.query',
            this.route.queryParamMap.subscribe((params) => {
                if (params.has('system_ids')) {
                    this.systems = (params.get('system_ids') || '').split(',');
                }
            })
        );
        const logo = this._settings.get('app.logo');
        this.logo = (logo ? logo.inverse : null) || '';
    }
}
