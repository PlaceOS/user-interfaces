import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    forwardRef,
    input,
    OnDestroy,
    signal,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    FormGroup,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Subscription } from 'rxjs';
import { SettingsToggleComponent } from './settings-toggle.component';

/** A loosely-typed record for JSON Schema objects. */
type JsonSchema = Record<string, unknown>;

/** Describes a single field derived from a JSON Schema property. */
export interface SchemaField {
    key: string;
    type: 'string' | 'number' | 'boolean' | 'select';
    label: string;
    description: string;
    required: boolean;
    default_value: unknown;
    options?: { label: string; value: unknown }[];
}

/**
 * Parses a JSON Schema `properties` block into a flat list of form fields.
 * Supports string, number/integer, boolean, and string enums.
 */
export function parseSchemaFields(schema: JsonSchema): SchemaField[] {
    if (!schema?.properties) return [];
    const required_keys: string[] = (schema.required as string[]) || [];
    const properties = schema.properties as Record<string, JsonSchema>;
    return Object.entries(properties).map(([key, prop]) => {
        const json_type = prop.type as string;
        const has_enum = Array.isArray(prop.enum);
        let type: SchemaField['type'] = 'string';
        if (has_enum) {
            type = 'select';
        } else if (json_type === 'boolean') {
            type = 'boolean';
        } else if (json_type === 'number' || json_type === 'integer') {
            type = 'number';
        }
        const options = has_enum
            ? (prop.enum as unknown[]).map((v) => ({
                  label: String(v),
                  value: v,
              }))
            : undefined;
        return {
            key,
            type,
            label: (prop.title as string) || key,
            description: (prop.description as string) || '',
            required: required_keys.includes(key),
            default_value: prop.default ?? null,
            options,
        };
    });
}

/**
 * Builds a reactive FormGroup from parsed schema fields and optional
 * existing default values.
 */
export function buildFormFromFields(
    fields: SchemaField[],
    defaults: Record<string, unknown> = {},
): FormGroup {
    const controls: Record<string, FormControl> = {};
    for (const field of fields) {
        const value = defaults[field.key] ?? field.default_value ?? null;
        const validators = field.required ? [Validators.required] : [];
        controls[field.key] = new FormControl(value, validators);
    }
    return new FormGroup(controls);
}

@Component({
    selector: 'schema-form',
    template: `
        @if (defaults_form()) {
            <div class="flex flex-col gap-2" [formGroup]="defaults_form()">
                @for (field of fields(); track field.key) {
                    @switch (field.type) {
                        @case ('boolean') {
                            <settings-toggle [formControlName]="field.key">
                                {{ field.label }}
                            </settings-toggle>
                            @if (field.description) {
                                <p class="mt-0 text-xs opacity-60">
                                    {{ field.description }}
                                </p>
                            }
                        }
                        @case ('select') {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <mat-select [formControlName]="field.key">
                                        @for (
                                            opt of field.options;
                                            track opt.value
                                        ) {
                                            <mat-option [value]="opt.value">
                                                {{ opt.label }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        @case ('number') {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        [formControlName]="field.key"
                                        [name]="field.key"
                                        [placeholder]="field.label"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @default {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        [formControlName]="field.key"
                                        [name]="field.key"
                                        [placeholder]="field.label"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    }
                }
            </div>
        }
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SchemaFormComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        SettingsToggleComponent,
    ],
})
export class SchemaFormComponent implements ControlValueAccessor, OnDestroy {
    public readonly schema = input<JsonSchema>(null);

    public readonly fields = computed(() => {
        const s = this.schema();
        return s ? parseSchemaFields(s) : [];
    });

    public readonly defaults_form = signal<FormGroup>(null);

    private _on_change: (value: Record<string, unknown>) => void;
    private _on_touch: () => void;
    private _form_sub: Subscription;
    private _value: Record<string, unknown> = {};

    constructor() {
        effect(() => {
            const schema_fields = this.fields();
            if (!schema_fields.length) {
                this._teardown();
                this.defaults_form.set(null);
                return;
            }
            this._teardown();
            const form = buildFormFromFields(schema_fields, this._value);
            this.defaults_form.set(form);
            this._form_sub = form.valueChanges.subscribe((val) => {
                this._value = val;
                this._on_change?.(val);
            });
        });
    }

    public writeValue(value: Record<string, unknown>): void {
        this._value = value || {};
        const form = this.defaults_form();
        if (form) {
            form.patchValue(this._value, { emitEvent: false });
        }
    }

    public registerOnChange(
        fn: (value: Record<string, unknown>) => void,
    ): void {
        this._on_change = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this._on_touch = fn;
    }

    public ngOnDestroy(): void {
        this._teardown();
    }

    /** Returns true if the generated defaults form is valid. */
    public isValid(): boolean {
        const form = this.defaults_form();
        if (!form) return true;
        form.markAllAsTouched();
        return form.valid;
    }

    private _teardown(): void {
        this._form_sub?.unsubscribe();
        this._form_sub = null;
    }
}
