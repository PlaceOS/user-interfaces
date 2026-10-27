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
import { OpCategory } from './describe';
import { PANEL_ICONS } from './panel-icons';
import { previewSummary } from './preview';
import { Proposal, ProposalGroup, ProposalRow } from './proposal';
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

/** "5", "5 and 6", "5, 6 and 7". */
function listOf(numbers: readonly number[]): string {
    if (numbers.length < 2) return numbers.join('');
    return `${numbers.slice(0, -1).join(', ')} and ${numbers.at(-1)}`;
}

/** "claude-opus-5-5" reads "Claude Opus 5.5" and "gpt-5.4-mini" reads "GPT-5.4 mini"; other ids are shown as they are. */
export function readableModel(model: string): string {
    const claude = /^claude-([a-z]+)-(\d+)-(\d+)$/.exec(model);
    if (claude) {
        const family = claude[1];
        return `Claude ${family[0].toUpperCase()}${family.slice(1)} ${claude[2]}.${claude[3]}`;
    }
    const gpt = /^gpt-([\d.]+)(?:-(.+))?$/.exec(model);
    if (gpt) return `GPT-${gpt[1]}${gpt[2] ? ` ${gpt[2]}` : ''}`;
    return model;
}

@Component({
    selector: 'map-editor-ai-panel',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        @if (thread(); as t) {
            @if (!hidden()) {
                <div class="panel" [attr.aria-busy]="t.busy()">
                    @switch (phase().kind) {
                        @case ('idle') {
                            <p class="note">{{ t.strings.checking }}</p>
                        }
                        @case ('checking') {
                            <p class="note" role="status">
                                <span class="spinner" aria-hidden="true"></span>
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
                                        <span class="sr-only">
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
                                                    {{ optionLabel(option) }}
                                                </option>
                                            }
                                        </select>
                                    </label>
                                } @else if (model_note()) {
                                    <p class="meta" model-note>
                                        {{ model_note() }}
                                    </p>
                                }
                                @if (quota_note()) {
                                    <p class="meta" quota-note>
                                        {{ quota_note() }}
                                    </p>
                                }
                                @if (t.quota_block(); as block) {
                                    <p
                                        class="callout error"
                                        role="status"
                                        quota-block
                                    >
                                        {{ block }}
                                    </p>
                                }
                            </header>
                            @if (
                                !t.turns().length && phase().kind !== 'running'
                            ) {
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
                                                    <p class="meta">
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
                                                <span class="grow">{{
                                                    turn.text
                                                }}</span>
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
                                                class="card"
                                                [class.inactive]="
                                                    !isActive(turn)
                                                "
                                                proposal-card
                                                [attr.data-job]="turn.job_id"
                                            >
                                                <header class="card-head">
                                                    <h3 card-title>
                                                        {{
                                                            cardTitle(
                                                                turn.proposal
                                                            )
                                                        }}
                                                    </h3>
                                                    @if (outcomeText(turn)) {
                                                        <span
                                                            class="badge"
                                                            [attr.data-outcome]="
                                                                turn.outcome
                                                            "
                                                            outcome
                                                        >
                                                            {{
                                                                outcomeText(
                                                                    turn
                                                                )
                                                            }}
                                                        </span>
                                                    }
                                                </header>
                                                <div class="card-body">
                                                    @if (
                                                        turn.proposal.summary
                                                    ) {
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
                                                    @if (repairNote(turn)) {
                                                        <p
                                                            class="meta"
                                                            repaired
                                                        >
                                                            {{
                                                                repairNote(turn)
                                                            }}
                                                        </p>
                                                    }
                                                    @if (
                                                        turn.proposal.questions
                                                            .length
                                                    ) {
                                                        <div
                                                            class="callout ask"
                                                        >
                                                            @for (
                                                                question of turn
                                                                    .proposal
                                                                    .questions;
                                                                track question
                                                            ) {
                                                                <p
                                                                    class="question"
                                                                    question
                                                                >
                                                                    {{
                                                                        question
                                                                    }}
                                                                </p>
                                                            }
                                                            <p
                                                                class="meta"
                                                                hint
                                                            >
                                                                {{
                                                                    t.strings
                                                                        .questions_hint
                                                                }}
                                                            </p>
                                                        </div>
                                                    }
                                                    @if (
                                                        verdictText(
                                                            turn.proposal
                                                        );
                                                        as text
                                                    ) {
                                                        <p
                                                            class="callout"
                                                            [class.error]="
                                                                turn.proposal
                                                                    .invalid_count ||
                                                                turn.proposal
                                                                    .blocking
                                                            "
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
                                                            <span>{{
                                                                text
                                                            }}</span>
                                                        </p>
                                                    }
                                                    @if (
                                                        isActive(turn) &&
                                                        t.selection_error()
                                                    ) {
                                                        <p
                                                            class="callout error"
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
                                                            class="meta"
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
                                                                thumbnails()
                                                                    .before;
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
                                                                    <figcaption>
                                                                        {{
                                                                            t
                                                                                .strings
                                                                                .before
                                                                        }}
                                                                    </figcaption>
                                                                </figure>
                                                            }
                                                            @if (
                                                                thumbnails()
                                                                    .after;
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
                                                                    <figcaption>
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
                                                </div>
                                                @if (
                                                    sectionsOf(turn.proposal);
                                                    as sections
                                                ) {
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
                                                                <span
                                                                    class="section-label"
                                                                    >{{
                                                                        section.label
                                                                    }}</span
                                                                >
                                                                <span
                                                                    class="count"
                                                                    >{{
                                                                        section
                                                                            .rows
                                                                            .length
                                                                    }}</span
                                                                >
                                                                @if (
                                                                    section.rows
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
                                                }
                                                @if (
                                                    isActive(turn) &&
                                                    showsDecision() &&
                                                    hasReasons()
                                                ) {
                                                    <div
                                                        class="reasons"
                                                        reasons
                                                    >
                                                        <span class="meta">{{
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
                                        @if (
                                            phase().kind === 'applied' ||
                                            revalidating()
                                        ) {
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
                                            class="btn quiet"
                                            [class.wide]="
                                                phase().kind !== 'applied' &&
                                                !revalidating()
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
                            @if (
                                t.turns().length || phase().kind === 'running'
                            ) {
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
                <div class="composer-head">
                    <label class="label" for="map-editor-ai-draft">
                        {{ t.strings.composer_label }}
                    </label>
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
                </div>
                <div class="field" [class.invalid]="too_long()">
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
                                    [attr.aria-label]="
                                        t.strings.clear_selection
                                    "
                                    (click)="clearSelection()"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path [attr.d]="icons.close" />
                                    </svg>
                                </button>
                            </span>
                        }
                        @if (chars_note()) {
                            <span class="meta" [class.error]="too_long()" chars>
                                {{ chars_note() }}
                            </span>
                        }
                        <span class="grow"></span>
                        <button
                            type="submit"
                            class="btn small"
                            send
                            [title]="t.strings.send_shortcut"
                            [disabled]="!can_send()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.send" />
                            </svg>
                            {{ t.strings.send }}
                        </button>
                    </div>
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
                    <span class="sr-only">{{ row.kind_word }}</span>
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
                            <span needs>
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path [attr.d]="icons.needs" />
                                </svg>
                                {{ needsText(row) }}
                            </span>
                        }
                        @if (row.dependents.length) {
                            <span needs>{{ neededByText(row) }}</span>
                        }
                        @if (row.note) {
                            <span>{{ row.note }}</span>
                        }
                        @for (issue of rowIssues(row); track $index) {
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
                --ai-fg: var(--base-content, #111);
                --ai-fg-2: color-mix(in srgb, var(--ai-fg) 62%, transparent);
                --ai-line: color-mix(in srgb, var(--ai-fg) 11%, transparent);
                --ai-line-strong: color-mix(
                    in srgb,
                    var(--ai-fg) 20%,
                    transparent
                );
                --ai-bg: var(--base-100, #fff);
                --ai-wash: color-mix(in srgb, var(--ai-fg) 3.5%, var(--ai-bg));
                --ai-card: color-mix(in srgb, var(--ai-bg) 80%, #fff);
                --ai-accent: var(--secondary, #1f2155);
                --ai-tint: color-mix(in srgb, var(--ai-fg) 5%, transparent);
                --ai-radius: 0.75rem;

                display: flex;
                flex-direction: column;
                height: 100%;
                min-height: 0;
                color: var(--ai-fg);
                font-size: 0.875rem;
                line-height: 1.25rem;
            }

            :host-context(.theme-dark) {
                --ai-accent: color-mix(
                    in srgb,
                    var(--secondary, #1f2155) 40%,
                    #fff
                );
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

            p {
                margin: 0;
            }

            .meta {
                color: var(--ai-fg-2);
                font-size: 0.75rem;
                line-height: 1rem;
            }

            .error {
                color: var(--error, #dc2626);
            }

            .warning {
                color: color-mix(in srgb, var(--warn, #d97706) 70%, #000);
            }

            .grow {
                flex: 1;
                min-width: 0;
            }

            .note {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 1rem;
                color: var(--ai-fg-2);
                font-size: 0.75rem;
            }

            /* Header */

            .head {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding: 1rem;
                border-bottom: 1px solid var(--ai-line);
            }

            .head h2 {
                margin: 0;
                font-size: 1rem;
                font-weight: 600;
                line-height: 1.5rem;
            }

            /* Concierge's global label rule sets width, margin and weight. */
            label.model,
            label.label {
                width: auto;
                min-width: 0;
                margin: 0;
            }

            label.model {
                display: block;
                font-size: inherit;
                font-weight: 400;
            }

            .model select {
                box-sizing: border-box;
                width: 100%;
                height: 2.25rem;
                padding: 0 2rem 0 0.75rem;
                border: 1px solid var(--ai-line-strong);
                border-radius: 0.5rem;
                background-color: var(--ai-card);
                background-image:
                    linear-gradient(45deg, transparent 50%, currentColor 50%),
                    linear-gradient(135deg, currentColor 50%, transparent 50%);
                background-position:
                    right 0.95rem center,
                    right 0.65rem center;
                background-size: 0.3rem 0.3rem;
                background-repeat: no-repeat;
                color: inherit;
                font: inherit;
                font-size: 0.8125rem;
                appearance: none;
                cursor: pointer;
            }

            .model select:hover {
                border-color: color-mix(in srgb, var(--ai-fg) 35%, transparent);
            }

            .head .meta + .meta {
                margin-top: -0.25rem;
            }

            /* Thread */

            /* Hosts such as Concierge turn text selection off for every element. */
            .thread,
            .thread * {
                user-select: text;
            }

            .thread button,
            .thread button * {
                user-select: none;
            }

            .thread {
                display: flex;
                flex: 1;
                flex-direction: column;
                gap: 1rem;
                min-height: 0;
                margin: 0;
                padding: 1rem;
                overflow: auto;
                list-style: none;
                background: var(--ai-wash);
            }

            .thread.empty {
                flex: 0;
                padding: 0;
            }

            .person {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 0.25rem;
                margin-left: 2.5rem;
            }

            .bubble {
                padding: 0.75rem 1rem;
                border-radius: var(--ai-radius) var(--ai-radius) 0.25rem
                    var(--ai-radius);
                background: color-mix(
                    in srgb,
                    var(--ai-accent) 9%,
                    var(--ai-card)
                );
                white-space: pre-line;
            }

            .status {
                display: flex;
                align-items: center;
                gap: 0.625rem;
                padding: 0.75rem 1rem;
                border: 1px solid var(--ai-line);
                border-radius: var(--ai-radius);
                background: var(--ai-card);
                color: var(--ai-fg-2);
            }

            .status.failed {
                border-color: color-mix(
                    in srgb,
                    var(--error, #dc2626) 35%,
                    transparent
                );
                background: color-mix(
                    in srgb,
                    var(--error, #dc2626) 6%,
                    var(--ai-card)
                );
                color: var(--ai-fg);
            }

            /* Proposal card */

            .card {
                border: 1px solid var(--ai-line);
                border-radius: var(--ai-radius);
                background: var(--ai-card);
                box-shadow: 0 1px 2px
                    color-mix(in srgb, var(--ai-fg) 5%, transparent);
            }

            .card.inactive {
                opacity: 0.65;
            }

            .card-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 0.75rem;
                padding: 1rem 1rem 0;
            }

            .card-head h3 {
                margin: 0;
                font-size: 0.875rem;
                font-weight: 600;
            }

            .badge {
                display: inline-flex;
                flex: none;
                align-items: center;
                gap: 0.375rem;
                padding: 0.125rem 0.5rem;
                border-radius: 999px;
                background: var(--ai-tint);
                color: var(--ai-fg-2);
                font-size: 0.75rem;
                font-weight: 500;
                line-height: 1rem;
            }

            .badge::before {
                content: '';
                width: 0.375rem;
                height: 0.375rem;
                border-radius: 999px;
                background: currentColor;
            }

            .badge[data-outcome='previewing'] {
                background: color-mix(
                    in srgb,
                    var(--info, #2563eb) 12%,
                    transparent
                );
                color: color-mix(in srgb, var(--info, #2563eb) 75%, #000);
            }

            .badge[data-outcome='kept'],
            .badge[data-outcome='partial'],
            .badge[data-outcome='refined'],
            .badge[data-outcome='abandoned'] {
                background: color-mix(
                    in srgb,
                    var(--success, #16a34a) 12%,
                    transparent
                );
                color: color-mix(in srgb, var(--success, #16a34a) 70%, #000);
            }

            .badge[data-outcome='questions'] {
                background: color-mix(
                    in srgb,
                    var(--warn, #d97706) 16%,
                    transparent
                );
                color: color-mix(in srgb, var(--warn, #d97706) 45%, #000);
            }

            .badge[data-outcome='failed'],
            .badge[data-outcome='not_applied'] {
                background: color-mix(
                    in srgb,
                    var(--error, #dc2626) 10%,
                    transparent
                );
                color: var(--error, #dc2626);
            }

            :host-context(.theme-dark) .badge {
                color: var(--ai-fg);
            }

            .card-body {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                padding: 0.5rem 1rem 1rem;
            }

            .summary {
                line-height: 1.375rem;
            }

            .callout {
                display: flex;
                flex-direction: column;
                gap: 0.375rem;
                padding: 0.75rem;
                border-left: 3px solid var(--ai-line-strong);
                border-radius: 0.25rem 0.5rem 0.5rem 0.25rem;
                background: var(--ai-tint);
                color: var(--ai-fg);
                font-size: 0.8125rem;
            }

            p.callout {
                flex-direction: row;
                align-items: flex-start;
                gap: 0.5rem;
            }

            .callout.ask {
                border-left-color: var(--warn, #d97706);
                background: color-mix(
                    in srgb,
                    var(--warn, #d97706) 9%,
                    transparent
                );
            }

            .callout.error {
                border-left-color: var(--error, #dc2626);
                background: color-mix(
                    in srgb,
                    var(--error, #dc2626) 7%,
                    transparent
                );
                color: var(--ai-fg);
            }

            .callout svg {
                width: 1rem;
                height: 1rem;
                flex: none;
                margin-top: 0.125rem;
                fill: var(--error, #dc2626);
            }

            .question {
                font-weight: 500;
            }

            .head .callout {
                font-size: 0.75rem;
                line-height: 1rem;
            }

            .thumbs {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 0.5rem;
            }

            .thumbs figure {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
                margin: 0;
            }

            .thumbs img {
                display: block;
                width: 100%;
                aspect-ratio: 16 / 9;
                object-fit: contain;
                border: 1px solid var(--ai-line);
                border-radius: 0.5rem;
                background: var(--ai-wash);
            }

            .thumbs figcaption {
                color: var(--ai-fg-2);
                font-size: 0.75rem;
                line-height: 1rem;
            }

            /* Change list */

            .section {
                padding: 0.5rem;
                border-top: 1px solid var(--ai-line);
            }

            .section-head {
                display: flex;
                align-items: center;
                gap: 0.625rem;
                min-height: 2rem;
                padding: 0 0.5rem;
            }

            .section-label {
                font-size: 0.75rem;
                font-weight: 600;
                line-height: 1rem;
            }

            .count {
                min-width: 1.25rem;
                padding: 0 0.375rem;
                border-radius: 999px;
                background: var(--ai-tint);
                color: var(--ai-fg-2);
                font-size: 0.6875rem;
                font-weight: 600;
                line-height: 1.125rem;
                text-align: center;
            }

            .section-head .link {
                margin-left: auto;
            }

            input[type='checkbox'] {
                flex: none;
                width: 1rem;
                height: 1rem;
                margin: 0;
                accent-color: var(--ai-accent);
                cursor: pointer;
            }

            input[type='checkbox']:disabled {
                cursor: default;
            }

            .rows {
                display: flex;
                flex-direction: column;
                gap: 0.125rem;
                margin: 0;
                padding: 0;
                list-style: none;
            }

            .row {
                display: flex;
                align-items: flex-start;
                gap: 0.625rem;
                padding: 0.5rem;
                border-radius: 0.5rem;
                font-size: 0.8125rem;
            }

            .row:hover,
            .row.hot {
                background: var(--ai-tint);
            }

            .row input[type='checkbox'] {
                margin-top: 0.125rem;
            }

            .row .spacer {
                flex: none;
                width: 1rem;
            }

            .num {
                box-sizing: border-box;
                flex: none;
                min-width: 1.25rem;
                height: 1.25rem;
                padding: 0 0.25rem;
                border: 1.5px solid var(--info, #2563eb);
                border-radius: 999px;
                font-size: 0.6875rem;
                font-weight: 600;
                line-height: calc(1.25rem - 3px);
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
                display: flex;
                flex: 1;
                flex-direction: column;
                gap: 0.125rem;
                min-width: 0;
            }

            .row-text {
                padding: 0;
                border: none;
                background: none;
                color: inherit;
                font: inherit;
                text-align: left;
                overflow-wrap: anywhere;
                cursor: pointer;
            }

            .row-text:hover {
                text-decoration: underline;
                text-underline-offset: 2px;
            }

            .notes {
                display: flex;
                flex-direction: column;
                gap: 0.125rem;
                color: var(--ai-fg-2);
                font-size: 0.75rem;
                line-height: 1rem;
            }

            .notes:empty {
                display: none;
            }

            .notes > span {
                display: inline-flex;
                align-items: flex-start;
                gap: 0.25rem;
            }

            .notes svg {
                width: 0.875rem;
                height: 0.875rem;
                flex: none;
                margin-top: 0.0625rem;
                fill: currentColor;
            }

            /* Feedback */

            .reasons {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 0.5rem;
                padding: 1rem;
                border-top: 1px solid var(--ai-line);
            }

            .reasons .meta {
                width: 100%;
            }

            /* Controls */

            .link {
                padding: 0.125rem 0.25rem;
                border: none;
                border-radius: 0.25rem;
                background: none;
                color: var(--ai-fg-2);
                font: inherit;
                font-size: 0.75rem;
                font-weight: 500;
                line-height: 1rem;
                cursor: pointer;
            }

            .link:hover {
                color: var(--ai-fg);
                text-decoration: underline;
                text-underline-offset: 2px;
            }

            .link:disabled {
                opacity: 0.4;
                cursor: default;
                text-decoration: none;
            }

            .chip {
                display: inline-flex;
                align-items: center;
                gap: 0.25rem;
                height: 1.625rem;
                padding: 0 0.625rem;
                border: 1px solid transparent;
                border-radius: 999px;
                background: var(--ai-tint);
                color: inherit;
                font: inherit;
                font-size: 0.75rem;
                font-weight: 500;
                white-space: nowrap;
            }

            button.chip {
                border-color: var(--ai-line-strong);
                background: transparent;
                cursor: pointer;
            }

            button.chip:hover {
                background: var(--ai-tint);
            }

            button.chip.on {
                border-color: var(--ai-accent);
                background: color-mix(
                    in srgb,
                    var(--ai-accent) 10%,
                    transparent
                );
            }

            .chip .clear {
                display: inline-flex;
                margin-right: -0.25rem;
                padding: 0;
                border: none;
                border-radius: 999px;
                background: none;
                color: inherit;
                cursor: pointer;
            }

            .chip svg {
                width: 0.875rem;
                height: 0.875rem;
                fill: currentColor;
            }

            .decide {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 0.5rem;
                padding: 0.75rem 1rem;
                border-top: 1px solid var(--ai-line);
                background: var(--ai-bg);
            }

            .decide .wide {
                grid-column: span 2;
            }

            .btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.375rem;
                height: 2.5rem;
                padding: 0 1rem;
                border: 1px solid var(--ai-accent);
                border-radius: 0.5rem;
                background: var(--ai-accent);
                color: var(--secondary-content, #fff);
                font: inherit;
                font-weight: 600;
                white-space: nowrap;
                cursor: pointer;
            }

            .btn:hover {
                background: color-mix(in srgb, var(--ai-accent) 88%, #000);
            }

            .btn.quiet {
                border-color: var(--ai-line-strong);
                background: var(--ai-card);
                color: var(--ai-fg);
            }

            .btn.quiet:hover {
                background: var(--ai-tint);
            }

            .btn.small {
                height: 2rem;
                padding: 0 0.75rem;
                font-size: 0.8125rem;
            }

            .btn:disabled {
                opacity: 0.35;
                pointer-events: none;
            }

            .btn svg {
                width: 1.125rem;
                height: 1.125rem;
                fill: currentColor;
            }

            .btn.small svg {
                width: 1rem;
                height: 1rem;
            }

            /* Composer */

            .composer {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding: 0.75rem 1rem 1rem;
                border-top: 1px solid var(--ai-line);
                background: var(--ai-bg);
            }

            .composer.first {
                padding-top: 1rem;
                border-top: none;
            }

            .composer-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 0.5rem;
                min-height: 1.25rem;
            }

            .label {
                font-size: 0.75rem;
                font-weight: 600;
                line-height: 1rem;
            }

            .field {
                border: 1px solid var(--ai-line-strong);
                border-radius: 0.625rem;
                background: var(--ai-card);
            }

            .field:focus-within {
                border-color: var(--ai-accent);
                box-shadow: 0 0 0 3px
                    color-mix(in srgb, var(--ai-accent) 15%, transparent);
            }

            .field.invalid {
                border-color: var(--error, #dc2626);
            }

            .field textarea {
                display: block;
                box-sizing: border-box;
                width: 100%;
                height: 4.5rem;
                padding: 0.625rem 0.75rem 0.25rem;
                border: none;
                outline: none;
                background: transparent;
                color: inherit;
                font: inherit;
                line-height: 1.375rem;
                resize: none;
            }

            .field textarea::placeholder {
                color: color-mix(in srgb, var(--ai-fg) 45%, transparent);
            }

            .field textarea.tall {
                height: 8rem;
            }

            .field textarea:disabled {
                opacity: 0.6;
            }

            .footer {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.375rem 0.375rem 0.375rem 0.75rem;
            }

            .footer .meta.error {
                color: var(--error, #dc2626);
            }

            .row-text:focus-visible,
            .link:focus-visible,
            .btn:focus-visible,
            .chip .clear:focus-visible,
            button.chip:focus-visible,
            .model select:focus-visible,
            input[type='checkbox']:focus-visible {
                outline: 2px solid var(--primary, #2563eb);
                outline-offset: 2px;
            }

            .spinner {
                flex: none;
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
                .field,
                .model select,
                button.chip {
                    transition:
                        background-color 120ms,
                        border-color 120ms,
                        box-shadow 120ms,
                        color 120ms;
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
                  model: readableModel(choice.model),
                  provider: provider.name,
              })
            : '';
    });
    public readonly model_options = computed(
        () => this.thread()?.model_options() ?? [],
    );
    /** The model's readable name, with its provider when another option offers the same model. */
    public optionLabel(option: {
        model: string;
        provider_name: string;
    }): string {
        const shared = this.model_options().some(
            (other) => other !== option && other.model === option.model,
        );
        const name = readableModel(option.model);
        return shared ? `${name} · ${option.provider_name}` : name;
    }

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
    /** True while a changed selection is checked before it is previewed again. */
    public readonly revalidating = computed(() => {
        const phase = this.phase();
        return phase.kind === 'reviewing' && phase.validating;
    });
    public readonly showsDecision = computed(() => {
        const phase = this.phase();
        if (phase.kind === 'applied') return true;
        return (
            phase.kind === 'reviewing' &&
            phase.proposal.rows.some((row) => row.actionable)
        );
    });

    constructor() {
        effect(() => {
            this.session().version();
            untracked(() => this.thread()?.mapChanged());
        });
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
            const phase = this.phase();
            const previewed =
                phase.kind === 'applied' ||
                (phase.kind === 'reviewing' && !!phase.on_map);
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
                if (!turn) return;
                const inset =
                    parseFloat(getComputedStyle(list).paddingTop) || 0;
                list.scrollTop = turn.offsetTop - list.offsetTop - inset;
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

    /** The row's issues without repeats, and without one that only repeats its note. */
    public rowIssues(row: ProposalRow): ProposalRow['issues'] {
        const seen = new Set(row.note ? [row.note] : []);
        return row.issues.filter((issue) => {
            if (seen.has(issue.message)) return false;
            seen.add(issue.message);
            return true;
        });
    }

    /**
     * The proposal's rows by category, in the order added, changed, removed,
     * question, none. Questions already shown above the list are left out.
     */
    public sectionsOf(proposal: Proposal): PanelSection[] {
        const thread = this.thread();
        if (!thread) return [];
        const sections: PanelSection[] = [];
        for (const category of SECTION_ORDER) {
            const rows = proposal.rows.filter(
                (row) => row.category === category,
            );
            if (!rows.length) continue;
            if (
                category === 'question' &&
                rows.every((row) => proposal.questions.includes(row.text))
            )
                continue;
            const tickable = rows.filter(
                (row) => row.actionable && !row.locked,
            );
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

    public neededByText(row: ProposalRow): string {
        const thread = this.thread();
        if (!thread) return '';
        const numbers = row.dependents.map((index) => index + 1);
        if (numbers.length === 1)
            return format(thread.strings.needed_by_one, { n: numbers[0] });
        return format(thread.strings.needed_by_many, {
            list: listOf(numbers),
        });
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

    /** How many rejected changes the server's repair round corrected, when it did. */
    public repairNote(turn: ThreadTurn): string {
        const thread = this.thread();
        if (!thread || turn.kind !== 'proposal') return '';
        const repair = turn.proposal.job.repair;
        if (!repair?.used) return '';
        const corrected = repair.rejected - (repair.remaining ?? 0);
        return corrected > 0
            ? format(thread.strings.repaired_note, { count: corrected })
            : '';
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
