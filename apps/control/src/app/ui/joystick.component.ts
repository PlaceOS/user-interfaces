import {
    Component,
    computed,
    ElementRef,
    input,
    linkedSignal,
    OnDestroy,
    output,
    viewChild,
} from '@angular/core';
import { IconComponent } from '@placeos/components';

/** Distance from the centre, as a fraction of the radius, that does not move the camera */
const DEAD_ZONE = 0.25;

export enum JoystickTilt {
    Down = 'down',
    Up = 'up',
    Stop = 'stop',
}

export enum JoystickPan {
    Left = 'left',
    Right = 'right',
    Stop = 'stop',
}

@Component({
    selector: 'joystick',
    template: `
        <div
            #panning_control
            joystick
            (pointerdown)="startPan($event)"
            (pointermove)="movePan($event)"
            (pointerup)="stopPan()"
            (pointercancel)="stopPan()"
            (lostpointercapture)="stopPan()"
            (contextmenu)="$event.preventDefault()"
            class="bg-base-300 relative h-48 w-48 touch-none rounded-full text-white select-none"
        >
            <div class="absolute inset-0 flex items-center text-5xl">
                <icon style="transform: translateX(-.5rem)">
                    chevron_left
                </icon>
            </div>
            <div
                class="absolute inset-0 flex items-center justify-end text-5xl"
            >
                <icon style="transform: translateX(.5rem)">chevron_right</icon>
            </div>
            <div class="absolute inset-0 flex justify-center text-5xl">
                <icon style="transform: translateY(-.5rem)">expand_less</icon>
            </div>
            <div
                class="absolute inset-0 flex items-end justify-center text-5xl"
            >
                <icon style="transform: translateY(.5rem)">expand_more</icon>
            </div>
            <div
                class="bg-base-100 absolute top-12 right-12 bottom-12 left-12 flex items-center justify-center rounded-full"
            >
                <div
                    thumb
                    [style.transform]="thumb_transform()"
                    class="bg-neutral h-12 w-12 rounded-full"
                ></div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [IconComponent],
})
export class JoystickComponent implements OnDestroy {
    public readonly panInput = input<JoystickPan>(JoystickPan.Stop, {
        alias: 'pan',
    });
    public readonly pan = linkedSignal(this.panInput);
    public readonly tiltInput = input<JoystickTilt>(JoystickTilt.Stop, {
        alias: 'tilt',
    });
    public readonly tilt = linkedSignal(this.tiltInput);

    public readonly panChange = output<JoystickPan>();
    public readonly tiltChange = output<JoystickTilt>();

    private readonly _panning_el =
        viewChild<ElementRef<HTMLDivElement>>('panning_control');

    /** Joystick bounds while a gesture is active */
    private _box?: DOMRect;

    public readonly thumb_transform = computed(() => {
        const pan = this.pan();
        const tilt = this.tilt();
        return `translate(${
            pan === JoystickPan.Stop
                ? '0'
                : pan === JoystickPan.Left
                  ? '-50'
                  : '50'
        }%, ${
            tilt === JoystickTilt.Stop
                ? '0'
                : tilt === JoystickTilt.Up
                  ? '-50'
                  : '50'
        }%)`;
    });

    /** Start a pan gesture. Pointer capture keeps move and end events on this element. */
    public startPan(event: PointerEvent) {
        const el = this._panning_el().nativeElement;
        el.setPointerCapture?.(event.pointerId);
        this._box = el.getBoundingClientRect();
        this.handlePan(event);
    }

    /** Update the direction while a pan gesture is active */
    public movePan(event: PointerEvent) {
        if (this._box) this.handlePan(event);
    }

    public handlePan(event: PointerEvent) {
        if (!this._box) return;
        const dx = event.clientX - (this._box.left + this._box.width / 2);
        const dy = event.clientY - (this._box.top + this._box.height / 2);
        const tilt = this.tilt();
        const pan = this.pan();
        if (Math.hypot(dx, dy) < (this._box.width / 2) * DEAD_ZONE) {
            this.tilt.set(JoystickTilt.Stop);
            this.pan.set(JoystickPan.Stop);
        } else {
            this._setDirection((Math.atan2(dy, dx) * 180) / Math.PI);
        }
        const tiltValue = this.tilt();
        if (tilt !== tiltValue) this.tiltChange.emit(tiltValue);
        const panValue = this.pan();
        if (pan !== panValue) this.panChange.emit(panValue);
    }

    /** Set pan and tilt from an angle in degrees, where 0 is right and 90 is down */
    private _setDirection(angle: number) {
        this.tilt.set(
            angle >= 150 || angle <= -150 || (angle > -30 && angle < 30)
                ? JoystickTilt.Stop
                : angle > 0
                  ? JoystickTilt.Down
                  : JoystickTilt.Up,
        );
        this.pan.set(
            (angle >= 60 && angle <= 120) || (angle <= -60 && angle >= -120)
                ? JoystickPan.Stop
                : angle > 90 || angle < -90
                  ? JoystickPan.Left
                  : JoystickPan.Right,
        );
    }

    /** Never leave a camera moving when the joystick is removed mid-gesture */
    public ngOnDestroy() {
        this.stopPan();
    }

    /** End the pan gesture and emit a stop. Does nothing when no gesture is active. */
    public stopPan() {
        if (!this._box) return;
        this._box = undefined;
        this.tilt.set(JoystickTilt.Stop);
        this.pan.set(JoystickPan.Stop);
        this.tiltChange.emit(JoystickTilt.Stop);
        this.panChange.emit(JoystickPan.Stop);
    }
}
