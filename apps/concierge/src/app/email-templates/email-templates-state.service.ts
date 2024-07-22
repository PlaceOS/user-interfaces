import { Injectable } from '@angular/core';
import { randomString } from '@placeos/common';
import { getUnixTime } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface EmailTemplate {
    id: string;
    title: string;
    zone_id: string;
    category: 'internal' | 'external';
    trigger: string;
    body: string;
    preview_url: string;
    created_at: number;
    updated_at: number;
}

export interface EmailTemplatesFilters {
    category?: 'internal' | 'external';
}

@Injectable({
    providedIn: 'root',
})
export class EmailTemplatesStateService {
    private _templates = new BehaviorSubject<EmailTemplate[]>([]);
    private _filters = new BehaviorSubject<EmailTemplatesFilters>({});

    public readonly templates = this._templates.asObservable();
    public readonly filters = this._filters.asObservable();

    public readonly filtered_templates = combineLatest([
        this.templates,
        this.filters,
    ]).pipe(
        map(([templates, filters]) => {
            const category = filters.category || '';
            return templates.filter(
                (_) => _.category === category || category === ''
            );
        })
    );

    constructor() {
        this.loadTemplates();
    }

    public async loadTemplates() {
        const session_templates = JSON.parse(
            sessionStorage.getItem('PLACEOS.email_templates') || '[]'
        );
        this._templates.next(session_templates);
    }

    public async loadTemplate(id: string) {
        const template_list = await this.templates.pipe(take(1)).toPromise();
        return template_list.find((_) => _.id === id);
    }

    public async saveTemplate(template: EmailTemplate) {
        const template_list = await this.templates.pipe(take(1)).toPromise();
        if (!template.id) {
            template.id = `template-${randomString(8)}`;
            template.created_at = getUnixTime(Date.now());
        }
        template.updated_at = getUnixTime(Date.now());
        console.log('Templates:', template_list);
        const new_template_list = [
            ...template_list.filter((_) => _.id !== template.id),
            template,
        ];
        console.log('New Templates:', new_template_list);
        this._templates.next(new_template_list);
        sessionStorage.setItem(
            'PLACEOS.email_templates',
            JSON.stringify(new_template_list)
        );
    }

    public removeTemplate(template: EmailTemplate) {
        const new_template_list = this._templates
            .getValue()
            .filter((_) => _.id !== template.id);
        this._templates.next(new_template_list);
        sessionStorage.setItem(
            'PLACEOS.email_templates',
            JSON.stringify(new_template_list)
        );
    }

    public setFilters(filters: Partial<EmailTemplatesFilters>) {
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }
}
