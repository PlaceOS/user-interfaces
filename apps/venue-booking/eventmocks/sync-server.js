/**
 * Venue & Event Sync Server
 * Bridges the concierge app and eventmocks for real-time venue + event synchronization
 *
 * Usage: node sync-server.js
 * Runs on port 3001
 *
 * Venue Endpoints:
 *   POST /api/venues            - Push a new venue (from concierge)
 *   POST /api/venues/bulk       - Push multiple venues (from concierge)
 *   GET  /api/venues            - Get all synced venues (for eventmocks)
 *   GET  /api/venues/stream     - SSE stream for real-time venue updates
 *
 * Event Endpoints:
 *   POST /api/events            - Push a new event (from eventmocks)
 *   GET  /api/events            - Get all stored events
 *   GET  /api/events/stream     - SSE stream for event updates (both apps)
 *   GET  /api/events/conflicts  - Check venue time conflicts
 *   POST /api/events/:id/status - Push approval status change (from concierge)
 */

const http = require('http');

const PORT = 3001;
let venues = [];
let sseClients = [];

// Event sync stores
let events = [];
let eventSseClients = [];

function corsHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function readBody(req) {
    return new Promise(function (resolve, reject) {
        let body = '';
        req.on('data', function (chunk) { body += chunk; });
        req.on('end', function () {
            try { resolve(JSON.parse(body)); }
            catch (e) { reject(e); }
        });
        req.on('error', reject);
    });
}

function notifyClients(data) {
    var payload = 'data: ' + JSON.stringify(data) + '\n\n';
    sseClients.forEach(function (res) {
        res.write(payload);
    });
}

function notifyEventClients(data) {
    var payload = 'data: ' + JSON.stringify(data) + '\n\n';
    eventSseClients.forEach(function (res) {
        res.write(payload);
    });
}

function parseUrl(url) {
    var qIndex = url.indexOf('?');
    return {
        pathname: qIndex === -1 ? url : url.substring(0, qIndex),
        query: qIndex === -1 ? {} : url.substring(qIndex + 1).split('&').reduce(function (acc, pair) {
            var parts = pair.split('=');
            acc[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '');
            return acc;
        }, {})
    };
}

var server = http.createServer(function (req, res) {
    corsHeaders(res);

    // Preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // SSE stream
    if (req.url === '/api/venues/stream' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });
        res.write('data: ' + JSON.stringify({ type: 'connected', total: venues.length }) + '\n\n');
        sseClients.push(res);
        req.on('close', function () {
            sseClients = sseClients.filter(function (c) { return c !== res; });
        });
        return;
    }

    // Push single venue
    if (req.url === '/api/venues' && req.method === 'POST') {
        readBody(req).then(function (venue) {
            // Avoid duplicates by id or name
            var exists = venues.some(function (v) {
                return v.id === venue.id || v.name === venue.name;
            });
            if (!exists) {
                venues.push(venue);
                notifyClients({ type: 'venue_added', venue: venue, total: venues.length });
                console.log('[+] Venue added: ' + venue.name + ' (total: ' + venues.length + ')');
            }
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, total: venues.length }));
        }).catch(function (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        });
        return;
    }

    // Bulk push venues
    if (req.url === '/api/venues/bulk' && req.method === 'POST') {
        readBody(req).then(function (body) {
            var newVenues = body.venues || [];
            var added = 0;
            newVenues.forEach(function (venue) {
                var exists = venues.some(function (v) {
                    return v.id === venue.id || v.name === venue.name;
                });
                if (!exists) {
                    venues.push(venue);
                    added++;
                }
            });
            if (added > 0) {
                notifyClients({ type: 'venues_bulk', count: added, total: venues.length });
                console.log('[+] Bulk: ' + added + ' new venues added (total: ' + venues.length + ')');
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, added: added, total: venues.length }));
        }).catch(function (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        });
        return;
    }

    // Get all venues
    if (req.url === '/api/venues' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ venues: venues, total: venues.length }));
        return;
    }

    // --- Event Endpoints ---

    var parsed = parseUrl(req.url);

    // Event SSE stream
    if (parsed.pathname === '/api/events/stream' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });
        res.write('data: ' + JSON.stringify({ type: 'connected', total: events.length }) + '\n\n');
        eventSseClients.push(res);
        req.on('close', function () {
            eventSseClients = eventSseClients.filter(function (c) { return c !== res; });
        });
        return;
    }

    // Check venue conflicts
    if (parsed.pathname === '/api/events/conflicts' && req.method === 'GET') {
        var venue = parsed.query.venue || '';
        var start = parseInt(parsed.query.start, 10);
        var end = parseInt(parsed.query.end, 10);

        if (!venue || isNaN(start) || isNaN(end)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'venue, start, and end query params required' }));
            return;
        }

        var conflicts = events.filter(function (evt) {
            var same_venue = (evt.venue_id === venue) ||
                (evt.location && evt.location.toLowerCase() === venue.toLowerCase());
            if (!same_venue) return false;
            var evt_start = evt.event_start || evt.date;
            var evt_end = evt.event_end || (evt_start + (evt.duration_minutes || 60) * 60000);
            return evt_start < end && evt_end > start;
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ conflicts: conflicts, total: conflicts.length }));
        return;
    }

    // Push new event (from eventmocks)
    if (parsed.pathname === '/api/events' && req.method === 'POST') {
        readBody(req).then(function (event) {
            var exists = events.some(function (e) { return e.id === event.id; });
            if (!exists) {
                events.push(event);
                notifyEventClients({ type: 'event_added', event: event, total: events.length });
                console.log('[+] Event added: ' + event.title + ' (total: ' + events.length + ')');
            }
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, total: events.length }));
        }).catch(function (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        });
        return;
    }

    // Get all events
    if (parsed.pathname === '/api/events' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ events: events, total: events.length }));
        return;
    }

    // Update event approval status (from concierge)
    var statusMatch = parsed.pathname.match(/^\/api\/events\/(.+)\/status$/);
    if (statusMatch && req.method === 'POST') {
        var eventId = statusMatch[1];
        readBody(req).then(function (body) {
            var found = false;
            for (var i = 0; i < events.length; i++) {
                if (events[i].id === eventId) {
                    if (!events[i].workflow) events[i].workflow = {};
                    if (!events[i].workflow.approval_tasks) events[i].workflow.approval_tasks = [];

                    var task_found = false;
                    for (var j = 0; j < events[i].workflow.approval_tasks.length; j++) {
                        if (events[i].workflow.approval_tasks[j].stage === (body.category || '').toUpperCase()) {
                            events[i].workflow.approval_tasks[j].status = body.status;
                            events[i].workflow.approval_tasks[j].completed_at = Date.now();
                            task_found = true;
                            break;
                        }
                    }
                    if (!task_found && body.category) {
                        events[i].workflow.approval_tasks.push({
                            stage: body.category.toUpperCase(),
                            status: body.status,
                            completed_at: Date.now()
                        });
                    }

                    found = true;
                    notifyEventClients({
                        type: 'status_changed',
                        event_id: eventId,
                        category: body.category,
                        status: body.status,
                        by_user: body.by_user || 'unknown'
                    });
                    console.log('[~] Status updated: event=' + eventId + ' category=' + body.category + ' status=' + body.status);
                    break;
                }
            }
            res.writeHead(found ? 200 : 404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: found, event_id: eventId }));
        }).catch(function (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        });
        return;
    }

    // Health check
    if (req.url === '/api/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'ok',
            venues: venues.length,
            venue_clients: sseClients.length,
            events: events.length,
            event_clients: eventSseClients.length
        }));
        return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, function () {
    console.log('==========================================');
    console.log('  Venue & Event Sync Server');
    console.log('  Port: ' + PORT);
    console.log('==========================================');
    console.log('');
    console.log('Venue Endpoints:');
    console.log('  POST /api/venues            - Push venue (from concierge)');
    console.log('  POST /api/venues/bulk       - Bulk push (from concierge)');
    console.log('  GET  /api/venues            - Get all venues (for eventmocks)');
    console.log('  GET  /api/venues/stream     - SSE stream (for eventmocks)');
    console.log('');
    console.log('Event Endpoints:');
    console.log('  POST /api/events            - Push event (from eventmocks)');
    console.log('  GET  /api/events            - Get all events');
    console.log('  GET  /api/events/stream     - SSE stream (both apps)');
    console.log('  GET  /api/events/conflicts  - Check venue time conflicts');
    console.log('  POST /api/events/:id/status - Update approval status');
    console.log('');
    console.log('  GET  /api/health            - Health check');
    console.log('');
    console.log('Waiting for connections...');
});
