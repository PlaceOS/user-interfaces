import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
    randomString,
    SettingsService,
    unique,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import {
    PlaceMetadata,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { getUnixTime } from 'date-fns';

export interface EmailTemplate {
    id: string;
    subject: string;
    zone_id: string;
    category: 'internal' | 'external';
    reply_to?: string;
    from?: string;
    to?: string;
    cc?: string;
    bcc?: string;
    trigger: string;
    html: string;
    text: string;
    preview_url: string;
    created_at: number;
    updated_at: number;
}

export interface EmailTemplateDefinition {
    id: string;
    module_name: string;
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
export class EmailTemplatesStateService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    private _filters = signal<EmailTemplatesFilters>({});
    private _change = signal(0);

    private readonly _template_definitions = resource({
        params: () => ({
            building: this._org.active_building()?.id,
            region: this._org.active_region()?.id,
            change: this._change(),
        }),
        defaultValue: [] as EmailTemplateDefinition[],
        loader: async ({ params }) => {
            if (!params.building) return [];
            const metadata = await showMetadata(
                this._org.organisation.id,
                'email_template_fields',
            ).catch(() => null);
            const definitions =
                (metadata as any)?.details ||
                ({} as Record<string, EmailTemplateDefinition>);
            return Object.keys(definitions).map(
                (key) =>
                    ({
                        id: key,
                        name: definitions[key].name,
                        module_name: definitions[key].module_name,
                        name_details: definitions[key].name.split(':'),
                        description: definitions[key].description || '',
                        fields: definitions[key].fields.map((field) => ({
                            name: field.name,
                            description: field.description || '',
                        })),
                    }) as EmailTemplateDefinition,
            );
        },
    });
    public readonly template_definitions = this._template_definitions.value;

    public readonly template_groups = computed(() => {
        const defs = this.template_definitions();
        const groups = unique(defs.map((_) => _.module_name));
        if (!groups.length) return [{ name: '', items: defs }];
        return groups.map((name) => ({
            name,
            items: defs.filter((_) => _.module_name === name),
        }));
    });

    private _processTemplates(metadata: PlaceMetadata, zone_id: string) {
        const data = metadata.details;
        return ((data instanceof Array ? data : '') || []).map(
            (template) => ({ ...template, zone_id }) as EmailTemplate,
        );
    }

    /**
     * Read a zone's stored templates, apply `update` and write the result.
     * Read errors are not caught, so a failed read never becomes an empty
     * list that is written back.
     */
    private async _writeZoneTemplates(
        zone_id: string,
        update: (list: EmailTemplate[]) => EmailTemplate[],
    ) {
        const metadata = await showMetadata(zone_id, 'email_templates');
        const list = metadata.details instanceof Array ? metadata.details : [];
        await updateMetadata(zone_id, {
            name: 'email_templates',
            details: update(list),
            description: metadata.description || 'Email Templates for Zone',
        });
    }

    /** Query the merged list of templates for the given building/region */
    private async _queryTemplates(
        building: string,
        region: string,
    ): Promise<EmailTemplate[]> {
        if (!building) return [];
        const [org_templates, bld_templates, region_templates] =
            await Promise.all([
                showMetadata(this._org.organisation.id, 'email_templates')
                    .then((_) =>
                        this._processTemplates(_, this._org.organisation.id),
                    )
                    .catch(() => [] as EmailTemplate[]),
                showMetadata(building, 'email_templates')
                    .then((_) => this._processTemplates(_, building))
                    .catch(() => [] as EmailTemplate[]),
                region
                    ? showMetadata(region, 'email_templates')
                          .then((_) => this._processTemplates(_, region))
                          .catch(() => [] as EmailTemplate[])
                    : Promise.resolve([] as EmailTemplate[]),
            ]);
        return org_templates.concat(bld_templates).concat(region_templates);
    }

    private readonly _templates = resource({
        params: () => ({
            building: this._org.active_building()?.id,
            region: this._org.active_region()?.id,
            change: this._change(),
        }),
        defaultValue: [] as EmailTemplate[],
        loader: ({ params }) =>
            this._queryTemplates(params.building, params.region),
    });
    public readonly templates = this._templates.value;

    public readonly filters = this._filters.asReadonly();

    public readonly filtered_templates = computed(() => {
        const templates = this.templates();
        const category = this.filters().category || '';
        return templates.filter(
            (_) => _.category === category || category === '',
        );
    });

    public async loadTemplate(id: string) {
        const template_list = await this._queryTemplates(
            this._org.active_building()?.id,
            this._org.active_region()?.id,
        );
        return template_list.find((_) => _.id === id);
    }

    public async saveTemplate(template: EmailTemplate, old_zone = '') {
        if (!template.zone_id) throw 'A building is required';
        const moved =
            !!template.id && !!old_zone && old_zone !== template.zone_id;
        if (!template.id) {
            template.id = `template-${randomString(8)}`;
            template.created_at = getUnixTime(Date.now());
        }
        template.updated_at = getUnixTime(Date.now());
        try {
            // Write the new zone before removing from the old zone, so a
            // failed write never loses the template.
            await this._writeZoneTemplates(template.zone_id, (list) => [
                ...list.filter((_) => _.id !== template.id),
                template,
            ]);
            if (moved) {
                await this._writeZoneTemplates(old_zone, (list) =>
                    list.filter((_) => _.id !== template.id),
                );
            }
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.EMAIL_TEMPLATES_SAVE_ERROR', {
                    error: e,
                }),
            );
            throw e;
        }
        notifySuccess(i18n('APP.CONCIERGE.EMAIL_TEMPLATES_SAVE_SUCCESS'));
        this.timeout('changed', () => this._change.set(Date.now()));
    }

    public async removeTemplate(template: EmailTemplate) {
        const ref = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE_MSG', {
                    name: template.subject,
                }),
                icon: { content: 'delete_forever' },
                confirm_text: i18n('COMMON.REMOVE'),
            },
            this._dialog,
        );
        if (ref.reason !== 'done') return ref.close();
        ref.loading(i18n('APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE_LOADING'));
        try {
            await this._writeZoneTemplates(template.zone_id, (list) =>
                list.filter((_) => _.id !== template.id),
            );
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE_ERROR', {
                    error: e,
                }),
            );
            throw e;
        } finally {
            ref.close();
        }
        notifySuccess(i18n('APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE_SUCCESS'));
        this.timeout('changed', () => this._change.set(Date.now()));
    }

    public setFilters(filters: Partial<EmailTemplatesFilters>) {
        this._filters.set({ ...this._filters(), ...filters });
    }
}
