/**
 * Alert dashboards for the stagehand specs, through the engine API.
 *
 * A dashboard holds alerts, and an alert is a condition on a module status:
 * stagehand subscribes to the status on the broker and lists every module, in
 * any system, that meets it. So an alert a spec makes matches other systems
 * too, and a spec owns only the rows for its own system.
 *
 * Needs ADMIN.
 */
import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, asList, uniqueTitle } from '../api';

/** Prefix of every dashboard these specs create, so a sweep can find leftovers. */
export const DASHBOARD_SPEC_PREFIX = 'E2E Stagehand Dashboard';

export interface AlertDashboard {
    id: string;
    name: string;
}

export async function createAlertDashboard(
    api: APIRequestContext,
    label: string,
): Promise<AlertDashboard> {
    const res = await api.post(`${ENGINE_API}/alert_dashboards`, {
        data: {
            name: uniqueTitle(`${DASHBOARD_SPEC_PREFIX} ${label}`),
            description: 'Created by the stagehand e2e specs. Safe to delete.',
        },
    });
    if (!res.ok()) {
        throw new Error(
            `create alert dashboard failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return res.json();
}

/** An alert raised while module `mod` (e.g. `Projector_1`) reports `connected: false` */
export async function addDisconnectedAlert(
    api: APIRequestContext,
    dashboard_id: string,
    name: string,
    mod: string,
    severity: 'low' | 'medium' | 'high' | 'critical',
): Promise<void> {
    const res = await api.post(`${ENGINE_API}/alerts`, {
        data: {
            name,
            alert_dashboard_id: dashboard_id,
            severity,
            alert_type: 'status',
            conditions: {
                comparisons: [
                    {
                        left: { mod, status: 'connected', keys: [] },
                        operator: 'equal',
                        right: false,
                    },
                ],
                time_dependents: [],
            },
        },
    });
    if (!res.ok()) {
        throw new Error(
            `create alert failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
}

/** Delete a dashboard, with its alerts */
export async function deleteAlertDashboard(
    api: APIRequestContext,
    dashboard_id: string,
): Promise<void> {
    await api.delete(`${ENGINE_API}/alert_dashboards/${dashboard_id}`);
}

/**
 * Delete dashboards a crashed run left behind. Only ones older than
 * `olderThanMs`, so a sweep never takes one another worker is using.
 */
export async function sweepAlertDashboards(
    api: APIRequestContext,
    olderThanMs = 30 * 60 * 1000,
): Promise<void> {
    const res = await api.get(`${ENGINE_API}/alert_dashboards`, {
        params: { q: DASHBOARD_SPEC_PREFIX, limit: '100' },
    });
    if (!res.ok()) return;
    const cutoff = Date.now() / 1000 - olderThanMs / 1000;
    for (const dashboard of asList<AlertDashboard & { created_at: number }>(
        await res.json(),
    )) {
        if (
            dashboard.name.startsWith(DASHBOARD_SPEC_PREFIX) &&
            dashboard.created_at < cutoff
        ) {
            await deleteAlertDashboard(api, dashboard.id);
        }
    }
}
