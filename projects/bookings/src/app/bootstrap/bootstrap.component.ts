import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import { Space } from 'src/app/spaces/space.class';
import { SpacesService } from 'src/app/spaces/spaces.service';

@Component({
    selector: 'app-bootstrap',
    templateUrl: './bootstrap.component.html',
    styleUrls: ['./bootstrap.component.scss'],
})
export class BootstrapComponent extends BaseClass implements OnInit {
    /** List of available systems */
    public system_list: Space[] = [];
    /** List of available systems */
    public filtered_list: Space[] = [];
    /** Whether application data is loading */
    public loading: boolean;
    /** ID of the system to bootstrap */
    public system_id: string;
    /** Selected system to bootstrap */
    public selected_system: Space = null;
    /** Whether input field is focused */
    public input_focus: boolean;

    constructor(
        private _spaces: SpacesService,
        private route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public async ngOnInit() {
        this.loading = true;
        await this._spaces.initialised.pipe(first((_) => _)).toPromise();
        this.system_list = this._spaces.space_list || [];
        this.filter('');
        this.loading = false;
        this.subscription(
            'route.query',
            this.route.queryParamMap.subscribe((params) => {
                if (params.has('clear') && params.get('clear')) {
                    this.clearBootstrap();
                }
                if (params.has('system_id') || params.has('sys_id')) {
                    this.system_id = params.get('system_id') || params.get('sys_id');
                    this.bootstrap();
                }
            })
        );
        this.checkBootstrapped();
    }

    /**
     * Setup the default system for the application to bind to
     */
    public bootstrap() {
        this.configure(this.system_id);
    }

    /**
     * Check if the application has previously been bootstrapped
     */
    private checkBootstrapped(): void {
        this.loading = true;
        if (localStorage) {
            const system_id = localStorage.getItem('ACA.PANEL.system');
            if (system_id) {
                this._router.navigate(['panel', system_id]);
                return;
            }
        }
        this.loading = false;
    }

    /**
     * Save the bootstrapped ID and redirect to the panel for that ID
     * @param system_id System to bootstrap
     */
    private configure(system_id: string): void {
        if (localStorage) {
            localStorage.setItem('ACA.PANEL.system', system_id);
            localStorage.setItem('trusted', 'true');
            localStorage.setItem('fixed_device', 'true');
        }
        this._router.navigate(['panel', system_id]);
    }

    /**
     * Remove any previously set bootstrapping details
     */
    private clearBootstrap() {
        if (localStorage) {
            localStorage.removeItem('ACA.PANEL.system');
        }
    }

    public filter(search: string) {
        const s = search.toLowerCase();
        this.filtered_list = this.system_list
            .filter((i) => i.name.toLowerCase().includes(s) || i.id.includes(search))
            .slice(0, 100);
    }
}
