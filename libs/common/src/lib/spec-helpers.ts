import { Type } from '@angular/core';
import { Spectator } from '@ngneat/spectator/jest';

export async function whenChangesStable<T = Type<any>>(spectator: Spectator<T>) {
    spectator.detectChanges();
    await spectator.fixture.whenStable()
    spectator.detectChanges();
}
