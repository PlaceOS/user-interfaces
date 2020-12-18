import { Component } from '@angular/core';
import { SettingsService } from '@user-interfaces/common';

type Block = {
    start: Date;
    end: Date;
    value?: number;
    top: number;
    height: number;
};

@Component({
    selector: 'panel-timeline',
    template: `
        <div
            *ngFor="let block of blocks"
            [style.height.%]="block.height"
            [style.top.%]="block.top"
        >
            <div class="details">
                <div class="bar"></div>
                <div class="hour" [style.display]="!block.value && 'none'">
                    <span class="center">{{ block.value }}</span>
                </div>
                <div class="bar"></div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                border-right: 1px solid var(--opaque-light);
                background-color: var(--gray-400);
            }

            .details {
                display: flex;
                align-items: center;
            }

            .bar {
                flex-grow: 1;
                height: 1px;
                background-color: var(--opaque-light);
            }

            .hour {
                position: relative;
                font-size: 0.8em;
                height: 1px;
                width: 1.5em;
            }
        `,
    ],
})
export class PanelTimelineComponent {
    /** List of vertical time blocks  */
    public blocks: Block[] = [];

    constructor(private _settings: SettingsService) {
        this.blocks = this.generateTimelineBlocks();
    }

    private generateTimelineBlocks() {
        const { start_time, end_time, block_minutes } = this._settings.get(
            'app.general'
        );

        const blocks = this.generateBlocks(start_time, end_time, block_minutes);
        const height = 100 / blocks.length;

        return blocks.map(({ start, end }, index) => {
            const hours = start.getHours();
            const hour = hours > 12 ? hours - 12 : hours;
            const top = Math.round(height) * index;
            const value = start.getMinutes() === 0 ? hour : null;
            return { start, end, value, top, height };
        });
    }

    private generateBlocks(
        startTime: number,
        endTime: number,
        duration: number = 30
    ): Partial<Block>[] {
        const dates: Partial<Block>[] = [];
        let time = startTime;

        while (time < endTime) {
            const start = new Date(time);
            time += duration * 60 * 1000;

            const end = new Date(time);
            dates.push({ start, end });
        }

        return dates;
    }
}
