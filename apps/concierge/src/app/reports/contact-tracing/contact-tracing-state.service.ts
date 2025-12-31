import { Injectable, inject } from '@angular/core';
import {
    OrganisationService,
    SettingsService,
    StaffUser,
    currentUser,
    downloadFile,
    jsonToCsv,
    nextValueFrom,
    notifyError,
    notifyWarn,
} from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { endOfDay, format, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, from, of } from 'rxjs';
import {
    catchError,
    filter,
    finalize,
    map,
    shareReplay,
    skip,
    startWith,
    switchMap,
    takeUntil,
    tap,
} from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';
import { GetUserPipe } from './get-user.pipe';

export interface ContactTracingOptions {
    start: number | Date;
    end: number | Date;
    zones?: string[];
    user?: StaffUser;
}

export interface ContactEvent {
    id?: string;
    mac_address?: string;
    date: number;
    duration: number;
    user_id: string;
    user: string;
    location_id: string;
    location_name: string;
    contact_id: string;
    contact: string;
    distance: number;
}

@Injectable({
    providedIn: 'root',
})
export class ContactTracingStateService {
    private _org = inject(OrganisationService);
    private _reports = inject(ReportsStateService);
    private _settings = inject(SettingsService);

    private _loading = new BehaviorSubject<string>('');
    private _generate = new BehaviorSubject<number>(0);
    private _options = new BehaviorSubject<ContactTracingOptions>({
        start: startOfDay(Date.now()),
        end: endOfDay(Date.now()),
    });

    public readonly events = this._generate.pipe(
        filter((gen) => !!gen),
        switchMap(() => {
            const { start, end, user } = this._options.getValue();
            if (!user) return of([]);
            this._loading.next('Loading contact events...');

            const mod = getModule(this.system_id, 'ContactTracing');
            const current_user = user || currentUser();
            GetUserPipe.addUser(current_user);
            if (!this.system_id || !mod) return of([]);
            return from(
                mod.execute('close_contacts', [
                    current_user.email,
                    current_user.username,
                    getUnixTime(start),
                    getUnixTime(end),
                ]),
            ).pipe(
                catchError((err) => {
                    notifyError(`${err?.msg || JSON.stringify(err)}`);
                    return of([]);
                }),
                takeUntil(this._options.pipe(skip(1))),
                finalize(() => this._loading.next('')),
            );
        }),
        map((list) => {
            const user = this._options.getValue().user || currentUser();
            return list.map(
                (_) =>
                    ({
                        mac_address: _.mac_address,
                        date: _.contact_time * 1000,
                        duration: Math.floor(_.duration / 60) || 0,
                        user_id: user.id,
                        user: user.name,
                        contact_id: _.username,
                        distance: 1,
                    }) as ContactEvent,
            );
        }),
        startWith([]),
        shareReplay(1),
    );

    public readonly options = this._options.asObservable();
    public readonly loading = this._loading.asObservable();

    private get system_id() {
        const binding = this._org.binding('contact_tracing');
        const system_id = binding instanceof Object ? binding.id : binding;
        return system_id;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public setOptions(options: Partial<ContactTracingOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public generateReport() {
        this._generate.next(Date.now());
    }

    public async downloadReport() {
        const { start, end } = await nextValueFrom(this._reports.options);
        const events = await nextValueFrom(this.events);
        const pipe = new GetUserPipe();
        const processed_events = await Promise.all(
            events.map(async (_) => ({
                'MAC Address': _.mac_address,
                Date: format(_.date, 'dd MMM yyyy, ' + this.time_format),
                'User Name': _.user,
                'Contact Name':
                    (await pipe.transform(_.contact_id).toPromise())?.name ||
                    (_.contact_id !== 'null' ? _.contact_id : null) ||
                    _.mac_address,
                Duration: `${
                    Math.floor(_.duration / 60)
                        ? Math.floor(_.duration / 60) + 'h '
                        : ''
                }${Math.floor(_.duration % 60) + 'm'}`,
                Distance: _.distance,
            })),
        );
        if (!processed_events?.length) {
            return notifyWarn('No events to download.');
        }
        downloadFile(
            `report+contact-tracing+${format(start, 'yyyy-MM-dd')}+${format(
                end,
                'yyyy-MM-dd',
            )}.csv`,
            jsonToCsv(processed_events),
        );
    }
}
