import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '../lib/icon.component';
import { UploadPermissionsModalComponent } from '../lib/upload-permissions-modal.component';

describe('UploadPermissionsModalComponent', () => {
    let spectator: Spectator<UploadPermissionsModalComponent>;
    const test_file = new File(['contents'], 'report.pdf');
    const close_spy = jest.fn();
    const createComponent = createComponentFactory({
        component: UploadPermissionsModalComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            { provide: MatDialogRef, useValue: { close: close_spy } },
            {
                provide: MAT_DIALOG_DATA,
                useValue: { file: test_file, is_public: false },
            },
            provideNoopAnimations(),
        ],
    });

    beforeEach(() => {
        close_spy.mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
        expect(spectator.component.file).toBe(test_file);
    });

    it('should show the permission selector for non-public files', () => {
        expect('mat-select').toExist();
        spectator.component.is_public.set(true);
        spectator.detectChanges();
        expect('mat-select').not.toExist();
    });

    it('should close with the file details on upload', () => {
        spectator.component.permissions.set('admin');
        spectator.detectChanges();
        const buttons = spectator.queryAll('footer button');
        spectator.click(buttons[1]);
        expect(close_spy).toHaveBeenCalledWith({
            file: test_file,
            is_public: false,
            permissions: 'admin',
        });
    });

    it('should close without a result on cancel', () => {
        const buttons = spectator.queryAll('footer button');
        spectator.click(buttons[0]);
        expect(close_spy).toHaveBeenCalledWith('');
    });

    it('should close the dialog via the close method', () => {
        spectator.component.close();
        expect(close_spy).toHaveBeenCalled();
    });
});
