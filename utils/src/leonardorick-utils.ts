// Anything exported from this file is importable by other in-browser modules.

// the name of the events is following this pattern:
//@<organizationName>/<application context>/<action>
export type SharedSspaEventsType = {
    ADD_TASK: string;
}
export const SHARED_SSPA_EVENTS: SharedSspaEventsType = {
    ADD_TASK: '@leonardorick/todo/add-task'
}

export function emitEvent(name: string, data: any) {
    dispatchEvent(new CustomEvent(name, {
        detail: data
    }))
}

export function listenEvent(name: string, cb: (...args: any) => void) {
    window.addEventListener(name, cb)
}


export default emitEvent;
