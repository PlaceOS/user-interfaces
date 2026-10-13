import { Component, inject, signal } from '@angular/core';
import { IconComponent } from '@placeos/components';

import { StoreService } from '../data/store.service';
import { ValidationIssue } from '../data/types';
import { EditorStateService } from './editor-state.service';

@Component({
    selector: 'map-studio-validation-panel',
    template: `
        <div class="flex h-full flex-col">
            <div
                class="border-base-300 flex items-center justify-between border-b px-3 py-2.5"
            >
                <span class="text-xs font-bold">Validation</span>
                <button
                    btn
                    class="min-h-0! px-2! py-1! text-xs"
                    [disabled]="running()"
                    (click)="run()"
                >
                    {{ running() ? 'Running...' : 'Run' }}
                </button>
            </div>

            @if (error(); as message) {
                <div class="bg-error-light text-error px-3 py-2 text-xs">
                    {{ message }}
                </div>
            }

            @if (has_run() && !running()) {
                <div
                    class="border-base-300 flex gap-3 border-b px-3 py-2 text-xs"
                >
                    <span
                        [class]="
                            errorCount()
                                ? 'text-error font-semibold'
                                : 'text-success'
                        "
                    >
                        {{ errorCount() }}
                        {{ errorCount() === 1 ? 'error' : 'errors' }}
                    </span>
                    <span
                        [class]="
                            warningCount()
                                ? 'text-warning font-semibold'
                                : 'text-success'
                        "
                    >
                        {{ warningCount() }}
                        {{ warningCount() === 1 ? 'warning' : 'warnings' }}
                    </span>
                </div>
            }

            <div class="flex-1 overflow-y-auto">
                @if (has_run() && !issues().length && !running()) {
                    <div class="text-success p-6 text-center text-xs">
                        <icon class="mx-auto mb-2 text-3xl">
                            check_circle
                        </icon>
                        No issues found. Floorplan is valid.
                    </div>
                }

                @for (issue of issues(); track $index) {
                    <div
                        class="border-base-300 hover:bg-base-200 flex gap-2 border-b px-3 py-2 text-xs"
                        [class.cursor-pointer]="issue.objectId"
                        (click)="select(issue)"
                        (keyup.enter)="select(issue)"
                        [attr.tabindex]="issue.objectId ? 0 : null"
                        [attr.role]="issue.objectId ? 'button' : null"
                    >
                        <span
                            class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                            [class]="
                                issue.type === 'error'
                                    ? 'bg-error'
                                    : 'bg-warning'
                            "
                        ></span>
                        <div class="min-w-0 flex-1">
                            <div>{{ issue.message }}</div>
                            @if (issue.objectId) {
                                <div class="text-base-content/60 mt-0.5">
                                    Object: {{ issue.objectId.slice(0, 8) }}…
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    `,
    imports: [IconComponent],
})
export class ValidationPanelComponent {
    private readonly _store = inject(StoreService);
    public readonly state = inject(EditorStateService);

    public readonly issues = signal<ValidationIssue[]>([]);
    public readonly running = signal(false);
    public readonly has_run = signal(false);
    public readonly error = signal('');

    public readonly errorCount = () =>
        this.issues().filter((i) => i.type === 'error').length;

    public readonly warningCount = () =>
        this.issues().filter((i) => i.type === 'warning').length;

    public async run() {
        const floorplan = this.state.floorplan();
        if (!floorplan) return;
        this.running.set(true);
        this.error.set('');
        try {
            this.issues.set(await this._store.validateFloorplan(floorplan.id));
            this.has_run.set(true);
        } catch (error) {
            this.error.set(
                error instanceof Error ? error.message : 'Validation failed',
            );
        } finally {
            this.running.set(false);
        }
    }

    public select(issue: ValidationIssue) {
        if (issue.objectId) this.state.select(issue.objectId);
    }
}
