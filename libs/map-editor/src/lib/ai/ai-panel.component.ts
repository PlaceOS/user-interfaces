import { NgTemplateOutlet } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    input,
    OnDestroy,
    OnInit,
    signal,
    untracked,
} from '@angular/core';
import { MapAiTransport } from './api';
import { Proposal, ProposalGroup, ProposalRow } from './proposal';
import { MapEditorSessionLike } from './session-contract';
import { MapAiPhase, MapAiState, ThreadTurn } from './state';
import {
    DEFAULT_AI_STRINGS,
    format,
    MapEditorAiStringsOverride,
} from './strings';
import { MapAiThread, UploadPort } from './thread';

/** Markup over this size is not drawn as a thumbnail. */
const THUMBNAIL_MAX_BYTES = 1_500_000;
/** After this long the running card shows the elapsed time. */
const LONG_RUNNING_S = 10;

interface Thumbnails {
    before: string | null;
    after: string | null;
}

function objectUrl(markup: string | null | undefined): string | null {
    if (!markup || markup.length > THUMBNAIL_MAX_BYTES) return null;
    if (typeof URL === 'undefined' || typeof URL.createObjectURL !== 'function')
        return null;
    try {
        return URL.createObjectURL(
            new Blob([markup], { type: 'image/svg+xml' }),
        );
    } catch {
        return null;
    }
}

function revokeUrl(url: string | null): void {
    if (url && typeof URL.revokeObjectURL === 'function')
        URL.revokeObjectURL(url);
}

const IDLE: MapAiPhase = { kind: 'idle' };

/**
 * The AI tab of the map editor: capabilities at the top, the thread of
 * requests and proposals, the composer at the bottom. A proposal that
 * validates is previewed on the map at once; the card offers Keep and Undo.
 */
@Component({
    selector: 'map-editor-ai-panel',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        @if (thread(); as t) {
            @if (!hidden()) {
                <div
                    class="flex h-full min-h-0 flex-col text-sm"
                    [attr.aria-busy]="t.busy()"
                >
                    @switch (phase().kind) {
                        @case ('idle') {
                            <p class="p-3 text-xs opacity-70">
                                {{ t.strings.checking }}
                            </p>
                        }
                        @case ('checking') {
                            <p class="p-3 text-xs opacity-70" role="status">
                                {{ t.strings.checking }}
                            </p>
                        }
                        @case ('unavailable') {
                            <p class="p-3 text-xs" role="status" unavailable>
                                {{ unavailableText() }}
                            </p>
                        }
                        @default {
                            <header
                                class="border-base-300 space-y-0.5 border-b px-3 py-2 text-xs"
                                capabilities
                            >
                                <h2 class="text-sm font-medium">
                                    {{ t.strings.title }}
                                </h2>
                                @if (model_note()) {
                                    <p model-note>{{ model_note() }}</p>
                                }
                                @if (quota_note()) {
                                    <p class="opacity-70" quota-note>
                                        {{ quota_note() }}
                                    </p>
                                }
                                @if (t.quota_block(); as block) {
                                    <p
                                        class="text-error"
                                        role="status"
                                        quota-block
                                    >
                                        {{ block }}
                                    </p>
                                }
                            </header>
                            <ol
                                class="min-h-0 flex-1 space-y-3 overflow-auto px-3 py-2"
                                [attr.aria-label]="t.strings.title"
                                thread
                            >
                                @for (turn of t.turns(); track turn.id) {
                                    @switch (turn.kind) {
                                        @case ('person') {
                                            <li class="ml-6" person-turn>
                                                <p
                                                    class="bg-base-200 rounded-lg px-3 py-2 whitespace-pre-wrap"
                                                >
                                                    {{ turn.instruction }}
                                                </p>
                                                @if (personMeta(turn)) {
                                                    <p
                                                        class="mt-0.5 text-xs opacity-70"
                                                    >
                                                        {{ personMeta(turn) }}
                                                    </p>
                                                }
                                            </li>
                                        }
                                        @case ('status') {
                                            <li
                                                class="rounded-lg border px-3 py-2"
                                                [class.border-error]="
                                                    turn.error
                                                "
                                                role="status"
                                                status-turn
                                            >
                                                {{ turn.text }}
                                                @if (
                                                    turn.error?.retryable &&
                                                    isLastTurn(turn)
                                                ) {
                                                    <button
                                                        type="button"
                                                        class="ml-2 underline"
                                                        retry
                                                        (click)="retry()"
                                                    >
                                                        {{ t.strings.retry }}
                                                    </button>
                                                }
                                            </li>
                                        }
                                        @case ('proposal') {
                                            <li
                                                class="border-base-300 rounded-lg border"
                                                [class.opacity-60]="
                                                    !isActive(turn)
                                                "
                                                proposal-card
                                                [attr.data-job]="turn.job_id"
                                            >
                                                <header
                                                    class="flex items-center justify-between gap-2 px-3 py-2"
                                                >
                                                    <strong card-title>{{
                                                        cardTitle(turn.proposal)
                                                    }}</strong>
                                                    <span
                                                        class="text-xs opacity-70"
                                                        outcome
                                                    >
                                                        {{ outcomeText(turn) }}
                                                    </span>
                                                </header>
                                                @if (turn.proposal.summary) {
                                                    <p
                                                        class="px-3 pb-2 text-xs"
                                                        summary
                                                    >
                                                        {{
                                                            turn.proposal
                                                                .summary
                                                        }}
                                                    </p>
                                                }
                                                @for (
                                                    question of turn.proposal
                                                        .questions;
                                                    track question
                                                ) {
                                                    <p
                                                        class="bg-base-200 mx-3 mb-2 rounded px-2 py-1"
                                                        question
                                                    >
                                                        {{ question }}
                                                    </p>
                                                }
                                                @if (
                                                    verdictText(turn.proposal);
                                                    as text
                                                ) {
                                                    <p
                                                        class="px-3 pb-2 text-xs"
                                                        role="status"
                                                        verdict
                                                    >
                                                        {{ text }}
                                                    </p>
                                                }
                                                @for (
                                                    issue of turn.proposal
                                                        .batch_issues;
                                                    track $index
                                                ) {
                                                    <p
                                                        class="px-3 pb-1 text-xs"
                                                        [class.text-error]="
                                                            issue.level ===
                                                            'error'
                                                        "
                                                        batch-issue
                                                    >
                                                        {{ issue.message }}
                                                    </p>
                                                }
                                                @if (
                                                    isActive(turn) &&
                                                    (thumbnails().before ||
                                                        thumbnails().after)
                                                ) {
                                                    <div
                                                        class="flex gap-2 px-3 pb-2"
                                                        thumbnails
                                                    >
                                                        @if (
                                                            thumbnails().before;
                                                            as before
                                                        ) {
                                                            <figure
                                                                class="min-w-0 flex-1"
                                                            >
                                                                <img
                                                                    class="border-base-300 w-full border bg-white"
                                                                    [src]="
                                                                        before
                                                                    "
                                                                    [alt]="
                                                                        t
                                                                            .strings
                                                                            .before
                                                                    "
                                                                />
                                                                <figcaption
                                                                    class="text-center text-xs"
                                                                >
                                                                    {{
                                                                        t
                                                                            .strings
                                                                            .before
                                                                    }}
                                                                </figcaption>
                                                            </figure>
                                                        }
                                                        @if (
                                                            thumbnails().after;
                                                            as after
                                                        ) {
                                                            <figure
                                                                class="min-w-0 flex-1"
                                                            >
                                                                <img
                                                                    class="border-base-300 w-full border bg-white"
                                                                    [src]="
                                                                        after
                                                                    "
                                                                    [alt]="
                                                                        t
                                                                            .strings
                                                                            .after
                                                                    "
                                                                />
                                                                <figcaption
                                                                    class="text-center text-xs"
                                                                >
                                                                    {{
                                                                        t
                                                                            .strings
                                                                            .after
                                                                    }}
                                                                </figcaption>
                                                            </figure>
                                                        }
                                                    </div>
                                                }
                                                @if (
                                                    turn.proposal.groups;
                                                    as groups
                                                ) {
                                                    @for (
                                                        group of groups;
                                                        track group.key
                                                    ) {
                                                        <div
                                                            class="px-3 pb-1"
                                                            row-group
                                                        >
                                                            <div
                                                                class="flex items-center gap-2"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    [id]="
                                                                        turn.id +
                                                                        '-' +
                                                                        group.key
                                                                    "
                                                                    [checked]="
                                                                        group.checked ===
                                                                        'all'
                                                                    "
                                                                    [indeterminate]="
                                                                        group.checked ===
                                                                        'some'
                                                                    "
                                                                    [disabled]="
                                                                        group.locked ||
                                                                        !isActive(
                                                                            turn
                                                                        )
                                                                    "
                                                                    (change)="
                                                                        onGroup(
                                                                            group,
                                                                            $event
                                                                        )
                                                                    "
                                                                />
                                                                <label
                                                                    [for]="
                                                                        turn.id +
                                                                        '-' +
                                                                        group.key
                                                                    "
                                                                >
                                                                    {{
                                                                        group.label
                                                                    }}
                                                                </label>
                                                                <button
                                                                    type="button"
                                                                    class="text-xs underline"
                                                                    [attr.aria-expanded]="
                                                                        open_groups().has(
                                                                            group.key
                                                                        )
                                                                    "
                                                                    (click)="
                                                                        toggleGroupOpen(
                                                                            group.key
                                                                        )
                                                                    "
                                                                >
                                                                    {{
                                                                        open_groups().has(
                                                                            group.key
                                                                        )
                                                                            ? t
                                                                                  .strings
                                                                                  .hide_group
                                                                            : t
                                                                                  .strings
                                                                                  .show_group
                                                                    }}
                                                                </button>
                                                            </div>
                                                            @if (
                                                                open_groups().has(
                                                                    group.key
                                                                )
                                                            ) {
                                                                <ul
                                                                    class="ml-5"
                                                                >
                                                                    @for (
                                                                        row of rowsOf(
                                                                            turn.proposal,
                                                                            group
                                                                        );
                                                                        track row.id
                                                                    ) {
                                                                        <ng-container
                                                                            *ngTemplateOutlet="
                                                                                row_template;
                                                                                context: {
                                                                                    $implicit:
                                                                                        row,
                                                                                    turn: turn,
                                                                                }
                                                                            "
                                                                        />
                                                                    }
                                                                </ul>
                                                            }
                                                        </div>
                                                    }
                                                } @else {
                                                    <ul class="px-3 pb-2" rows>
                                                        @for (
                                                            row of turn.proposal
                                                                .rows;
                                                            track row.id
                                                        ) {
                                                            <ng-container
                                                                *ngTemplateOutlet="
                                                                    row_template;
                                                                    context: {
                                                                        $implicit:
                                                                            row,
                                                                        turn: turn,
                                                                    }
                                                                "
                                                            />
                                                        }
                                                    </ul>
                                                }
                                                @if (
                                                    isActive(turn) &&
                                                    showsDecision()
                                                ) {
                                                    <div
                                                        class="flex flex-wrap items-center gap-2 px-3 pb-2"
                                                        decision
                                                    >
                                                        @if (
                                                            phase().kind ===
                                                            'applied'
                                                        ) {
                                                            <button
                                                                type="button"
                                                                class="bg-primary rounded px-3 py-1 text-white"
                                                                keep
                                                                (click)="keep()"
                                                            >
                                                                {{
                                                                    t.strings
                                                                        .keep
                                                                }}
                                                            </button>
                                                        }
                                                        <button
                                                            type="button"
                                                            class="border-base-300 rounded border px-3 py-1"
                                                            undo
                                                            (click)="undo()"
                                                        >
                                                            {{ t.strings.undo }}
                                                        </button>
                                                    </div>
                                                    <div
                                                        class="px-3 pb-2 text-xs"
                                                        reasons
                                                    >
                                                        <span
                                                            class="opacity-70"
                                                            >{{
                                                                t.strings
                                                                    .reason_prompt
                                                            }}</span
                                                        >
                                                        @for (
                                                            chip of reason_chips();
                                                            track chip.key
                                                        ) {
                                                            <button
                                                                type="button"
                                                                class="border-base-300 ml-1 rounded-full border px-2 py-0.5"
                                                                [class.bg-base-200]="
                                                                    hasReason(
                                                                        chip.key
                                                                    )
                                                                "
                                                                [attr.aria-pressed]="
                                                                    hasReason(
                                                                        chip.key
                                                                    )
                                                                "
                                                                reason
                                                                (click)="
                                                                    t.toggleReason(
                                                                        chip.key
                                                                    )
                                                                "
                                                            >
                                                                {{ chip.label }}
                                                            </button>
                                                        }
                                                    </div>
                                                }
                                            </li>
                                        }
                                    }
                                }
                                @if (phase().kind === 'running') {
                                    <li
                                        class="border-base-300 flex items-center gap-2 rounded-lg border px-3 py-2"
                                        role="status"
                                        running
                                    >
                                        <span
                                            class="spinner"
                                            aria-hidden="true"
                                        ></span>
                                        <span class="flex-1">{{
                                            running_text()
                                        }}</span>
                                        <button
                                            type="button"
                                            class="underline"
                                            cancel
                                            [disabled]="cancelling()"
                                            (click)="cancel()"
                                        >
                                            {{
                                                cancelling()
                                                    ? t.strings.cancelling
                                                    : t.strings.cancel
                                            }}
                                        </button>
                                    </li>
                                }
                            </ol>
                            <form
                                class="border-base-300 space-y-2 border-t px-3 py-2"
                                composer
                                (submit)="send($event)"
                            >
                                <label
                                    class="text-xs font-medium"
                                    for="map-editor-ai-draft"
                                >
                                    {{ t.strings.composer_label }}
                                </label>
                                <textarea
                                    id="map-editor-ai-draft"
                                    class="border-base-300 w-full rounded border px-2 py-1"
                                    rows="4"
                                    [value]="draft()"
                                    [placeholder]="placeholder()"
                                    [disabled]="!t.can_send()"
                                    [attr.aria-invalid]="too_long()"
                                    (input)="onDraft($event)"
                                    (keydown)="onKeydown($event)"
                                ></textarea>
                                <div
                                    class="flex flex-wrap items-center gap-2 text-xs"
                                    chips
                                >
                                    @if (selection_count() > 0) {
                                        <span
                                            class="bg-base-200 inline-flex items-center gap-1 rounded-full px-2 py-0.5"
                                            selection-chip
                                        >
                                            {{ selectionText() }}
                                            <button
                                                type="button"
                                                [attr.aria-label]="
                                                    t.strings.clear_selection
                                                "
                                                (click)="clearSelection()"
                                            >
                                                &times;
                                            </button>
                                        </span>
                                    }
                                    @if (upload()) {
                                        <button
                                            type="button"
                                            class="border-base-300 rounded-full border px-2 py-0.5"
                                            [class.bg-base-200]="snapshotOn()"
                                            role="switch"
                                            [attr.aria-checked]="snapshotOn()"
                                            snapshot-toggle
                                            (click)="toggleSnapshot()"
                                        >
                                            {{ t.strings.snapshot_toggle }}
                                        </button>
                                    }
                                    @if (chars_note()) {
                                        <span
                                            class="ml-auto opacity-70"
                                            [class.text-error]="too_long()"
                                            chars
                                        >
                                            {{ chars_note() }}
                                        </span>
                                    }
                                </div>
                                <div
                                    class="flex items-center justify-end gap-2"
                                >
                                    @if (t.turns().length) {
                                        <button
                                            type="button"
                                            class="text-xs underline"
                                            new-request
                                            (click)="newRequest()"
                                        >
                                            {{ t.strings.new_request }}
                                        </button>
                                    }
                                    <button
                                        type="submit"
                                        class="bg-primary rounded px-3 py-1 text-white disabled:opacity-50"
                                        send
                                        [disabled]="!can_send()"
                                    >
                                        {{ t.strings.send }}
                                    </button>
                                </div>
                            </form>
                        }
                    }
                </div>
            }
            <div
                class="sr-only"
                role="status"
                aria-live="polite"
                aria-atomic="true"
                live
            >
                {{ t.announcement() }}
            </div>
        }

        <ng-template #row_template let-row let-turn="turn">
            <li
                class="flex items-start gap-2 py-0.5"
                row
                [attr.data-category]="row.category"
                [attr.data-index]="row.index"
                (mouseenter)="hoverRow(row)"
                (mouseleave)="hoverRow(null)"
                (focusin)="hoverRow(row)"
                (focusout)="hoverRow(null)"
            >
                @if (row.actionable) {
                    <input
                        type="checkbox"
                        class="mt-1"
                        [id]="turn.id + '-' + row.id"
                        [checked]="row.checked"
                        [disabled]="row.locked || !isActive(turn)"
                        [attr.aria-describedby]="
                            turn.id + '-' + row.id + '-notes'
                        "
                        (change)="onRow(row, $event)"
                    />
                } @else {
                    <span
                        class="mt-1 inline-block w-3.5"
                        aria-hidden="true"
                    ></span>
                }
                <span
                    class="glyph w-3 text-center font-mono"
                    aria-hidden="true"
                    >{{ row.glyph }}</span
                >
                <span class="sr-only">{{ categoryWord(row) }}</span>
                <span class="min-w-0 flex-1">
                    <span class="mr-1 text-xs opacity-70">{{
                        row.kind_word
                    }}</span>
                    <button
                        type="button"
                        class="text-left hover:underline"
                        row-text
                        (click)="selectRow(row)"
                    >
                        {{ row.text }}
                    </button>
                    <span
                        class="block text-xs"
                        [id]="turn.id + '-' + row.id + '-notes'"
                    >
                        @if (row.actionable && row.locked) {
                            <span class="text-error mr-1" locked>{{
                                words().locked_note
                            }}</span>
                        }
                        @if (row.depends_on.length) {
                            <span class="mr-1 opacity-70" needs>{{
                                needsText(row)
                            }}</span>
                        }
                        @if (row.note) {
                            <span class="mr-1 opacity-70">{{ row.note }}</span>
                        }
                        @for (issue of row.issues; track $index) {
                            <span
                                class="mr-1"
                                [class.text-error]="issue.level === 'error'"
                                [class.text-warning]="issue.level === 'warning'"
                                issue
                            >
                                {{ issue.message }}
                            </span>
                        }
                    </span>
                </span>
            </li>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                min-height: 0;
            }
            [row][data-category='added'] .glyph {
                color: #16a34a;
            }
            [row][data-category='changed'] .glyph {
                color: #2563eb;
            }
            [row][data-category='removed'] .glyph {
                color: #dc2626;
            }
            [row][data-category='question'] .glyph {
                color: #d97706;
            }
            .spinner {
                width: 1rem;
                height: 1rem;
                border-radius: 9999px;
                border: 2px solid currentColor;
                border-right-color: transparent;
                animation: map-editor-ai-spin 0.8s linear infinite;
            }
            @keyframes map-editor-ai-spin {
                to {
                    transform: rotate(360deg);
                }
            }
            @media (prefers-reduced-motion: reduce) {
                .spinner {
                    animation: none;
                }
            }
        `,
    ],
    imports: [NgTemplateOutlet],
})
export class MapEditorAiPanelComponent implements OnInit, OnDestroy {
    public readonly session = input.required<MapEditorSessionLike>();
    public readonly zone_id = input.required<string>();
    /** Stores the snapshot and answers with its upload id; without it no picture is sent. */
    public readonly upload = input<UploadPort | null>(null);
    public readonly strings = input<MapEditorAiStringsOverride | null>(null);
    public readonly transport = input<MapAiTransport | undefined>(undefined);

    public readonly thread = signal<MapAiThread | null>(null);
    public readonly draft = signal('');
    public readonly open_groups = signal<ReadonlySet<string>>(new Set());
    public readonly thumbnails = signal<Thumbnails>({
        before: null,
        after: null,
    });
    public readonly elapsed_s = signal(0);

    public readonly state = computed<MapAiState | null>(
        () => this.thread()?.state() ?? null,
    );
    public readonly words = computed(
        () => this.thread()?.strings ?? DEFAULT_AI_STRINGS,
    );
    public readonly phase = computed<MapAiPhase>(
        () => this.state()?.phase ?? IDLE,
    );
    /** The host hides the panel: the deployment has no map AI. */
    public readonly hidden = computed(() => {
        const phase = this.phase();
        return phase.kind === 'unavailable' && phase.hidden;
    });
    public readonly selection_count = computed(
        () => this.session().selection().length,
    );
    public readonly limits = computed(
        () => this.state()?.capabilities?.limits ?? null,
    );
    public readonly model_note = computed(() => {
        const thread = this.thread();
        const capabilities = thread?.capabilities();
        if (!thread || !capabilities?.enabled) return '';
        const provider =
            capabilities.providers.find(
                (candidate) =>
                    candidate.id === capabilities.default_provider_id,
            ) ?? capabilities.providers[0];
        return provider
            ? format(thread.strings.model_note, {
                  model: provider.text_model,
                  provider: provider.name,
              })
            : '';
    });
    public readonly quota_note = computed(() => {
        const thread = this.thread();
        const quota = thread?.capabilities()?.quota;
        if (!thread || !quota) return '';
        const notes: string[] = [];
        if (typeof quota.user_remaining_today === 'number') {
            notes.push(
                format(thread.strings.quota_note, {
                    count: quota.user_remaining_today,
                }),
            );
        }
        if (typeof quota.domain_remaining_month === 'number') {
            notes.push(
                format(thread.strings.quota_domain_note, {
                    count: quota.domain_remaining_month,
                }),
            );
        }
        return notes.join(' · ');
    });
    public readonly chars_note = computed(() => {
        const thread = this.thread();
        const max = this.limits()?.max_instruction_chars;
        return thread && max
            ? format(thread.strings.chars, {
                  used: this.draft().length,
                  max,
              })
            : '';
    });
    public readonly too_long = computed(() => {
        const max = this.limits()?.max_instruction_chars;
        return !!max && this.draft().length > max;
    });
    public readonly can_send = computed(() => {
        const thread = this.thread();
        return (
            !!thread &&
            thread.can_send() &&
            this.draft().trim().length > 0 &&
            !this.too_long()
        );
    });
    public readonly placeholder = computed(() => {
        const thread = this.thread();
        if (!thread) return '';
        return thread.proposal()?.verdict === 'questions'
            ? thread.strings.reply_placeholder
            : thread.strings.composer_placeholder;
    });
    public readonly cancelling = computed(() => {
        const phase = this.phase();
        return phase.kind === 'running' && phase.cancelling;
    });
    public readonly running_text = computed(() => {
        const thread = this.thread();
        if (!thread || this.phase().kind !== 'running') return '';
        const seconds = this.elapsed_s();
        return seconds >= LONG_RUNNING_S
            ? format(thread.strings.running_long, { seconds })
            : thread.strings.running;
    });
    public readonly reason_chips = computed(() => {
        const thread = this.thread();
        if (!thread) return [];
        return Object.entries(thread.strings.reasons).map(([key, label]) => ({
            key,
            label,
        }));
    });
    public readonly active_job_id = computed(
        () => this.thread()?.proposal()?.job.id ?? null,
    );
    public readonly snapshotOn = computed(
        () => this.state()?.snapshot_on ?? false,
    );
    public readonly selectionText = computed(() => {
        const thread = this.thread();
        return thread
            ? format(thread.strings.selection_chip, {
                  count: this.selection_count(),
              })
            : '';
    });
    public readonly unavailableText = computed(() => {
        const thread = this.thread();
        const phase = this.phase();
        if (!thread || phase.kind !== 'unavailable') return '';
        return format(thread.strings.unavailable, { reason: phase.reason });
    });
    public readonly showsDecision = computed(() => {
        const phase = this.phase();
        if (phase.kind === 'applied') return true;
        return (
            phase.kind === 'reviewing' &&
            !phase.validating &&
            phase.proposal.rows.some((row) => row.actionable)
        );
    });

    constructor() {
        effect((onCleanup) => {
            const proposal = this.thread()?.proposal() ?? null;
            const thumbnails: Thumbnails = {
                before: objectUrl(proposal?.before_markup),
                after: objectUrl(proposal?.trial_markup),
            };
            untracked(() => this.thumbnails.set(thumbnails));
            onCleanup(() => {
                revokeUrl(thumbnails.before);
                revokeUrl(thumbnails.after);
            });
        });
        effect((onCleanup) => {
            const phase = this.phase();
            if (phase.kind !== 'running') {
                untracked(() => this.elapsed_s.set(0));
                return;
            }
            const started = phase.started_at;
            const tick = () =>
                this.elapsed_s.set(
                    Math.max(0, Math.floor((Date.now() - started) / 1000)),
                );
            untracked(tick);
            const timer = setInterval(tick, 1000);
            onCleanup(() => clearInterval(timer));
        });
    }

    public ngOnInit(): void {
        const thread = new MapAiThread(this.session(), this.zone_id(), {
            transport: this.transport(),
            upload: this.upload(),
            strings: this.strings(),
        });
        this.thread.set(thread);
        void thread.load();
    }

    public ngOnDestroy(): void {
        this.thread()?.dispose();
    }

    public onDraft(event: Event): void {
        const value = (event.target as HTMLTextAreaElement).value;
        this.draft.set(value);
        this.thread()?.setDraft(value);
    }

    public onKeydown(event: KeyboardEvent): void {
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            event.preventDefault();
            void this.send();
        }
    }

    public async send(event?: Event): Promise<void> {
        event?.preventDefault();
        const thread = this.thread();
        if (!thread || !this.can_send()) return;
        const text = this.draft();
        this.draft.set('');
        await thread.submit(text);
    }

    public retry(): void {
        void this.thread()?.retry();
    }

    public cancel(): void {
        void this.thread()?.cancel();
    }

    public keep(): void {
        void this.thread()?.keep();
    }

    public undo(): void {
        void this.thread()?.undo();
    }

    public newRequest(): void {
        this.thread()?.reset();
        this.draft.set('');
    }

    public clearSelection(): void {
        this.session().select([]);
    }

    public toggleSnapshot(): void {
        const thread = this.thread();
        if (thread) thread.setSnapshot(!thread.state().snapshot_on);
    }

    public hasReason(key: string): boolean {
        return this.state()?.reasons.includes(key) ?? false;
    }

    public isActive(turn: ThreadTurn): boolean {
        return turn.kind === 'proposal' && turn.job_id === this.active_job_id();
    }

    public isLastTurn(turn: ThreadTurn): boolean {
        const turns = this.thread()?.turns() ?? [];
        return turns[turns.length - 1]?.id === turn.id;
    }

    public onRow(row: ProposalRow, event: Event): void {
        void this.thread()?.toggle(
            row.index,
            (event.target as HTMLInputElement).checked,
        );
    }

    public onGroup(group: ProposalGroup, event: Event): void {
        void this.thread()?.toggleGroup(
            group,
            (event.target as HTMLInputElement).checked,
        );
    }

    public toggleGroupOpen(key: string): void {
        this.open_groups.update((open) => {
            const next = new Set(open);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    }

    public rowsOf(proposal: Proposal, group: ProposalGroup): ProposalRow[] {
        return group.indices
            .map((index) => proposal.rows[index])
            .filter((row): row is ProposalRow => !!row);
    }

    public hoverRow(row: ProposalRow | null): void {
        this.thread()?.hoverRow(row);
    }

    public selectRow(row: ProposalRow): void {
        this.thread()?.selectRow(row);
    }

    public categoryWord(row: ProposalRow): string {
        return this.thread()?.strings.categories[row.category] ?? row.category;
    }

    public needsText(row: ProposalRow): string {
        const thread = this.thread();
        if (!thread) return '';
        return row.depends_on
            .map((index) => format(thread.strings.needs, { n: index + 1 }))
            .join(', ');
    }

    public cardTitle(proposal: Proposal): string {
        const thread = this.thread();
        if (!thread) return '';
        if (proposal.verdict === 'questions')
            return thread.strings.questions_title;
        return format(thread.strings.proposal_title, {
            count: proposal.rows.filter((row) => row.actionable).length,
        });
    }

    public verdictText(proposal: Proposal): string {
        const thread = this.thread();
        if (!thread) return '';
        const states = thread.strings.states;
        switch (proposal.verdict) {
            case 'empty':
                return format(states.empty, {
                    summary: proposal.summary || '-',
                });
            case 'blocked':
                return states.blocked;
            case 'nothing_accepted':
                return states.nothing_accepted;
            case 'questions':
                return '';
            default:
                return proposal.invalid_count
                    ? format(states.partially_invalid, {
                          count: proposal.rows.filter((row) => row.actionable)
                              .length,
                          invalid: proposal.invalid_count,
                      })
                    : '';
        }
    }

    public outcomeText(turn: ThreadTurn): string {
        const thread = this.thread();
        if (!thread || turn.kind !== 'proposal') return '';
        const outcomes = thread.strings.outcomes;
        switch (turn.outcome) {
            case 'partial': {
                const total = turn.proposal.rows.filter(
                    (row) => row.actionable,
                ).length;
                return format(outcomes.partial, {
                    accepted: turn.proposal.accepted.length,
                    total,
                });
            }
            case 'refined':
            case 'abandoned':
                return outcomes.kept;
            default:
                return outcomes[turn.outcome] ?? '';
        }
    }

    public personMeta(turn: ThreadTurn): string {
        const thread = this.thread();
        if (!thread || turn.kind !== 'person') return '';
        const parts: string[] = [];
        if (turn.selected)
            parts.push(
                format(thread.strings.selection_chip, { count: turn.selected }),
            );
        if (turn.snapshot) parts.push(thread.strings.snapshot_toggle);
        return parts.join(' · ');
    }
}
