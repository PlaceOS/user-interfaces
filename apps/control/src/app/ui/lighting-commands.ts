import { i18n, notifyError } from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { errorText } from '../error-text';

/**
 * Run a lighting command. A request can time out when the lighting system
 * does not reply, so a failure shows an error notice and does not reject.
 */
export async function execLighting(
    system_id: string,
    mod: string,
    method: string,
    args: unknown[],
) {
    const module = getModule(system_id, mod);
    if (!module) return;
    try {
        await module.execute(method, args);
    } catch (error) {
        notifyError(
            i18n('APP.CONTROL.LIGHTING_COMMAND_ERROR', {
                error: errorText(error),
            }),
        );
    }
}
