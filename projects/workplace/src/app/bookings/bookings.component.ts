import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseClass } from 'src/app/common/base.class';
import { HashMap } from 'src/app/common/types';
import {
    clearDeskBookingFormData,
    clearBookingFormData,
} from 'src/app/bookings/booking.utilities';
import { SettingsService } from 'src/app/common/settings.service';

export interface BookingFlowEvent {
    /** Type of flow event */
    type: 'previous' | 'next' | 'reset' | 'close' | 'error';
    /** Step which the event was emitted from */
    step: string;
    /** Additional metadata for the event */
    metadata?: HashMap;
}

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent extends BaseClass implements OnInit {
    /** Booking flow */
    public flow: 'spaces' | 'desks' | 'qr' | '';
    /** Whether to show the overlay menu */
    public show_menu: boolean;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit(): void {
        this._settings.title = 'Book';
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('flow')) {
                    this.flow = params.get('flow') as any;
                } else {
                    this.flow = '';
                }
                console.log('flow::', this.flow);
            })
        );
        this.subscription(
            'query.params',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('new')) {
                    clearDeskBookingFormData();
                    clearBookingFormData();
                    this._router.navigate([], {
                        queryParams: {
                            new: null,
                        },
                        replaceUrl: true,
                        queryParamsHandling: 'merge',
                    });
                }
            })
        );
    }

    public spaces() {
        this._router.navigate(['spaces'], { relativeTo: this._route });
    }

    public test(e) {
        console.log(e);
    }
}
