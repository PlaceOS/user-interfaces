import { persist, registerMockEndpoint } from '../session';
import { registerCrudEndpoints } from './crud.mock';

const BASE = '/api/engine/v2';

const MOCK_DASHBOARDS = [
    {
        id: 'alert_dashboard-ops',
        name: 'Building Operations',
        description: 'Room and device health for the main building',
        enabled: true,
        authority_id: 'mock-authority',
    },
];

const NO_CONDITIONS = { comparisons: [], time_dependents: [] };

const MOCK_ALERTS = [
    {
        id: 'alert-offline',
        name: 'Display offline',
        description: 'A room display stopped responding',
        alert_dashboard_id: 'alert_dashboard-ops',
        authority_id: 'mock-authority',
        enabled: true,
        conditions: NO_CONDITIONS,
        severity: 'high',
        alert_type: 'status',
        debounce_period: 60,
        any_match: false,
    },
    {
        id: 'alert-occupancy',
        name: 'Room over capacity',
        description: 'People count is higher than the room capacity',
        alert_dashboard_id: 'alert_dashboard-ops',
        authority_id: 'mock-authority',
        enabled: true,
        conditions: NO_CONDITIONS,
        severity: 'medium',
        alert_type: 'threshold',
        debounce_period: 300,
        any_match: true,
    },
];

/** Alert dashboards and alerts that Stagehand manages */
export function registerMockAlerts() {
    persist('alert-dashboards', MOCK_DASHBOARDS);
    persist('alerts', MOCK_ALERTS);

    registerMockEndpoint({
        path: `${BASE}/alert_dashboards`,
        method: 'GET',
        callback: () => MOCK_DASHBOARDS,
    });
    registerMockEndpoint({
        path: `${BASE}/alert_dashboards/:id/alerts`,
        method: 'GET',
        callback: (request) =>
            MOCK_ALERTS.filter(
                (alert) => alert.alert_dashboard_id === request.route_params.id,
            ),
    });
    registerCrudEndpoints(
        `${BASE}/alert_dashboards`,
        MOCK_DASHBOARDS,
        'alert_dashboard-',
        'alert dashboard',
    );

    registerMockEndpoint({
        path: `${BASE}/alerts`,
        method: 'GET',
        callback: (request) => {
            const id = request.query_params?.alert_dashboard_id;
            return id
                ? MOCK_ALERTS.filter((alert) => alert.alert_dashboard_id === id)
                : MOCK_ALERTS;
        },
    });
    registerCrudEndpoints(`${BASE}/alerts`, MOCK_ALERTS, 'alert-', 'alert');
}
