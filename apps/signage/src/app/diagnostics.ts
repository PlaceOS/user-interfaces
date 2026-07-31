/**
 * Console diagnostics for a running player.
 *
 * Signage runs unattended on screens nobody can interact with, so the only way
 * to find out what a misbehaving player thinks is going on is to open a console
 * against it. `window.signage.state()` prints everything worth knowing in one
 * call, and `window.signage.json()` gives the same thing as text to paste into
 * a ticket.
 */
export interface SignageDiagnostics {
    /** Log the current player state to the console and return it */
    state: () => Record<string, any>;
    /** The current player state as formatted JSON */
    json: () => string;
    /** Force an immediate display refresh */
    poll: () => void;
    /** Reload the application */
    reload: () => void;
}

export interface SignageDiagnosticActions {
    getState: () => Record<string, any>;
    poll: () => void;
    reload?: () => void;
}

declare global {
    interface Window {
        signage?: SignageDiagnostics;
    }
}

/**
 * Publish the diagnostics API on `window.signage`. Returns a callback that
 * removes it again.
 */
export function registerSignageDiagnostics(
    actions: SignageDiagnosticActions,
): () => void {
    const api: SignageDiagnostics = {
        state: () => {
            const state = actions.getState();
            logState(state);
            return state;
        },
        json: () => JSON.stringify(actions.getState(), null, 2),
        poll: () => actions.poll(),
        reload: () => (actions.reload || (() => location.reload()))(),
    };
    window.signage = api;
    return () => {
        if (window.signage === api) delete window.signage;
    };
}

function logState(state: Record<string, any>) {
    /* eslint-disable no-console */
    console.groupCollapsed(
        `%cPlaceOS Signage%c ${state.display_id || 'no display'}`,
        'font-weight:bold',
        'font-weight:normal;opacity:0.6',
    );
    for (const [key, value] of Object.entries(state)) {
        const is_row_list =
            Array.isArray(value) &&
            value.length > 0 &&
            typeof value[0] === 'object';
        if (is_row_list) {
            console.groupCollapsed(`${key} (${value.length})`);
            console.table(value);
            console.groupEnd();
        } else {
            console.log(`${key}:`, value);
        }
    }
    console.groupEnd();
    /* eslint-enable no-console */
}
