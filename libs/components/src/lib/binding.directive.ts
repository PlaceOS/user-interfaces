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
    model,
    output,
} from '@angular/core';
import { authority, getModule, onlineState } from '@placeos/ts-client';

import { AsyncHandler } from '@placeos/common';
import { first } from 'rxjs/operators';

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
    public readonly model = model<T | null>(null);
    /** Emitter for changes to the value of the binding */
    public readonly modelChange = output<T | null>();

    private _binding = false;
    private _old_model: T | null = null;

    constructor() {
        super();
    }

    public ngOnInit(): void {
        onlineState()
            ?.pipe(first((_) => _))
            .subscribe((_) => this.bindVariable());
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.sys || changes.mod || changes.bind) {
            this.bindVariable();
        }
        const model = this.model();
        if (changes.model && this._old_model !== model && this.model != null) {
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

    /** Bind to set status variable */
    private bindVariable() {
        if (
            authority() &&
            this.bind() &&
            this.sys() &&
            this.mod() &&
            !this._binding
        ) {
            this.timeout(
                'bind',
                () => {
                    const module = getModule(
                        this.sys(),
                        this.mod(),
                        this.index(),
                    );
                    const binding = module.variable(this.bind());
                    this._binding = true;
                    this.subscription(
                        'on_changes',
                        binding.bindThenSubscribe((value) => {
                            if (value == null) return;
                            setTimeout(() => {
                                this._binding = false;
                                this.clearTimeout('bound');
                                if (this.ignore()) return;
                                this.model.set(value);
                                this._old_model = this.model();
                                this.modelChange.emit(this.model());
                            }, 10);
                        }),
                    );
                    this.timeout('bound', () => (this._binding = false), 200);
                },
                20,
            );
        }
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
                    module.execute(this.exec(), params || []).then((result) => {
                        // Emit exec result if not bound to status variable
                        if (!this.bind()) {
                            this.model.set(result);
                            this._old_model = this.model();
                            this.modelChange.emit(this.model());
                        }
                    });
                },
                this.delay(),
            );
        }
    }
}
