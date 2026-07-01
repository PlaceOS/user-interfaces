import { Injectable, inject, resource, signal } from '@angular/core';
import {
    OrganisationService,
    SettingsService,
    StaffUser,
    currentUser,
    downloadFile,
    jsonToCsv,
    notifyError,
    notifyWarn,
} from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { endOfDay, format, getUnixTime, startOfDay } from 'date-fns';
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

    private _loading = signal<string>('');
    private _generate = signal<number>(0);
    private _options = signal<ContactTracingOptions>({
        start: startOfDay(Date.now()),
        end: endOfDay(Date.now()),
    });

    private readonly _events = resource({
        params: () => this._generate(),
        defaultValue: [] as ContactEvent[],
        loader: async ({ params: gen }) => {
            if (!gen) return [];
            const { start, end, user } = this._options();
            if (!user) return [];
            this._loading.set('Loading contact events...');
            const mod = getModule(this.system_id, 'ContactTracing');
            const current_user = user || currentUser();
            GetUserPipe.addUser(current_user);
            if (!this.system_id || !mod) {
                this._loading.set('');
                return [];
            }
            try {
                const list = await mod.execute('close_contacts', [
                    current_user.email,
                    current_user.username,
                    getUnixTime(start),
                    getUnixTime(end),
                ]);
                const person = this._options().user || currentUser();
                return list.map(
                    (_) =>
                        ({
                            mac_address: _.mac_address,
                            date: _.contact_time * 1000,
                            duration: Math.floor(_.duration / 60) || 0,
                            user_id: person.id,
                            user: person.name,
                            contact_id: _.username,
                            distance: 1,
                        }) as ContactEvent,
                );
            } catch (err) {
                notifyError(`${err?.msg || JSON.stringify(err)}`);
                return [];
            } finally {
                this._loading.set('');
            }
        },
    });
    public readonly events = this._events.value;

    public readonly options = this._options.asReadonly();
    public readonly loading = this._loading.asReadonly();

    private get system_id() {
        const binding = this._org.binding('contact_tracing');
        const system_id = binding instanceof Object ? binding.id : binding;
        return system_id;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public setOptions(options: Partial<ContactTracingOptions>) {
        this._options.set({ ...this._options(), ...options });
    }

    public generateReport() {
        this._generate.set(Date.now());
    }

    public async downloadReport() {
        const { start, end } = this._reports.options();
        const events = this.events();
        const pipe = new GetUserPipe();
        const processed_events = await Promise.all(
            events.map(async (_) => ({
                'MAC Address': _.mac_address,
                Date: format(_.date, 'dd MMM yyyy, ' + this.time_format),
                'User Name': _.user,
                'Contact Name':
                    (await pipe.transform(_.contact_id))?.name ||
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
