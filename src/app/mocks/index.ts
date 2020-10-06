
import './mock-data';

import { registerSystem } from '@placeos/ts-client';
import { createSystem } from './systems-bindings.mock';

import './api/zones.mock';
import './api/users.mock';
import './api/systems.mock';
import './api/events.mock';
import './api/calendars.mock';

registerSystem('sys-B0', createSystem('sys-B0') as any);
