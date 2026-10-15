import { NgTemplateOutlet } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    ElementRef,
    input,
    OnDestroy,
    OnInit,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import { MapAiTransport } from './api';
import { Proposal, ProposalGroup, ProposalRow } from './proposal';
import { OpCategory } from './describe';
import { PANEL_ICONS } from './panel-icons';
import { previewSummary } from './preview';
import { MapEditorSessionLike } from './session-contract';
import { MapAiPhase, MapAiState, modelKey, ThreadTurn } from './state';
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
/** The rows of one change category, in proposal order, with a group when the section is tickable as a whole. */
export interface PanelSection {
    key: OpCategory;
    label: string;
    rows: ProposalRow[];
    group: ProposalGroup | null;
}

const SECTION_ORDER: readonly OpCategory[] = [
    'added',
    'changed',
    'removed',
    'question',
    'none',
];

@Component({
    selector: 'map-editor-ai-panel',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        @if (thread(); as t) {
            @if (!hidden()) {
                <div
                    class="panel"
                    [attr.aria-busy]="t.busy()"
                >
                    @switch (phase().kind) {
                        @case ('idle') {
                            <p class="note">{{ t.strings.checking }}</p>
                        }
                        @case ('checking') {
                            <p class="note" role="status">
                                {{ t.strings.checking }}
                            </p>
                        }
                        @case ('unavailable') {
                            <p class="note" role="status" unavailable>
                                {{ unavailableText() }}
                            </p>
                        }
                        @default {
                            <header class="head" capabilities>
                                <h2>{{ t.strings.title }}</h2>
                                @if (model_options().length > 1) {
                                    <label class="model" model-choice>
                                        <span class="muted">
                                            {{ t.strings.model_label }}
                                        </span>
                                        <select
                                            [value]="model_key()"
                                            (change)="chooseModel($event)"
                                        >
                                            @for (
                                                option of model_options();
                                                track option.key
                                            ) {
                                                <option
                                                    [value]="option.key"
                                                    [selected]="
                                                        option.key ===
                                                        model_key()
                                                    "
                                                >
                                                    {{ option.model }} ·
                                                    {{ option.provider_name }}
                                                </option>
                                            }
                                        </select>
                                    </label>
                                } @else if (model_note()) {
                                    <p model-note>{{ model_note() }}</p>
                                }
                                @if (quota_note()) {
                                    <p class="muted" quota-note>
                                        {{ quota_note() }}
                                    </p>
                                }
                                @if (t.quota_block(); as block) {
                                    <p
                                        class="error"
                                        role="status"
                                        quota-block
                                    >
                                        {{ block }}
                                    </p>
                                }
                            </header>
                            @if (!t.turns().length && phase().kind !== 'running') {
                                <ng-container
                                    *ngTemplateOutlet="
                                        composer_template;
                                        context: { $implicit: t, first: true }
                                    "
                                />
                            }
                            <ol
                                #threadList
                                class="thread"
                                [class.empty]="!t.turns().length"
                                [attr.aria-label]="t.strings.title"
                                thread
                            >
                                @for (turn of t.turns(); track turn.id) {
                                    @switch (turn.kind) {
                                        @case ('person') {
                                            <li class="person" person-turn>
                                                <p class="bubble">
                                                    {{ turn.instruction }}
                                                </p>
                                                @if (personMeta(turn)) {
                                                    <p class="meta muted">
                                                        {{ personMeta(turn) }}
                                                    </p>
                                                }
                                            </li>
                                        }
                                        @case ('status') {
                                            <li
                                                class="status"
                                                [class.failed]="turn.error"
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
                                                        class="link"
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
                                                class="proposal"
                                                [class.inactive]="
                                                    !isActive(turn)
                                                "
                                                proposal-card
                                                [attr.data-job]="turn.job_id"
                                            >
                                                <header class="title-row">
                                                    <strong card-title>{{
                                                        cardTitle(turn.proposal)
                                                    }}</strong>
                                                    <span
                                                        class="muted"
                                                        outcome
                                                    >
                                                        {{ outcomeText(turn) }}
                                                    </span>
                                                </header>
                                                @if (turn.proposal.summary) {
                                                    <p
                                                        class="summary"
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
                                                        class="question"
                                                        question
                                                    >
                                                        {{ question }}
                                                    </p>
                                                }
                                                @if (
                                                    turn.proposal.questions
                                                        .length
                                                ) {
                                                    <p
                                                        class="small muted"
                                                        hint
                                                    >
                                                        {{
                                                            t.strings
                                                                .questions_hint
                                                        }}
                                                    </p>
                                                }
                                                @if (
                                                    verdictText(turn.proposal);
                                                    as text
                                                ) {
                                                    <p
                                                        class="verdict"
                                                        role="status"
                                                        verdict
                                                    >
                                                        @if (
                                                            turn.proposal
                                                                .invalid_count ||
                                                            turn.proposal
                                                                .blocking
                                                        ) {
                                                            <svg
                                                                class="error"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    [attr.d]="
                                                                        icons.error
                                                                    "
                                                                />
                                                            </svg>
                                                        }
                                                        {{ text }}
                                                    </p>
                                                }
                                                @if (
                                                    isActive(turn) &&
                                                    t.selection_error()
                                                ) {
                                                    <p
                                                        class="small error"
                                                        role="alert"
                                                        selection-error
                                                    >
                                                        {{
                                                            t.selection_error()
                                                        }}
                                                    </p>
                                                }
                                                @for (
                                                    issue of turn.proposal
                                                        .batch_issues;
                                                    track $index
                                                ) {
                                                    <p
                                                        class="small"
                                                        [class.error]="
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
                                                        class="thumbs"
                                                        thumbnails
                                                    >
                                                        @if (
                                                            thumbnails().before;
                                                            as before
                                                        ) {
                                                            <figure>
                                                                <img
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
                                                                    class="muted"
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
                                                            <figure>
                                                                <img
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
                                                                    class="muted"
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
                                                    sectionsOf(turn.proposal);
                                                    as sections
                                                ) {
                                                    @if (sections.length) {
                                                        <div class="changes">
                                                            @for (
                                                                section of sections;
                                                                track section.key
                                                            ) {
                                                                <div
                                                                    class="section"
                                                                    row-group
                                                                    [attr.data-category]="
                                                                        section.key
                                                                    "
                                                                >
                                                                    <div
                                                                        class="section-head"
                                                                    >
                                                                        @if (
                                                                            section.group
                                                                        ) {
                                                                            <input
                                                                                type="checkbox"
                                                                                [id]="
                                                                                    turn.id +
                                                                                    '-' +
                                                                                    section.key
                                                                                "
                                                                                [checked]="
                                                                                    section
                                                                                        .group
                                                                                        .checked ===
                                                                                    'all'
                                                                                "
                                                                                [indeterminate]="
                                                                                    section
                                                                                        .group
                                                                                        .checked ===
                                                                                    'some'
                                                                                "
                                                                                [disabled]="
                                                                                    section
                                                                                        .group
                                                                                        .locked ||
                                                                                    !isActive(
                                                                                        turn
                                                                                    )
                                                                                "
                                                                                [attr.aria-label]="
                                                                                    section.label
                                                                                "
                                                                                (change)="
                                                                                    onGroup(
                                                                                        section.group,
                                                                                        $event
                                                                                    )
                                                                                "
                                                                            />
                                                                        }
                                                                        <span>{{
                                                                            section.label
                                                                        }}</span>
                                                                        <span
                                                                            class="muted count"
                                                                            >{{
                                                                                section
                                                                                    .rows
                                                                                    .length
                                                                            }}</span
                                                                        >
                                                                        @if (
                                                                            section
                                                                                .rows
                                                                                .length >=
                                                                            4
                                                                        ) {
                                                                            <button
                                                                                type="button"
                                                                                class="link"
                                                                                [attr.aria-expanded]="
                                                                                    isGroupOpen(
                                                                                        turn.id +
                                                                                            ':' +
                                                                                            section.key
                                                                                    )
                                                                                "
                                                                                (click)="
                                                                                    toggleGroupOpen(
                                                                                        turn.id +
                                                                                            ':' +
                                                                                            section.key
                                                                                    )
                                                                                "
                                                                            >
                                                                                {{
                                                                                    isGroupOpen(
                                                                                        turn.id +
                                                                                            ':' +
                                                                                            section.key
                                                                                    )
                                                                                        ? t
                                                                                              .strings
                                                                                              .hide_group
                                                                                        : t
                                                                                              .strings
                                                                                              .show_group
                                                                                }}
                                                                            </button>
                                                                        }
                                                                    </div>
                                                                    @if (
                                                                        isGroupOpen(
                                                                            turn.id +
                                                                                ':' +
                                                                                section.key
                                                                        )
                                                                    ) {
                                                                        <ul
                                                                            class="rows"
                                                                            rows
                                                                        >
                                                                            @for (
                                                                                row of section.rows;
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
                                                        </div>
                                                    }
                                                }
                                                @if (
                                                    isActive(turn) &&
                                                    showsDecision() &&
                                                    hasReasons()
                                                ) {
                                                    <div
                                                        class="reasons small"
                                                        reasons
                                                    >
                                                        <span class="muted">{{
                                                            t.strings
                                                                .reason_prompt
                                                        }}</span>
                                                        @for (
                                                            chip of reason_chips();
                                                            track chip.key
                                                        ) {
                                                            <button
                                                                type="button"
                                                                class="chip"
                                                                [class.on]="
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
                                        class="status running"
                                        role="status"
                                        running
                                    >
                                        <span
                                            class="spinner"
                                            aria-hidden="true"
                                        ></span>
                                        <span class="grow">{{
                                            running_text()
                                        }}</span>
                                        <button
                                            type="button"
                                            class="link"
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
                            @if (activeTurn(); as active) {
                                @if (showsDecision()) {
                                    <div class="decide" decision>
                                        @if (phase().kind === 'applied') {
                                            <button
                                                type="button"
                                                class="btn"
                                                keep
                                                (click)="keep()"
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        [attr.d]="icons.check"
                                                    />
                                                </svg>
                                                {{ t.strings.keep }}
                                            </button>
                                        }
                                        <button
                                            type="button"
                                            class="btn inverse"
                                            [class.wide]="
                                                phase().kind !== 'applied'
                                            "
                                            undo
                                            (click)="undo()"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path [attr.d]="icons.undo" />
                                            </svg>
                                            {{ t.strings.undo }}
                                        </button>
                                    </div>
                                }
                            }
                            @if (t.turns().length || phase().kind === 'running') {
                                <ng-container
                                    *ngTemplateOutlet="
                                        composer_template;
                                        context: { $implicit: t, first: false }
                                    "
                                />
                            }
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

        <ng-template #composer_template let-t let-first="first">
            <form
                class="composer"
                [class.first]="first"
                composer
                (submit)="send($event)"
            >
                <label for="map-editor-ai-draft">
                    {{ t.strings.composer_label }}
                </label>
                <textarea
                    id="map-editor-ai-draft"
                    [class.tall]="first"
                    [value]="draft()"
                    [placeholder]="placeholder()"
                    [disabled]="!t.can_send()"
                    [attr.aria-invalid]="too_long()"
                    (input)="onDraft($event)"
                    (keydown)="onKeydown($event)"
                ></textarea>
                <div class="footer" chips>
                    @if (selection_count() > 0) {
                        <span class="chip" selection-chip>
                            {{ selectionText() }}
                            <button
                                type="button"
                                class="clear"
                                [attr.aria-label]="t.strings.clear_selection"
                                (click)="clearSelection()"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path [attr.d]="icons.close" />
                                </svg>
                            </button>
                        </span>
                    }
                    @if (chars_note()) {
                        <span
                            class="small muted"
                            [class.error]="too_long()"
                            chars
                        >
                            {{ chars_note() }}
                        </span>
                    }
                    <span class="grow"></span>
                    @if (t.turns().length) {
                        <button
                            type="button"
                            class="link"
                            new-request
                            (click)="newRequest()"
                        >
                            {{ t.strings.new_request }}
                        </button>
                    }
                    <button
                        type="submit"
                        class="btn"
                        send
                        [disabled]="!can_send()"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path [attr.d]="icons.send" />
                        </svg>
                        {{ t.strings.send }}
                    </button>
                </div>
            </form>
        </ng-template>

        <ng-template #row_template let-row let-turn="turn">
            <li
                class="row"
                row
                [class.hot]="isHot(row)"
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
                        [id]="turn.id + '-' + row.id"
                        [checked]="row.checked"
                        [disabled]="row.locked || !isActive(turn)"
                        [attr.aria-describedby]="
                            turn.id + '-' + row.id + '-notes'
                        "
                        (change)="onRow(row, $event)"
                    />
                } @else {
                    <span class="spacer" aria-hidden="true"></span>
                }
                <span class="num" aria-hidden="true">{{ row.index + 1 }}</span>
                <span class="sr-only">{{ categoryWord(row) }}</span>
                <span class="body">
                    <span class="kind muted">{{ row.kind_word }}</span>
                    <button
                        type="button"
                        class="row-text"
                        row-text
                        (click)="selectRow(row)"
                    >
                        {{ row.text }}
                    </button>
                    <span
                        class="notes"
                        [id]="turn.id + '-' + row.id + '-notes'"
                    >
                        @if (row.actionable && row.locked) {
                            <span class="error" locked>
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path [attr.d]="icons.lock" />
                                </svg>
                                {{ words().locked_note }}
                            </span>
                        }
                        @if (row.depends_on.length) {
                            <span class="muted" needs>
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path [attr.d]="icons.needs" />
                                </svg>
                                {{ needsText(row) }}
                            </span>
                        }
                        @if (row.note) {
                            <span class="muted">{{ row.note }}</span>
                        }
                        @for (issue of row.issues; track $index) {
                            <span
                                [class.error]="issue.level === 'error'"
                                [class.warning]="issue.level === 'warning'"
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
                color: var(--base-content, #111);
                font-size: 0.875rem;
            }

            .panel {
                display: flex;
                flex: 1;
                flex-direction: column;
                height: 100%;
                min-height: 0;
            }

            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                margin: -1px;
                padding: 0;
                overflow: hidden;
                clip: rect(0 0 0 0);
                white-space: nowrap;
                border: 0;
            }

            .muted {
                opacity: 0.72;
            }

            .small {
                font-size: 0.75rem;
                line-height: 1rem;
            }

            .error {
                color: var(--error, #dc2626);
                opacity: 1;
            }

            .warning {
                color: var(--warn, #d97706);
            }

            .grow {
                flex: 1;
            }

            .note {
                margin: 0;
                padding: 0.75rem 1rem;
                font-size: 0.75rem;
                opacity: 0.72;
            }

            .head {
                padding: 0.75rem 1rem;
                border-bottom: 1px solid var(--base-200, #e5e7eb);
            }

            .head h2 {
                margin: 0 0 0.25rem;
                font-size: 1rem;
                font-weight: 500;
                line-height: 1.5rem;
            }

            .head p {
                margin: 0;
                font-size: 0.75rem;
                line-height: 1rem;
            }

            .head p + p {
                margin-top: 0.125rem;
            }

            .model {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.75rem;
            }

            .model select {
                flex: 1;
                min-width: 0;
                height: 2rem;
                padding: 0 0.5rem;
                border: 1px solid var(--base-300, #d4d4d8);
                border-radius: 0.375rem;
                background: var(--base-100, #fff);
                color: inherit;
                font: inherit;
                font-size: 0.875rem;
            }

            .thread {
                display: flex;
                flex: 1;
                flex-direction: column;
                gap: 0.75rem;
                min-height: 0;
                margin: 0;
                padding: 0.75rem 1rem;
                overflow: auto;
                list-style: none;
            }

            .thread.empty {
                padding: 0;
            }

            .person {
                margin-left: 2rem;
            }

            .bubble {
                margin: 0;
                padding: 0.5rem 0.75rem;
                border-radius: 0.5rem;
                background: var(--base-200, #f4f4f5);
                line-height: 1.25rem;
                white-space: pre-wrap;
            }

            .meta {
                margin: 0.125rem 0 0;
                font-size: 0.75rem;
            }

            .status {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 0.75rem;
                border: 1px solid var(--base-300, #d4d4d8);
                border-radius: 0.5rem;
            }

            .status.failed {
                border-color: var(--error, #dc2626);
            }

            .proposal.inactive {
                opacity: 0.6;
            }

            .title-row {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                gap: 0.5rem;
                padding: 0 0.125rem 0.375rem;
            }

            .title-row strong {
                font-size: 1rem;
                font-weight: 500;
            }

            .title-row .muted {
                font-size: 0.75rem;
            }

            .summary {
                margin: 0 0.125rem 0.5rem;
                line-height: 1.25rem;
            }

            .question {
                margin: 0 0 0.5rem;
                padding: 0.25rem 0.5rem;
                border-radius: 0.375rem;
                background: var(--base-200, #f4f4f5);
            }

            .proposal p.small {
                margin: 0 0.125rem 0.5rem;
            }

            .verdict {
                display: flex;
                align-items: center;
                gap: 0.375rem;
                margin: 0 0.125rem 0.5rem;
                font-size: 0.75rem;
                line-height: 1rem;
            }

            .verdict svg {
                width: 1rem;
                height: 1rem;
                flex: none;
                fill: currentColor;
            }

            .thumbs {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 0.5rem;
                margin: 0 0 0.625rem;
            }

            .thumbs figure {
                display: flex;
                align-items: center;
                gap: 0.375rem;
                margin: 0;
            }

            .thumbs img {
                flex: 1;
                min-width: 0;
                border: 1px solid var(--base-300, #d4d4d8);
                border-radius: 0.25rem;
                background: var(--base-200, #f4f4f5);
            }

            .thumbs figcaption {
                font-size: 0.75rem;
            }

            .changes {
                border: 1px solid var(--base-300, #d4d4d8);
                border-radius: 0.5rem;
            }

            .section + .section {
                border-top: 1px solid var(--base-200, #e5e7eb);
            }

            .section-head {
                display: flex;
                align-items: center;
                gap: 0.625rem;
                padding: 0.625rem 0.625rem 0.25rem;
                font-size: 0.75rem;
                font-weight: 500;
                letter-spacing: 0.02em;
            }

            .section-head .count {
                font-weight: 400;
            }

            .section-head .link {
                margin-left: auto;
            }

            input[type='checkbox'] {
                flex: none;
                width: 1rem;
                height: 1rem;
                margin: 0;
                accent-color: var(--secondary, #1f2155);
            }

            .rows {
                margin: 0;
                padding: 0 0 0.25rem;
                list-style: none;
            }

            .row {
                display: flex;
                align-items: flex-start;
                gap: 0.625rem;
                padding: 0.5rem 0.625rem;
                border-radius: 0.375rem;
                line-height: 1.25rem;
            }

            .row input[type='checkbox'] {
                margin-top: 1px;
            }

            .row .spacer {
                flex: none;
                width: 1rem;
            }

            .row.hot {
                background: color-mix(
                    in srgb,
                    var(--primary, #2563eb) 10%,
                    transparent
                );
            }

            .num {
                flex: none;
                min-width: 22px;
                height: 22px;
                margin-top: -2px;
                padding: 0 4px;
                border: 2px solid var(--info, #2563eb);
                border-radius: 999px;
                font-size: 0.75rem;
                font-weight: 700;
                line-height: 18px;
                text-align: center;
            }

            .row[data-category='added'] .num {
                border-color: var(--success, #16a34a);
            }

            .row[data-category='removed'] .num {
                border-color: var(--error, #dc2626);
                border-style: dashed;
            }

            .row[data-category='question'] .num {
                border-color: var(--warn, #d97706);
            }

            .row.hot .num {
                background: var(--primary, #2563eb);
                border-color: var(--primary, #2563eb);
                border-style: solid;
                color: var(--primary-content, #fff);
            }

            .row .body {
                flex: 1;
                min-width: 0;
            }

            .kind {
                margin-right: 0.25rem;
                font-size: 0.75rem;
            }

            .row-text {
                padding: 0;
                border: none;
                background: none;
                color: inherit;
                font: inherit;
                text-align: left;
                cursor: pointer;
            }

            .row-text:hover {
                text-decoration: underline;
            }

            .notes {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 0.25rem 0.5rem;
                margin-top: 0.125rem;
                font-size: 0.75rem;
                line-height: 1rem;
            }

            .notes:empty {
                display: none;
            }

            .notes > span {
                display: inline-flex;
                align-items: center;
                gap: 0.25rem;
            }

            .notes svg {
                width: 0.875rem;
                height: 0.875rem;
                flex: none;
                fill: currentColor;
            }

            .link {
                padding: 0 0.25rem;
                border: none;
                background: none;
                color: inherit;
                font: inherit;
                font-size: 0.75rem;
                font-weight: 500;
                opacity: 0.8;
                text-decoration: underline;
                cursor: pointer;
            }

            .link:disabled {
                opacity: 0.4;
                cursor: default;
            }

            .reasons {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 0.25rem;
                margin: 0.5rem 0.125rem 0;
            }

            .chip {
                display: inline-flex;
                align-items: center;
                gap: 0.25rem;
                height: 1.5rem;
                padding: 0 0.5rem;
                border: none;
                border-radius: 999px;
                background: var(--base-200, #f4f4f5);
                color: inherit;
                font: inherit;
                font-size: 0.75rem;
                font-weight: 500;
                white-space: nowrap;
                cursor: default;
            }

            button.chip {
                border: 1px solid var(--base-300, #d4d4d8);
                background: transparent;
                cursor: pointer;
            }

            button.chip.on {
                background: var(--base-200, #f4f4f5);
            }

            .chip .clear {
                display: inline-flex;
                margin-left: 0.125rem;
                padding: 0;
                border: none;
                background: none;
                color: inherit;
                cursor: pointer;
            }

            .chip svg {
                width: 1rem;
                height: 1rem;
                fill: currentColor;
            }

            .decide {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 0.5rem;
                padding: 0.75rem 1rem;
                border-top: 1px solid var(--base-200, #e5e7eb);
            }

            .decide .wide {
                grid-column: span 2;
            }

            .btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                min-height: 3rem;
                padding: 0 1rem;
                border: 1px solid var(--secondary, #1f2155);
                border-radius: 0.5rem;
                background: var(--secondary, #1f2155);
                color: var(--secondary-content, #fff);
                font: inherit;
                font-weight: 500;
                white-space: nowrap;
                cursor: pointer;
            }

            .btn.inverse {
                border-color: transparent;
                background: color-mix(
                    in srgb,
                    var(--secondary, #1f2155) 15%,
                    transparent
                );
                color: var(--secondary, #1f2155);
            }

            :host-context(.theme-dark) .btn.inverse {
                background: color-mix(in srgb, #fff 15%, transparent);
                color: #fff;
            }

            .btn:disabled {
                opacity: 0.3;
                pointer-events: none;
            }

            .btn svg {
                width: 1.25rem;
                height: 1.25rem;
                fill: currentColor;
            }

            .composer {
                padding: 0.75rem 1rem 1rem;
                border-top: 1px solid var(--base-200, #e5e7eb);
            }

            .composer.first {
                padding: 1rem;
                border-top: none;
            }

            .composer label {
                display: block;
                margin-bottom: 0.375rem;
                font-size: 0.75rem;
                font-weight: 500;
            }

            .composer textarea {
                box-sizing: border-box;
                width: 100%;
                height: 5.25rem;
                padding: 0.625rem 0.75rem;
                border: 1px solid var(--base-300, #d4d4d8);
                border-radius: 0.5rem;
                background: var(--base-100, #fff);
                color: inherit;
                font: inherit;
                line-height: 1.4;
                resize: none;
            }

            .composer textarea.tall {
                height: 9rem;
            }

            .composer textarea:focus-visible,
            .row-text:focus-visible,
            .link:focus-visible,
            .btn:focus-visible,
            .chip .clear:focus-visible,
            button.chip:focus-visible,
            input[type='checkbox']:focus-visible {
                outline: 2px solid var(--primary, #2563eb);
                outline-offset: 2px;
            }

            .composer textarea:disabled {
                opacity: 0.6;
            }

            .footer {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-top: 0.5rem;
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

            @media (prefers-reduced-motion: no-preference) {
                .row,
                .num,
                .btn,
                .link,
                button.chip {
                    transition:
                        background-color 120ms,
                        box-shadow 120ms,
                        outline-color 120ms;
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
    /** Sections the person collapsed; everything else is open. */
    public readonly closed_groups = signal<ReadonlySet<string>>(new Set());
    public readonly icons = PANEL_ICONS;
    private readonly _thread_list =
        viewChild<ElementRef<HTMLElement>>('threadList');
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
        const choice = thread?.choice();
        if (!thread || !capabilities?.enabled || !choice) return '';
        const provider = capabilities.providers.find(
            (candidate) => candidate.id === choice.provider_id,
        );
        return provider
            ? format(thread.strings.model_note, {
                  model: choice.model,
                  provider: provider.name,
              })
            : '';
    });
    public readonly model_options = computed(
        () => this.thread()?.model_options() ?? [],
    );
    public readonly model_key = computed(() => {
        const choice = this.thread()?.choice();
        return choice ? modelKey(choice) : '';
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
                after:
                    proposal?.verdict === 'blocked'
                        ? null
                        : objectUrl(proposal?.trial_markup),
            };
            untracked(() => this.thumbnails.set(thumbnails));
            onCleanup(() => {
                revokeUrl(thumbnails.before);
                revokeUrl(thumbnails.after);
            });
        });
        effect(() => {
            const session = this.session();
            const thread = this.thread();
            const proposal = thread?.proposal() ?? null;
            const previewed = this.phase().kind === 'applied';
            const summary =
                thread && proposal && previewed
                    ? previewSummary(proposal, thread.strings)
                    : null;
            untracked(() => session.setPreview?.(summary));
        });
        effect(() => {
            const id = this.active_job_id();
            const list = this._thread_list()?.nativeElement;
            if (!id || !list) return;
            setTimeout(() => {
                const turn = list.querySelector<HTMLElement>(
                    `[proposal-card][data-job="${id}"]`,
                );
                if (turn) list.scrollTop = turn.offsetTop - list.offsetTop;
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
        this.session().setPreview?.(null);
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
        const checkbox = event.target as HTMLInputElement;
        const checked = checkbox.checked;
        checkbox.checked = row.checked;
        void this.thread()?.toggle(row.index, checked);
    }

    public onGroup(group: ProposalGroup, event: Event): void {
        const checkbox = event.target as HTMLInputElement;
        const checked = checkbox.checked;
        checkbox.checked = group.checked === 'all';
        checkbox.indeterminate = group.checked === 'some';
        void this.thread()?.toggleGroup(group, checked);
    }

    public isGroupOpen(key: string): boolean {
        return !this.closed_groups().has(key);
    }

    public toggleGroupOpen(key: string): void {
        this.closed_groups.update((closed) => {
            const next = new Set(closed);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    }

    /** The proposal's rows by category, in the order added, changed, removed, question, none. */
    public sectionsOf(proposal: Proposal): PanelSection[] {
        const thread = this.thread();
        if (!thread) return [];
        const sections: PanelSection[] = [];
        for (const category of SECTION_ORDER) {
            const rows = proposal.rows.filter(
                (row) => row.category === category,
            );
            if (!rows.length) continue;
            const tickable = rows.filter((row) => row.actionable && !row.locked);
            const ticked = tickable.filter((row) => row.checked).length;
            const group: ProposalGroup | null =
                tickable.length >= 3
                    ? {
                          key: category,
                          label: thread.strings.categories[category],
                          category,
                          kind: rows[0].kind,
                          indices: rows.map((row) => row.index),
                          checked:
                              ticked === 0
                                  ? 'none'
                                  : ticked === tickable.length
                                    ? 'all'
                                    : 'some',
                          locked: false,
                      }
                    : null;
            sections.push({
                key: category,
                label: thread.strings.categories[category],
                rows,
                group,
            });
        }
        return sections;
    }

    public activeTurn(): ThreadTurn | null {
        const id = this.active_job_id();
        if (!id) return null;
        return (
            this.thread()
                ?.turns()
                .find(
                    (turn) => turn.kind === 'proposal' && turn.job_id === id,
                ) ?? null
        );
    }

    public hasReasons(): boolean {
        return this.reason_chips().length > 0;
    }

    /** The row's element is under the pointer, on the map or in the list. */
    public isHot(row: ProposalRow): boolean {
        const hover = this.session().hover();
        return !!hover && row.anchors.includes(hover);
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
        if (turn.snapshot) parts.push(thread.strings.snapshot_attached);
        return parts.join(' · ');
    }

    public chooseModel(event: Event): void {
        const thread = this.thread();
        if (!thread) return;
        const key = (event.target as HTMLSelectElement).value;
        const option = thread
            .model_options()
            .find((candidate) => candidate.key === key);
        thread.chooseModel(
            option
                ? { provider_id: option.provider_id, model: option.model }
                : null,
        );
    }
}
