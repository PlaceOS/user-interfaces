import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { DashboardsService } from './dashboards.service';

@Component({
    selector: `stagehand-dashboard-view`,
    template: ` <div class="p-4">View</div> `,
    styles: [``],
    imports: [],
})
export class DashboardViewComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);
    private _service = inject(DashboardsService);

    public readonly setDashboard = (id) => this._service.setDashboard(id);

    public ngOnInit() {
        this.subscription(
            'route.parms',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) {
                    this.setDashboard(params.get('id'));
                }
            }),
        );
    }
}
