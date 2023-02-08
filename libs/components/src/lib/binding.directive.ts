import {
    Directive,
    Input,
    SimpleChanges,
    OnInit,
    OnChanges,
    OnDestroy,
    ElementRef,
    Renderer2,
    EventEmitter,
    Output,
} from '@angular/core';
import { onlineState, authority, getModule } from '@placeos/ts-client';

import { AsyncHandler } from '@placeos/common';
import { filter, first } from 'rxjs/operators';

@Directive({
    selector: 'i[bind], [binding], co-bind',
})
export class BindingDirective<T = any>
    extends AsyncHandler
    implements OnInit, OnChanges, OnDestroy
{
    /** ID of the system to bind */
    @Input() public sys: string = '';
    /** Class name of the module to bind */
    @Input() public mod: string = '';
    /** Index of the system to bind */
    @Input() public index = 1;
    /** Status variable to bind to */
    @Input() public bind: string = '';
    /** Method to execute */
    @Input() public exec: string = '';
    /** Method to execute */
    @Input() public delay: number = 100;
    /** Event to listen for on the parent */
    @Input('onEvent') public on_event: string = '';
    /** ID of the system to bind to */
    @Input() public params: any[] = null;
    @Input() public ignore: boolean = false;
    /** Current value of the binding */
    @Input() public model: T | null = null;
    /** Emitter for changes to the value of the binding */
    @Output() public modelChange = new EventEmitter<T | null>();

    private _binding = false;
    private _old_model: T | null = null;

    constructor(
        private _element: ElementRef<HTMLElement>,
        private _renderer: Renderer2
    ) {
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
        if (
            changes.model &&
            this._old_model !== this.model &&
            this.model != null
        ) {
            this._old_model = this.model;
            this.execute();
        }
        if (changes.on_event && this.on_event) {
            this.subscription(
                'on_event',
                this._renderer.listen(
                    this._element.nativeElement,
                    this.on_event,
                    () => this.execute()
                )
            );
        }
    }

    /** Bind to set status variable */
    private bindVariable() {
        if (
            authority() &&
            this.bind &&
            this.sys &&
            this.mod &&
            !this._binding
        ) {
            this.timeout(
                'bind',
                () => {
                    const module = getModule(this.sys, this.mod, this.index);
                    const binding = module.binding(this.bind);
                    this._binding = true;
                    this.subscription('binding', binding.bind());
                    this.subscription(
                        'on_changes',
                        binding
                            .listen()
                            .pipe(filter((_) => _ != null))
                            .subscribe((value) => {
                                setTimeout(() => {
                                    this._binding = false;
                                    this.clearTimeout('bound');
                                    if (this.ignore) return;
                                    this.model = value;
                                    this._old_model = this.model;
                                    this.modelChange.emit(this.model);
                                }, 10);
                            })
                    );
                    this.timeout('bound', () => (this._binding = false), 200);
                },
                20
            );
        }
    }

    /** Excute the set method on the module */
    private execute() {
        if (
            authority() &&
            this.exec &&
            this.sys &&
            this.mod &&
            !this._timers['execute']
        ) {
            this.timeout(
                'execute',
                () => {
                    const module = getModule(this.sys, this.mod, this.index);
                    let params = this.params;
                    if (this.bind) params = this.params || [this.model];
                    module.execute(this.exec, params || []).then((result) => {
                        // Emit exec result if not bound to status variable
                        if (!this.bind) {
                            this.model = result;
                            this._old_model = this.model;
                            this.modelChange.emit(this.model);
                        }
                    });
                },
                this.delay
            );
        }
    }
}
