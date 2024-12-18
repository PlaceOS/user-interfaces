import { Component, EventEmitter, Output } from '@angular/core';
import { csvToJson, DialogEvent, downloadFile } from '@placeos/common';
import { CateringItem } from './catering-item.class';

@Component({
    selector: 'catering-import-menu-modal',
    template: `
        <header
            class="sticky top-0 p-2 m-2 w-[calc(100%-1rem)] border-none z-10 bg-base-200 rounded"
        >
            <h2 class="text-xl font-medium px-2">
                {{ 'CATERING.MENU_IMPORT' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main *ngIf="!loading; else load_state">
            <div
                class="relative flex flex-col items-center justify-center space-y-4 h-[24rem] w-[24rem] border-4 border-base-300 border-dashed rounded-xl hover:bg-base-200 mx-2 p-4 cursor-pointer"
            >
                <app-icon class="text-8xl opacity-30">cloud_upload</app-icon>
                <p class="opacity-30 text-center px-4">
                    {{ 'CATERING.MENU_IMPORT_FILE_SELECT' | translate }}
                </p>
                <input
                    type="file"
                    class="absolute inset-0 opacity-0"
                    (change)="handleFileEvent($event)"
                />
            </div>
            <div class="flex items-center justify-center p-2">
                <button
                    btn
                    matRipple
                    class="w-full"
                    (click)="downloadTemplate()"
                >
                    {{ 'CATERING.MENU_IMPORT_TEMPLATE' | translate }}
                </button>
            </div>
        </main>
        <ng-template #load_state>
            <main
                class="flex flex-col items-center justify-center space-y-2 p-8 h-[24rem] w-[24rem]"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class CateringImportMenuModalComponent {
    @Output() public event = new EventEmitter<DialogEvent>();
    public loading: string;

    /** Upload the image to the cloud */
    public handleFileEvent(event: DragEvent) {
        this.loading = 'Processing menu data...';
        const element: HTMLInputElement = event.target as any;
        if (!element?.files) return (this.loading = '');
        const files: FileList = element.files;
        if (!files.length) return (this.loading = '');
        const file = files[0];
        const fileReader = new FileReader();
        fileReader.addEventListener('loadend', (e: any) => {
            const contents = e.target.result;
            const data = csvToJson(contents);
            this.loading = '';
            this.event.emit({
                reason: 'done',
                metadata: data
                    .filter((_) => (_.type || '').toLowerCase() === 'item')
                    .map(
                        (i) =>
                            new CateringItem({
                                ...i,
                                options: data
                                    .filter(
                                        (_) =>
                                            (_.type || '').toLowerCase() ===
                                                'option' && _.tags === i.id,
                                    )
                                    .map((_) => ({
                                        id: _.id,
                                        name: _.name,
                                        group: _.category,
                                        multiple: _.multiple,
                                        unit_price: _.unit_price,
                                    })),
                            }),
                    ),
            });
        });
        fileReader.readAsText(file);
    }

    public downloadTemplate() {
        const template = `ID,Type,Name,Unit Price,Category,Caterer,Description,Tags,Multiple
item-1,item,Coffee,200,Drink,Wake Up Cafe,Wake Up,,
option-1,option,1 Sugar,20,Sugars,,item-1,false`;
        downloadFile('import-menu-template.csv', template);
    }
}
