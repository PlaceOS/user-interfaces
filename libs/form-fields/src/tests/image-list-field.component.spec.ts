import { Clipboard } from '@angular/cdk/clipboard';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { UploadsService } from '@placeos/common';
import { mockDirective } from '@placeos/common/tests';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageListFieldComponent } from '../lib/image-list-field.component';

const chipEvent = (value: string): MatChipInputEvent =>
    ({
        value,
        chipInput: { inputElement: { value } },
    }) as unknown as MatChipInputEvent;

describe('ImageListFieldComponent', () => {
    let spectator: Spectator<ImageListFieldComponent>;
    const createComponent = createComponentFactory({
        component: ImageListFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            mockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            MockProvider(UploadsService, {
                uploadFileWithPermissions: jest.fn(() =>
                    Promise.resolve('upload-1'),
                ),
                upload_list: (() => []) as any,
            }),
            MockProvider(Clipboard, { copy: jest.fn(() => true) }),
            MockProvider(MatDialog, {
                open: jest.fn(() => ({ afterClosed: () => of(null) })),
            } as any),
        ],
        imports: [MatChipsModule, MatFormFieldModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should write external values into the list', () => {
        spectator.component.writeValue(['a.png', 'b.png']);
        spectator.detectChanges();
        expect(spectator.component.list()).toEqual(['a.png', 'b.png']);
        expect(spectator.queryAll('mat-chip-row')).toHaveLength(2);
    });

    it('should default missing written values to an empty list', () => {
        spectator.component.writeValue(undefined);
        expect(spectator.component.list()).toEqual([]);
    });

    it('should add a url via the chip input', () => {
        const on_change = jest.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.addImage(chipEvent('new.png'));
        expect(spectator.component.list()).toEqual(['new.png']);
        expect(on_change).toHaveBeenCalledWith(['new.png']);
    });

    it('should not add duplicate urls', () => {
        spectator.component.writeValue(['dup.png']);
        spectator.component.addImageUrl('dup.png');
        expect(spectator.component.list()).toEqual(['dup.png']);
    });

    it('should remove an image and emit the change', () => {
        const on_change = jest.fn();
        spectator.component.writeValue(['a.png', 'b.png']);
        spectator.component.registerOnChange(on_change);
        spectator.component.removeImage('a.png');
        expect(spectator.component.list()).toEqual(['b.png']);
        expect(on_change).toHaveBeenCalledWith(['b.png']);
    });

    it('should copy an image url to the clipboard', () => {
        const clipboard = spectator.inject(Clipboard);
        spectator.component.copyLink('copy.png');
        expect(clipboard.copy).toHaveBeenCalledWith('copy.png');
    });

    it('should open the image viewer dialog', () => {
        const dialog = spectator.inject(MatDialog);
        spectator.component.viewImage('view.png');
        expect(dialog.open).toHaveBeenCalledWith(expect.anything(), {
            data: 'view.png',
        });
    });
});
