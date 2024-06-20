import { Injectable } from '@angular/core';
import {
    SettingsService,
    currentUser,
    downloadFile,
    jsonToCsv,
    notifyError,
    notifyWarn,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { getModule } from '@placeos/ts-client';
import { StaffUser } from '@placeos/users';
import { getUnixTime, format, startOfDay, endOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    take,
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
    private _loading = new BehaviorSubject<string>('');
    private _generate = new BehaviorSubject<number>(0);
    private _options = new BehaviorSubject<ContactTracingOptions>({
        start: startOfDay(Date.now()),
        end: endOfDay(Date.now()),
    });

    public readonly events = combineLatest([
        this._options,
        this._generate,
    ]).pipe(
        distinctUntilChanged((a, b) => a[1] === b[1]),
        filter(([_, gen]) => !!gen),
        switchMap(([{ start, end, user }]) => {
            if (!user) return of([]);
            this._loading.next('Loading contact events...');

            const mod = getModule(this.system_id, 'ContactTracing');
            user = user || currentUser();
            GetUserPipe.addUser(user);
            return this.system_id && mod
                ? mod
                      .execute('close_contacts', [
                          user.email,
                          user.username,
                          getUnixTime(start),
                          getUnixTime(end),
                      ])
                      .catch((err) => {
                          notifyError(`${err?.msg || JSON.stringify(err)}`);
                          return [];
                      })
                : of([]);
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
                    } as ContactEvent)
            );
        }),
        tap((_) => this._loading.next('')),
        startWith([]),
        shareReplay(1)
    );

    public readonly options = this._options.asObservable();
    public readonly loading = this._loading.asObservable();

    private get system_id() {
        return this._org.binding('contact_tracing');
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _org: OrganisationService,
        private _reports: ReportsStateService,
        private _settings: SettingsService
    ) {}

    public setOptions(options: Partial<ContactTracingOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public generateReport() {
        this._generate.next(Date.now());
    }

    public async downloadReport() {
        const { start, end } = await this._reports.options
            .pipe(take(1))
            .toPromise();
        const events = await this.events.pipe(take(1)).toPromise();
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
            }))
        );
        if (!processed_events?.length) {
            return notifyWarn('No events to download.');
        }
        downloadFile(
            `report+contact-tracing+${format(start, 'yyyy-MM-dd')}+${format(
                end,
                'yyyy-MM-dd'
            )}.csv`,
            jsonToCsv(processed_events)
        );
    }
}
