/// <reference types="react" />
import * as React from "react";
import { AbstractComponent } from "../../common/abstractComponent";
import { IProps } from "../../common/props";
export interface ICoreSliderProps extends IProps {
    /**
     * Whether the slider is non-interactive.
     * @default false
     */
    disabled?: boolean;
    /**
     * Increment between successive labels. Must be greater than zero.
     * @default 1
     */
    labelStepSize?: number;
    /**
     * Number of decimal places to use when rendering label value. Default value is the number of
     * decimals used in the `stepSize` prop. This prop has _no effect_ if you supply a custom
     * `renderLabel` callback.
     * @default inferred from stepSize
     */
    labelPrecision?: number;
    /**
     * Maximum value of the slider.
     * @default 10
     */
    max?: number;
    /**
     * Minimum value of the slider.
     * @default 0
     */
    min?: number;
    /**
     * Whether a solid bar should be rendered on the track between current and initial values,
     * or between handles for `RangeSlider`.
     * @default true
     */
    showTrackFill?: boolean;
    /**
     * Increment between successive values; amount by which the handle moves. Must be greater than zero.
     * @default 1
     */
    stepSize?: number;
    /**
     * Callback to render a single label. Useful for formatting numbers as currency or percentages.
     * If `true`, labels will use number value formatted to `labelPrecision` decimal places.
     * If `false`, labels will not be shown.
     * @default true
     */
    renderLabel?: boolean | ((value: number) => string | JSX.Element);
}
export interface ISliderState {
    labelPrecision?: number;
    /** the client size, in pixels, of one tick */
    tickSize?: number;
}
export declare abstract class CoreSlider<P extends ICoreSliderProps> extends AbstractComponent<P, ISliderState> {
    className: string;
    private trackElement;
    private refHandlers;
    constructor(props: P);
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillReceiveProps(props: P & {
        children: React.ReactNode;
    }): void;
    protected abstract renderHandles(): JSX.Element | JSX.Element[];
    protected abstract renderFill(): JSX.Element;
    /** An event listener invoked when the user clicks on the track outside a handle */
    protected abstract handleTrackClick(event: React.MouseEvent<HTMLElement>): void;
    protected abstract handleTrackTouch(event: React.TouchEvent<HTMLElement>): void;
    protected formatLabel(value: number): React.ReactChild;
    protected validateProps(props: P): void;
    private maybeRenderAxis();
    private maybeRenderFill();
    private maybeHandleTrackClick;
    private maybeHandleTrackTouch;
    private canHandleTrackEvent;
    private getLabelPrecision({labelPrecision, stepSize});
    private updateTickSize();
}
