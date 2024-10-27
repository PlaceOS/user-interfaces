import { Injectable } from '@angular/core';
import { notifySuccess, randomString, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import {
    PlaceMetadata,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { getUnixTime } from 'date-fns';
import { BehaviorSubject, combineLatest, forkJoin, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

export interface EmailTemplate {
    id: string;
    subject: string;
    zone_id: string;
    category: 'internal' | 'external';
    reply_to?: string;
    from?: string;
    trigger: string;
    html: string;
    text: string;
    preview_url: string;
    created_at: number;
    updated_at: number;
}

export interface EmailTemplateDefinition {
    id: string;
    name: string;
    description: string;
    fields: { name: string; description: string }[];
}

export interface EmailTemplatesFilters {
    category?: 'internal' | 'external';
}

@Injectable({
    providedIn: 'root',
})
export class EmailTemplatesStateService {
    private _filters = new BehaviorSubject<EmailTemplatesFilters>({});
    private _change = new BehaviorSubject(0);

    public readonly template_definitions = combineLatest([
        this._org.active_building,
        this._org.active_region,
        this._change,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(() =>
            showMetadata(this._org.organisation.id, 'email_template_fields')
                .pipe(
                    map((_) => {
                        const definitions =
                            (_ as any)?.details ||
                            ({} as Record<string, EmailTemplateDefinition>);
                        return Object.keys(definitions).map(
                            (key) =>
                                ({
                                    id: key,
                                    name: definitions[key].name,
                                    name_details:
                                        definitions[key].name.split(':'),
                                    description:
                                        definitions[key].description || '',
                                    fields: definitions[key].fields.map(
                                        (field) => ({
                                            name: field.name,
                                            description:
                                                field.description || '',
                                        }),
                                    ),
                                }) as EmailTemplateDefinition,
                        );
                    }),
                )
                .pipe(catchError(() => of([] as EmailTemplateDefinition[]))),
        ),
        tap((_) => console.log('Templates:', _)),
        shareReplay(1),
    );

    private _processTemplates(metadata: PlaceMetadata, zone_id: string) {
        const data = metadata.details;
        return ((data instanceof Array ? data : '') || []).map(
            (template) => ({ ...template, zone_id }) as EmailTemplate,
        );
    }

    public readonly templates = combineLatest([
        this._org.active_building,
        this._org.active_region,
        this._change,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld, region]) =>
            forkJoin([
                showMetadata(this._org.organisation.id, 'email_templates').pipe(
                    map((_) =>
                        this._processTemplates(_, this._org.organisation.id),
                    ),
                    catchError(() => of([] as EmailTemplate[])),
                ),
                showMetadata(bld.id, 'email_templates').pipe(
                    map((_) => this._processTemplates(_, bld.id)),
                    catchError(() => of([] as EmailTemplate[])),
                ),
                region
                    ? showMetadata(region.id, 'email_templates').pipe(
                          map((_) => this._processTemplates(_, region.id)),
                          catchError(() => of([] as EmailTemplate[])),
                      )
                    : of([] as EmailTemplate[]),
            ]),
        ),
        map(([org_templates, bld_templates, region_templates]) =>
            org_templates.concat(bld_templates).concat(region_templates),
        ),
        shareReplay(1),
    );
    public readonly filters = this._filters.asObservable();

    public readonly filtered_templates = combineLatest([
        this.templates,
        this.filters,
    ]).pipe(
        map(([templates, filters]) => {
            const category = filters.category || '';
            return templates.filter(
                (_) => _.category === category || category === '',
            );
        }),
    );

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService,
    ) {}

    public async loadTemplate(id: string) {
        const template_list = await this.templates.pipe(take(1)).toPromise();
        return template_list.find((_) => _.id === id);
    }

    public async saveTemplate(template: EmailTemplate) {
        if (!template.zone_id) return;
        const template_list = await this.templates.pipe(take(1)).toPromise();
        if (!template.id) {
            template.id = `template-${randomString(8)}`;
            template.created_at = getUnixTime(Date.now());
        }
        template.updated_at = getUnixTime(Date.now());
        const zone_templates = template_list.filter(
            (_) => _.zone_id === template.zone_id,
        );
        const template_value = { ...template };
        delete template_value.zone_id;
        console.log('Templates:', template_list);
        const new_template_list = [
            ...zone_templates.filter((_) => _.id !== template.id),
            template,
        ];
        await updateMetadata(template.zone_id, {
            name: `email_templates`,
            details: new_template_list,
            description: 'Email Templates for Zone',
        }).toPromise();
        notifySuccess('Successfully saved template');
    }

    public async removeTemplate(template: EmailTemplate) {
        const template_list = await this.templates.pipe(take(1)).toPromise();
        const zone_templates = template_list.filter(
            (_) => _.zone_id === template.zone_id,
        );
        const new_template_list = zone_templates.filter(
            (_) => _.id !== template.id,
        );
        await updateMetadata(template.zone_id, {
            name: `email_templates`,
            details: new_template_list,
            description: 'Email Templates for Zone',
        }).toPromise();
        notifySuccess('Successfully removed template');
    }

    public setFilters(filters: Partial<EmailTemplatesFilters>) {
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }
}
