import { Injectable } from '@angular/core';
import {
    currentUser,
    downloadFile,
    jsonToCsv,
    notifyError,
    randomInt,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { getModule } from '@placeos/ts-client';
import { StaffUser } from '@placeos/users';
import { getUnixTime, format } from 'date-fns';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap, take } from 'rxjs/operators';
import { ReportsStateService } from '../reports-state.service';
import { GetUserPipe } from './get-user.pipe';

export interface ContactTracingOptions {
    user?: StaffUser;
}

export interface ContactEvent {
    id: string;
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
    private _options = new BehaviorSubject<ContactTracingOptions>({});

    public readonly events = combineLatest([
        this._options,
        this._reports.options,
    ]).pipe(
        switchMap(([{ user }, { start, end }]) => {
            const mod = getModule(this.system_id, 'ContactTracing');
            user = user || currentUser();
            GetUserPipe.addUser(user);
            return this.system_id && mod
                ? mod.execute('close_contacts', [
                      user.email,
                      user.username,
                      getUnixTime(start),
                      getUnixTime(end),
                  ])
                : of([]);
        }),
        map((list) => {
            const user = this._options.getValue().user || currentUser();
            return list.map(
                (_) =>
                    ({
                        id: _.mac_address || `contact-${randomInt(9999_9999)}`,
                        date: _.contact_time * 1000,
                        duration: _.duration / 60,
                        user_id: user.id,
                        user: user.name,
                        contact_id: _.username,
                        distance: 1,
                    } as ContactEvent)
            );
        }),
        catchError((err) => {
            notifyError(`${err}`);
            return [];
        }),
        shareReplay(1)
    );

    public readonly options = this._options.asObservable();

    private get system_id() {
        return (
            this._org.organisation?.bindings?.contact_tracing ||
            this._org.building?.bindings?.contact_tracing
        );
    }

    constructor(
        private _org: OrganisationService,
        private _reports: ReportsStateService
    ) {}

    public setOptions(options: Partial<ContactTracingOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public async downloadReport() {
        const { start, end } = await this._reports.options.pipe(take(1)).toPromise();
        const events = await this.events.pipe(take(1)).toPromise();
        downloadFile(
            `report+contact-tracing+${format(start, 'yyyy-MM-dd')}+${format(
                end,
                'yyyy-MM-dd'
            )}.csv`,
            jsonToCsv(events)
        );
    }
}
