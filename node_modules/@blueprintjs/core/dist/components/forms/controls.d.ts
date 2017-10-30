/// <reference types="react" />
import * as React from "react";
import { IProps } from "../../common/props";
import { HTMLInputProps } from "../../index";
export interface IControlProps extends IProps, HTMLInputProps {
    /** Whether the control is checked. */
    checked?: boolean;
    /** Whether the control is initially checked (uncontrolled mode). */
    defaultChecked?: boolean;
    /** Whether the control is non-interactive. */
    disabled?: boolean;
    /** Ref handler that receives HTML `<input>` element backing this component. */
    inputRef?: (ref: HTMLInputElement) => any;
    /** Whether the control is inline. */
    inline?: boolean;
    /**
     * Text label for the control.
     *
     * This prop actually supports JSX elements, but TypeScript will throw an error because
     * `HTMLProps` only allows strings. Use `labelElement` to supply a JSX element in TypeScript.
     */
    label?: string;
    /**
     * JSX Element label for the control.
     *
     * This prop is necessary for TypeScript consumers as the type definition for `label` only
     * accepts strings. JavaScript consumers can provide a JSX element directly to `label`.
     */
    labelElement?: React.ReactNode;
    /** Event handler invoked when input value is changed. */
    onChange?: React.FormEventHandler<HTMLInputElement>;
}
/** Base Component class for all Controls */
export declare class Control<P extends IControlProps> extends React.Component<P, {}> {
    protected renderControl(type: "checkbox" | "radio", typeClassName: string, inputRef?: (ref: HTMLInputElement) => any): JSX.Element;
}
export interface ICheckboxProps extends IControlProps {
    /** Whether this checkbox is initially indeterminate (uncontrolled mode). */
    defaultIndeterminate?: boolean;
    /**
     * Whether this checkbox is indeterminate, or "partially checked."
     * The checkbox will appear with a small dash instead of a tick to indicate that the value
     * is not exactly true or false.
     */
    indeterminate?: boolean;
}
export declare class Checkbox extends Control<ICheckboxProps> {
    static displayName: string;
    private input;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private updateIndeterminate();
    private handleInputRef;
}
export interface ISwitchProps extends IControlProps {
}
export declare class Switch extends Control<ISwitchProps> {
    static displayName: string;
    render(): JSX.Element;
}
export interface IRadioProps extends IControlProps {
}
export declare class Radio extends Control<IRadioProps> {
    static displayName: string;
    render(): JSX.Element;
}
export declare const CheckboxFactory: React.ComponentFactory<ICheckboxProps & {
    children?: React.ReactNode;
}, Checkbox>;
export declare const SwitchFactory: React.ComponentFactory<ISwitchProps & {
    children?: React.ReactNode;
}, Switch>;
export declare const RadioFactory: React.ComponentFactory<IRadioProps & {
    children?: React.ReactNode;
}, Radio>;
