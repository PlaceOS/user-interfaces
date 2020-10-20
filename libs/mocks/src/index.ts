
import { registerSystem } from '@placeos/ts-client';
import { createSystem } from './lib/systems-bindings.mock';

import './lib/api/zones.mock';
import './lib/api/users.mock';
import './lib/api/systems.mock';
import './lib/api/events.mock';
import './lib/api/calendars.mock';

registerSystem('sys-B0', createSystem('sys-B0') as any);
