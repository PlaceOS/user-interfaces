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

import { BaseClass } from '@user-interfaces/common';
import { first } from 'rxjs/operators';

@Directive({
    selector: 'i[bind], [binding], co-bind',
})
export class BindingDirective<T = any>
    extends BaseClass
    implements OnInit, OnChanges, OnDestroy {
    /** ID of the system to bind */
    @Input() public sys: string;
    /** Class name of the module to bind */
    @Input() public mod: string;
    /** Index of the system to bind */
    @Input() public index = 1;
    /** Status variable to bind to */
    @Input() public bind: string;
    /** Method to execute */
    @Input() public exec: string;
    /** Event to listen for on the parent */
    @Input('onEvent') public on_event: string;
    /** ID of the system to bind to */
    @Input() public params: any[] = [];
    /** Current value of the binding */
    @Input() public model: T;
    /** Emitter for changes to the value of the binding */
    @Output() public modelChange = new EventEmitter<T>();

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
            changes.model.previousValue !== this.model &&
            this.model != null
        ) {
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
        if (authority() && this.bind && this.sys && this.mod) {
            const module = getModule(this.sys, this.mod, this.index);
            const binding = module.binding(this.bind);
            this.subscription('binding', binding.bind());
            this.subscription(
                'on_changes',
                binding.listen().subscribe((value) =>
                    setTimeout(() => {
                        this.model = value;
                        this.modelChange.emit(this.model);
                    }, 10)
                )
            );
        }
    }

    /** Excute the set method on the module */
    private execute() {
        if (authority() && this.exec && this.sys && this.mod) {
            const module = getModule(this.sys, this.mod, this.index);
            if (this.bind) this.params = [this.model];
            module.execute(this.exec, this.params).then((result) => {
                // Emit exec result if not bound to status variable
                if (!this.bind) {
                    this.model = result;
                    this.modelChange.emit(this.model);
                }
            });
        }
    }
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: T) {
        this.model = value;
        this.modelChange.emit(this.model);
        this.execute();
    }
}
