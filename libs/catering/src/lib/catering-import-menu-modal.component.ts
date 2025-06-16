import { Component, EventEmitter, Output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { csvToJson, DialogEvent, downloadFile } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CateringItem } from './catering-item.class';

interface ImportItem {
    id: string;
    type: 'item' | 'option';
    name: string;
    unit_price: number;
    category: string;
    caterer: string;
    description: string;
    tags: string;
    multiple: boolean;
}

@Component({
    selector: 'catering-import-menu-modal',
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'CATERING.MENU_IMPORT' | translate }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main>
                <div
                    class="relative mx-2 flex h-[24rem] w-[24rem] cursor-pointer flex-col items-center justify-center space-y-4 rounded-xl border-4 border-dashed border-base-300 p-4 hover:bg-base-200"
                >
                    <icon class="text-8xl opacity-30">cloud_upload</icon>
                    <p class="px-4 text-center opacity-30">
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
        } @else {
            <main
                class="flex h-[24rem] w-[24rem] flex-col items-center justify-center space-y-2 p-8"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        }
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatDialogModule,
    ],
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
            const data = csvToJson(contents) as any;
            const new_items = this._processData(data);
            this.loading = '';
            this.event.emit({
                reason: 'done',
                metadata: new_items,
            });
        });
        fileReader.readAsText(file);
    }

    private _processData(list: ImportItem[]): CateringItem[] {
        const items = [];
        const isType = (i, t) => i.type.toLowerCase() === t;
        for (const item of list) {
            if (!isType(item, 'item')) continue;
            const opt_list = list.filter(
                (o) =>
                    isType(o, 'option') &&
                    (o.tags === item.id || o.description === item.id),
            );
            items.push(
                new CateringItem({
                    ...(item as any),
                    options: opt_list.map((o) => ({
                        id: o.id,
                        name: o.name,
                        group: o.category,
                        multiple: o.multiple,
                        unit_price: o.unit_price,
                    })),
                }),
            );
        }
        return items;
    }

    public downloadTemplate() {
        const template = `ID,Type,Name,Unit Price,Category,Caterer,Description,Tags,Multiple
item-1,item,Coffee,200,Drink,Wake Up Cafe,Wake Up,,
option-1,option,1 Sugar,20,Sugars,,,item-1,false`;
        downloadFile('import-menu-template.csv', template);
    }
}
