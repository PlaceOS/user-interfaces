import {
    Directive,
    ElementRef,
    OnChanges,
    OnDestroy,
    OnInit,
    Renderer2,
    SimpleChanges,
    inject,
    input,
    linkedSignal,
    output,
} from '@angular/core';
import {
    authority,
    getModule,
    onlineState,
    waitForSignal,
} from '@placeos/ts-client';

import { AsyncHandler, log } from '@placeos/common';

@Directive({
    selector: 'i[bind], [binding], co-bind',
})
export class BindingDirective<T = any>
    extends AsyncHandler
    implements OnInit, OnChanges, OnDestroy
{
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private _renderer = inject(Renderer2);

    /** ID of the system to bind */
    public readonly sys = input<string>('');
    /** Class name of the module to bind */
    public readonly mod = input<string>('');
    /** Index of the system to bind */
    public readonly index = input(1);
    /** Status variable to bind to */
    public readonly bind = input<string>('');
    /** Method to execute */
    public readonly exec = input<string>('');
    /** Method to execute */
    public readonly delay = input<number>(100);
    /** Event to listen for on the parent */
    public readonly on_event = input<string>('', { alias: 'onEvent' });
    /** ID of the system to bind to */
    public readonly params = input<any[]>(null);
    public readonly ignore = input<boolean>(false);
    /** Current value of the binding */
    public readonly modelInput = input<T | null>(null, { alias: 'model' });
    public readonly model = linkedSignal(this.modelInput);
    /** Emitter for changes to the value of the binding */
    public readonly modelChange = output<T | null>();

    private _old_model: T | null = null;
    private _destroyed = false;

    public ngOnInit(): void {
        waitForSignal(onlineState(), (_) => _).then(() => {
            if (!this._destroyed) this.bindVariable();
        });
    }

    public ngOnDestroy(): void {
        this._destroyed = true;
        super.ngOnDestroy();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.sys || changes.mod || changes.bind) {
            this.bindVariable();
        }
        const model = this.model();
        if (
            (changes.model || changes.modelInput) &&
            this._old_model !== model &&
            model != null
        ) {
            this._old_model = model;
            this.execute();
        }
        const on_event = this.on_event();
        if (changes.on_event && on_event) {
            this.subscription(
                'on_event',
                this._renderer.listen(
                    this._element.nativeElement,
                    on_event,
                    () => this.execute(),
                ),
            );
        }
    }

    /**
     * Bind to the set status variable. Replaces any previous binding, and
     * removes it when the system, module or variable is cleared.
     */
    private bindVariable() {
        if (!authority() || !this.bind() || !this.sys() || !this.mod()) {
            this.clearTimeout('bind');
            this.clearTimeout('on_value');
            this.unsub('on_changes');
            return;
        }
        this.timeout(
            'bind',
            () => {
                const module = getModule(this.sys(), this.mod(), this.index());
                const binding = module.variable(this.bind());
                this.subscription(
                    'on_changes',
                    binding.bindThenSubscribe((value) => {
                        this.timeout(
                            'on_value',
                            () => {
                                if (this.ignore()) return;
                                // Not a local change, so do not execute it
                                this._old_model = value;
                                this.model.set(value);
                                this.modelChange.emit(value);
                            },
                            10,
                        );
                    }),
                );
            },
            20,
        );
    }

    /** Excute the set method on the module */
    private execute() {
        if (
            authority() &&
            this.exec() &&
            this.sys() &&
            this.mod() &&
            !this._timers['execute']
        ) {
            this.timeout(
                'execute',
                () => {
                    const module = getModule(
                        this.sys(),
                        this.mod(),
                        this.index(),
                    );
                    let params = this.params();
                    if (this.bind()) params = this.params() || [this.model()];
                    module
                        .execute(this.exec(), params || [])
                        .then((result) => {
                            // Emit exec result if not bound to status variable
                            if (!this.bind()) {
                                this.model.set(result);
                                this._old_model = this.model();
                                this.modelChange.emit(this.model());
                            }
                        })
                        .catch((e) =>
                            log(
                                'Binding',
                                `Failed to execute ${this.exec()}`,
                                e,
                                'warn',
                            ),
                        );
                },
                this.delay(),
            );
        }
    }
}
