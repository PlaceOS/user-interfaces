import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { Validators } from '@angular/forms';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import {
    SchemaFormComponent,
    buildFormFromFields,
    parseSchemaFields,
} from '../lib/schema-form.component';

const SCHEMA = {
    required: ['title'],
    properties: {
        title: {
            type: 'string',
            title: 'Title',
            description: 'The name of the thing',
        },
        count: { type: 'number', default: 4 },
        enabled: { type: 'boolean', title: 'Enabled' },
        mode: { type: 'string', enum: ['auto', 'manual'] },
    },
};

describe('parseSchemaFields', () => {
    it('should map JSON schema properties to form fields', () => {
        const fields = parseSchemaFields(SCHEMA as any);
        expect(fields).toHaveLength(4);
        expect(fields[0]).toMatchObject({
            key: 'title',
            type: 'string',
            label: 'Title',
            description: 'The name of the thing',
            required: true,
        });
        expect(fields[1]).toMatchObject({
            key: 'count',
            type: 'number',
            label: 'count',
            required: false,
            default_value: 4,
        });
        expect(fields[2]).toMatchObject({ key: 'enabled', type: 'boolean' });
        expect(fields[3]).toMatchObject({
            key: 'mode',
            type: 'select',
            options: [
                { label: 'auto', value: 'auto' },
                { label: 'manual', value: 'manual' },
            ],
        });
    });

    it('should return no fields for empty schemas', () => {
        expect(parseSchemaFields(null)).toEqual([]);
        expect(parseSchemaFields({})).toEqual([]);
    });
});

describe('buildFormFromFields', () => {
    it('should prefer passed defaults over schema defaults', () => {
        const fields = parseSchemaFields(SCHEMA as any);
        const form = buildFormFromFields(fields, { count: 10 });
        expect(form.value).toEqual({
            title: null,
            count: 10,
            enabled: null,
            mode: null,
        });
        expect(form.controls.title.hasValidator(Validators.required)).toBe(
            true,
        );
        expect(form.valid).toBe(false);
        form.patchValue({ title: 'Named' });
        expect(form.valid).toBe(true);
    });
});

describe('SchemaFormComponent', () => {
    let spectator: Spectator<SchemaFormComponent>;
    const createComponent = createComponentFactory({
        component: SchemaFormComponent,
        providers: [provideNoopAnimations()],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render nothing without a schema', () => {
        expect(spectator.component.defaults_form()).toBeFalsy();
        expect('.field').not.toExist();
        expect(spectator.component.isValid()).toBe(true);
    });

    it('should generate form fields from the schema', () => {
        spectator.setInput({ schema: SCHEMA });
        expect('input[name="title"]').toExist();
        expect('input[name="count"]').toHaveAttribute('type', 'number');
        expect('settings-toggle').toContainText('Enabled');
        expect('mat-select').toExist();
        // Required field is marked with an asterisk
        expect(spectator.query('label[for="title"]')).toContainText('*');
        expect(spectator.query('label[for="count"]')).not.toContainText('*');
    });

    it('should propagate form value changes to the registered handler', () => {
        const on_change = jest.fn();
        spectator.component.registerOnChange(on_change);
        spectator.setInput({ schema: SCHEMA });
        spectator.typeInElement('New Name', 'input[name="title"]');
        expect(on_change).toHaveBeenCalledWith(
            expect.objectContaining({ title: 'New Name', count: 4 }),
        );
    });

    it('should patch the form when a value is written without emitting', () => {
        const on_change = jest.fn();
        spectator.component.registerOnChange(on_change);
        spectator.setInput({ schema: SCHEMA });
        spectator.component.writeValue({ title: 'Existing', count: 2 });
        expect(spectator.component.defaults_form().value).toMatchObject({
            title: 'Existing',
            count: 2,
        });
        expect(on_change).not.toHaveBeenCalled();
    });

    it('should validate required fields via isValid', () => {
        spectator.setInput({ schema: SCHEMA });
        expect(spectator.component.isValid()).toBe(false);
        spectator.component.defaults_form().patchValue({ title: 'Filled' });
        expect(spectator.component.isValid()).toBe(true);
    });
});
