/** Result of a call that the API refused with the given status */
export function httpFailure(status: number) {
    return {
        ok: false,
        error: { kind: 'http', status, message: null, body: null, text: null },
    } as const;
}
