import { ElementRef, Renderer, EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';
import { HammerInput, FocusOriginMonitor, MdRipple } from '../core';
import { ControlValueAccessor } from '@angular/forms';
export declare const MD_SLIDE_TOGGLE_VALUE_ACCESSOR: any;
export declare class MdSlideToggleChange {
    source: MdSlideToggle;
    checked: boolean;
}
/**
 * Two-state control, which can be also called `switch`.
 */
export declare class MdSlideToggle implements OnDestroy, AfterContentInit, ControlValueAccessor {
    private _elementRef;
    private _renderer;
    private _focusOriginMonitor;
    private onChange;
    private onTouched;
    private _uniqueId;
    private _color;
    private _isMousedown;
    private _slideRenderer;
    private _disabled;
    private _required;
    private _disableRipple;
    /** Reference to the focus state ripple. */
    private _focusRipple;
    /** Name value will be applied to the input element if present */
    name: string;
    /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
    id: string;
    /** Used to specify the tabIndex value for the underlying input element. */
    tabIndex: number;
    /** Whether the label should appear after or before the slide-toggle. Defaults to 'after' */
    labelPosition: 'before' | 'after';
    /** Whether the slide-toggle element is checked or not */
    checked: boolean;
    /** Used to set the aria-label attribute on the underlying input element. */
    ariaLabel: string;
    /** Used to set the aria-labelledby attribute on the underlying input element. */
    ariaLabelledby: string;
    /** Whether the slide-toggle is disabled. */
    disabled: boolean;
    /** Whether the slide-toggle is required. */
    required: boolean;
    /** Whether the ripple effect for this slide-toggle is disabled. */
    disableRipple: boolean;
    /** An event will be dispatched each time the slide-toggle changes its value. */
    change: EventEmitter<MdSlideToggleChange>;
    /** Returns the unique id for the visual hidden input. */
    readonly inputId: string;
    /** Reference to the underlying input element. */
    _inputElement: ElementRef;
    /** Reference to the ripple directive on the thumb container. */
    _ripple: MdRipple;
    constructor(_elementRef: ElementRef, _renderer: Renderer, _focusOriginMonitor: FocusOriginMonitor);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * This function will called if the underlying input changed its value through user interaction.
     */
    _onChangeEvent(event: Event): void;
    _onInputClick(event: Event): void;
    _setMousedown(): void;
    /** Implemented as part of ControlValueAccessor. */
    writeValue(value: any): void;
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn: any): void;
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn: any): void;
    /** Implemented as a part of ControlValueAccessor. */
    setDisabledState(isDisabled: boolean): void;
    /** Focuses the slide-toggle. */
    focus(): void;
    /** The color of the slide-toggle. Can be primary, accent, or warn. */
    color: string;
    /** Toggles the checked state of the slide-toggle. */
    toggle(): void;
    /** Function is called whenever the focus changes for the input element. */
    private _onInputFocusChange(focusOrigin);
    private _updateColor(newColor);
    private _setElementColor(color, isAdd);
    /**
     * Emits a change event on the `change` output. Also notifies the FormControl about the change.
     */
    private _emitChangeEvent();
    _onDragStart(): void;
    _onDrag(event: HammerInput): void;
    _onDragEnd(): void;
}
