import { Proposal } from './proposal';
import { format, MapEditorAiStrings } from './strings';
import { MapAICapabilities, MapAIJob } from './types';

export type MapAiErrorKind =
    | 'not_configured'
    | 'model_cannot'
    | 'quota'
    | 'busy'
    | 'forbidden'
    | 'refused'
    | 'timeout'
    | 'vendor'
    | 'invalid'
    | 'network'
    | 'request'
    | 'unknown';

export interface MapAiError {
    kind: MapAiErrorKind;
    /** Written for the person. */
    message: string;
    /** Sending the same request again may work. */
    retryable: boolean;
    job?: MapAIJob | null;
}

export type MapAiPhase =
    | { kind: 'idle' }
    | { kind: 'checking' }
    | { kind: 'unavailable'; reason: string; hidden: boolean }
    | { kind: 'composing' }
    | { kind: 'submitting' }
    | {
          kind: 'running';
          job: MapAIJob;
          started_at: number;
          cancelling: boolean;
      }
    | {
          kind: 'reviewing';
          proposal: Proposal;
          validating: boolean;
          /** The earlier preview is still on the map while the new selection is checked. */
          on_map?: boolean;
      }
    | { kind: 'applied'; proposal: Proposal }
    | { kind: 'error'; error: MapAiError }
    | { kind: 'cancelled'; job: MapAIJob | null };

export type ProposalOutcome =
    | 'previewing'
    | 'not_applied'
    | 'kept'
    | 'partial'
    | 'undone'
    | 'questions'
    | 'empty'
    | 'refined'
    | 'abandoned';

export type ThreadTurn =
    | {
          kind: 'person';
          id: string;
          instruction: string;
          selected: number;
          snapshot: boolean;
          at: number;
      }
    | {
          kind: 'proposal';
          id: string;
          job_id: string;
          proposal: Proposal;
          outcome: ProposalOutcome;
          reasons: string[];
          at: number;
      }
    | {
          kind: 'status';
          id: string;
          text: string;
          error: MapAiError | null;
          at: number;
      };

/** The provider and model the next request asks for; null leaves it to the server. */
export interface MapAiModelChoice {
    provider_id: string;
    model: string;
}

export interface MapAiModelOption extends MapAiModelChoice {
    provider_name: string;
    key: string;
}

export function modelKey(choice: MapAiModelChoice): string {
    return `${choice.provider_id}|${choice.model}`;
}

/** Every model the capabilities offer, provider by provider. */
export function modelOptions(
    capabilities: MapAICapabilities | null | undefined,
): MapAiModelOption[] {
    if (!capabilities?.enabled) return [];
    return capabilities.providers.flatMap((provider) => {
        const models = provider.text_models?.length
            ? provider.text_models
            : [provider.text_model];
        return models.map((model) => ({
            provider_id: provider.id,
            provider_name: provider.name,
            model,
            key: modelKey({ provider_id: provider.id, model }),
        }));
    });
}

/** The default provider's own model. */
export function defaultChoice(
    capabilities: MapAICapabilities | null | undefined,
): MapAiModelChoice | null {
    if (!capabilities?.enabled) return null;
    const provider =
        capabilities.providers.find(
            (candidate) => candidate.id === capabilities.default_provider_id,
        ) ?? capabilities.providers[0];
    return provider
        ? { provider_id: provider.id, model: provider.text_model }
        : null;
}

/** The choice while the capabilities still offer it. */
export function offeredChoice(
    choice: MapAiModelChoice | null,
    capabilities: MapAICapabilities | null | undefined,
): MapAiModelChoice | null {
    if (!choice) return null;
    const key = modelKey(choice);
    return modelOptions(capabilities).some((option) => option.key === key)
        ? choice
        : null;
}

/** The model the next request asks for: the choice, else the default. */
export function effectiveChoice(state: MapAiState): MapAiModelChoice | null {
    return state.choice ?? defaultChoice(state.capabilities);
}

export interface MapAiState {
    phase: MapAiPhase;
    capabilities: MapAICapabilities | null;
    /** The model picked in the panel; null for the server's default. */
    choice: MapAiModelChoice | null;
    turns: ThreadTurn[];
    /** The last finished job; the next request refines it. */
    parent_job_id: string | null;
    /** The composer's text, kept for a retry. */
    draft: string;
    /** Reason chips ticked on the undo prompt. */
    reasons: string[];
    /** The last state change, for the live region. */
    announcement: string;
    sequence: number;
}

export type MapAiEvent =
    | { type: 'check' }
    | { type: 'capabilities'; capabilities: MapAICapabilities }
    | {
          type: 'capabilities_failed';
          status: number | undefined;
          message: string;
      }
    | { type: 'draft'; text: string }
    | { type: 'model_chosen'; choice: MapAiModelChoice | null }
    | {
          type: 'submit';
          instruction: string;
          selected: number;
          snapshot: boolean;
          at: number;
      }
    | { type: 'job_accepted'; job: MapAIJob; at: number }
    | { type: 'job_updated'; job: MapAIJob }
    | { type: 'submit_failed'; error: MapAiError }
    | { type: 'cancel_requested' }
    | { type: 'job_cancelled'; job: MapAIJob | null; at: number }
    | {
          type: 'job_failed';
          job: MapAIJob | null;
          error: MapAiError;
          at: number;
      }
    | { type: 'validating'; on_map?: boolean }
    | { type: 'proposal'; proposal: Proposal; at: number }
    | { type: 'previewed'; proposal: Proposal }
    | { type: 'rows_changed'; proposal: Proposal }
    | { type: 'kept'; proposal: Proposal }
    | { type: 'undone'; proposal: Proposal; reasons: string[] }
    | { type: 'refined'; proposal: Proposal }
    | { type: 'reason_toggled'; reason: string }
    | { type: 'reset' }
    | { type: 'announce'; text: string };

export function initialState(): MapAiState {
    return {
        phase: { kind: 'idle' },
        capabilities: null,
        choice: null,
        turns: [],
        parent_job_id: null,
        draft: '',
        reasons: [],
        announcement: '',
        sequence: 0,
    };
}

/** The phase accepts a new instruction. */
export function canCompose(phase: MapAiPhase): boolean {
    return (
        phase.kind === 'composing' ||
        phase.kind === 'reviewing' ||
        phase.kind === 'applied' ||
        phase.kind === 'error' ||
        phase.kind === 'cancelled'
    );
}

/** The capabilities say nothing can be sent, and why. */
export function quotaBlock(
    capabilities: MapAICapabilities | null,
    strings: MapEditorAiStrings,
): string | null {
    if (!capabilities?.enabled) return null;
    if (capabilities.quota.user_remaining_today === 0)
        return strings.quota_user_exhausted;
    if (capabilities.quota.domain_remaining_month === 0)
        return strings.quota_domain_exhausted;
    return null;
}

function proposalFor(phase: MapAiPhase): Proposal | null {
    if (phase.kind === 'reviewing' || phase.kind === 'applied')
        return phase.proposal;
    return null;
}

function outcomeFor(proposal: Proposal): ProposalOutcome {
    switch (proposal.verdict) {
        case 'blocked':
        case 'nothing_accepted':
            return 'not_applied';
        case 'questions':
            return 'questions';
        case 'empty':
            return 'empty';
        default:
            return 'previewing';
    }
}

type TurnInput = ThreadTurn extends infer T
    ? T extends ThreadTurn
        ? Omit<T, 'id'>
        : never
    : never;

function withTurn(state: MapAiState, turn: TurnInput): MapAiState {
    const sequence = state.sequence + 1;
    return {
        ...state,
        sequence,
        turns: [
            ...state.turns,
            { ...turn, id: `turn-${sequence}` } as ThreadTurn,
        ],
    };
}

function setOutcome(
    state: MapAiState,
    job_id: string,
    outcome: ProposalOutcome,
    proposal: Proposal,
    reasons: string[] = [],
): MapAiState {
    return {
        ...state,
        turns: state.turns.map((turn) =>
            turn.kind === 'proposal' && turn.job_id === job_id
                ? { ...turn, outcome, proposal, reasons }
                : turn,
        ),
    };
}

function replaceProposal(state: MapAiState, proposal: Proposal): MapAiState {
    return {
        ...state,
        turns: state.turns.map((turn) =>
            turn.kind === 'proposal' && turn.job_id === proposal.job.id
                ? { ...turn, proposal, outcome: outcomeFor(proposal) }
                : turn,
        ),
    };
}

/** Pure: the next state for an event. Side effects live in MapAiThread. */
export function reduce(
    state: MapAiState,
    event: MapAiEvent,
    strings: MapEditorAiStrings,
): MapAiState {
    switch (event.type) {
        case 'check':
            return {
                ...state,
                phase: { kind: 'checking' },
                announcement: strings.checking,
            };
        case 'capabilities': {
            const capabilities = event.capabilities;
            if (!capabilities.enabled) {
                const reason =
                    capabilities.reason || strings.states.not_configured;
                return {
                    ...state,
                    capabilities,
                    phase: { kind: 'unavailable', reason, hidden: false },
                    announcement: format(strings.unavailable, { reason }),
                };
            }
            return {
                ...state,
                capabilities,
                choice: offeredChoice(state.choice, capabilities),
                phase: canCompose(state.phase)
                    ? state.phase
                    : { kind: 'composing' },
                announcement: '',
            };
        }
        case 'capabilities_failed': {
            const hidden = event.status === 404;
            const reason = hidden
                ? strings.states.not_configured
                : event.message || strings.states.unknown;
            return {
                ...state,
                phase: { kind: 'unavailable', reason, hidden },
                announcement: hidden
                    ? ''
                    : format(strings.unavailable, { reason }),
            };
        }
        case 'draft':
            return { ...state, draft: event.text };
        case 'model_chosen':
            return { ...state, choice: event.choice };
        case 'submit': {
            if (!canCompose(state.phase)) return state;
            const next = withTurn(state, {
                kind: 'person',
                instruction: event.instruction,
                selected: event.selected,
                snapshot: event.snapshot,
                at: event.at,
            });
            return {
                ...next,
                draft: event.instruction,
                reasons: [],
                phase: { kind: 'submitting' },
                announcement: strings.sending,
            };
        }
        case 'job_accepted':
            return {
                ...state,
                phase: {
                    kind: 'running',
                    job: event.job,
                    started_at: event.at,
                    cancelling: false,
                },
                announcement: strings.states.generating,
            };
        case 'job_updated':
            if (state.phase.kind !== 'running') return state;
            return {
                ...state,
                phase: { ...state.phase, job: event.job },
            };
        case 'submit_failed':
            return {
                ...withTurn(state, {
                    kind: 'status',
                    text: event.error.message,
                    error: event.error,
                    at: Date.now(),
                }),
                phase: { kind: 'error', error: event.error },
                announcement: event.error.message,
            };
        case 'cancel_requested':
            if (state.phase.kind !== 'running') return state;
            return {
                ...state,
                phase: { ...state.phase, cancelling: true },
                announcement: strings.cancelling,
            };
        case 'job_cancelled':
            return {
                ...withTurn(state, {
                    kind: 'status',
                    text: strings.states.cancelled,
                    error: null,
                    at: event.at,
                }),
                phase: { kind: 'cancelled', job: event.job },
                announcement: strings.states.cancelled,
            };
        case 'job_failed':
            return {
                ...withTurn(state, {
                    kind: 'status',
                    text: event.error.message,
                    error: event.error,
                    at: event.at,
                }),
                phase: { kind: 'error', error: event.error },
                parent_job_id: event.job?.id ?? state.parent_job_id,
                announcement: event.error.message,
            };
        case 'validating': {
            const proposal = proposalFor(state.phase);
            if (!proposal) return state;
            return {
                ...state,
                phase: {
                    kind: 'reviewing',
                    proposal,
                    validating: true,
                    on_map: event.on_map,
                },
            };
        }
        case 'proposal': {
            const proposal = event.proposal;
            const outcome = outcomeFor(proposal);
            const next = withTurn(state, {
                kind: 'proposal',
                job_id: proposal.job.id,
                proposal,
                outcome,
                reasons: [],
                at: event.at,
            });
            return {
                ...next,
                phase: { kind: 'reviewing', proposal, validating: false },
                parent_job_id: proposal.job.id,
                announcement: proposalAnnouncement(proposal, strings),
            };
        }
        case 'previewed': {
            const proposal = event.proposal;
            return {
                ...setOutcome(state, proposal.job.id, 'previewing', proposal),
                phase: { kind: 'applied', proposal },
                announcement: format(strings.states.applied, {
                    count: proposal.accepted.length,
                }),
            };
        }
        case 'rows_changed': {
            const proposal = event.proposal;
            return {
                ...replaceProposal(state, proposal),
                phase: { kind: 'reviewing', proposal, validating: false },
                announcement: proposalAnnouncement(proposal, strings),
            };
        }
        case 'kept': {
            const proposal = event.proposal;
            const total = proposal.rows.filter((row) => row.actionable).length;
            const outcome: ProposalOutcome =
                proposal.accepted.length < total ? 'partial' : 'kept';
            return {
                ...setOutcome(state, proposal.job.id, outcome, proposal),
                phase: { kind: 'composing' },
                parent_job_id: proposal.job.id,
                reasons: [],
                announcement:
                    outcome === 'kept'
                        ? strings.outcomes.kept
                        : format(strings.outcomes.partial, {
                              accepted: proposal.accepted.length,
                              total,
                          }),
            };
        }
        case 'undone': {
            const proposal = event.proposal;
            return {
                ...setOutcome(
                    state,
                    proposal.job.id,
                    'undone',
                    proposal,
                    event.reasons,
                ),
                phase: { kind: 'composing' },
                parent_job_id: proposal.job.id,
                reasons: [],
                announcement: strings.outcomes.undone,
            };
        }
        case 'refined': {
            const proposal = event.proposal;
            return setOutcome(state, proposal.job.id, 'refined', proposal);
        }
        case 'reason_toggled': {
            const reasons = state.reasons.includes(event.reason)
                ? state.reasons.filter((reason) => reason !== event.reason)
                : [...state.reasons, event.reason];
            return { ...state, reasons };
        }
        case 'reset':
            return {
                ...state,
                phase: state.capabilities?.enabled
                    ? { kind: 'composing' }
                    : state.phase,
                parent_job_id: null,
                draft: '',
                reasons: [],
                announcement: '',
            };
        case 'announce':
            return { ...state, announcement: event.text };
        default:
            return state;
    }
}

function proposalAnnouncement(
    proposal: Proposal,
    strings: MapEditorAiStrings,
): string {
    switch (proposal.verdict) {
        case 'empty':
            return format(strings.states.empty, {
                summary: proposal.summary || '-',
            });
        case 'questions':
            return proposal.questions[0] || strings.questions_title;
        case 'blocked':
            return strings.states.blocked;
        case 'nothing_accepted':
            return strings.states.nothing_accepted;
        default:
            return proposal.invalid_count
                ? format(strings.states.partially_invalid, {
                      count: proposal.rows.filter((row) => row.actionable)
                          .length,
                      invalid: proposal.invalid_count,
                  })
                : format(strings.proposal_title, {
                      count: proposal.accepted.length,
                  });
    }
}
