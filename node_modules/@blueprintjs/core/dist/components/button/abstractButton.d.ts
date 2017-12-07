/// <reference types="react" />
import * as React from "react";
import { IActionProps } from "../../common/props";
import { IconName } from "../icon/icon";
export interface IButtonProps extends IActionProps {
    /**
     * If set to `true`, the button will display in an active state.
     * This is equivalent to setting `className="pt-active"`.
     * @default false
     */
    active?: boolean;
    /** A ref handler that receives the native HTML element backing this component. */
    elementRef?: (ref: HTMLElement) => any;
    /** Name of the icon (the part after `pt-icon-`) to add to the button. */
    rightIconName?: IconName;
    /**
     * If set to `true`, the button will display a centered loading spinner instead of its contents.
     * The width of the button is not affected by the value of this prop.
     * @default false
     */
    loading?: boolean;
    /**
     * HTML `type` attribute of button. Common values are `"button"` and `"submit"`.
     * Note that this prop has no effect on `AnchorButton`; it only affects `Button`.
     * @default "button"
     */
    type?: string;
}
export interface IButtonState {
    isActive: boolean;
}
export declare abstract class AbstractButton<T> extends React.Component<React.HTMLProps<T> & IButtonProps, IButtonState> {
    state: {
        isActive: boolean;
    };
    protected buttonRef: HTMLElement;
    protected refHandlers: {
        button: (ref: HTMLElement) => void;
    };
    private currentKeyDown;
    abstract render(): JSX.Element;
    protected getCommonButtonProps(): {
        className: string;
        disabled: boolean;
        onClick: React.EventHandler<React.MouseEvent<T>> & ((event: React.MouseEvent<HTMLElement>) => void);
        onKeyDown: (e: React.KeyboardEvent<any>) => void;
        onKeyUp: (e: React.KeyboardEvent<any>) => void;
        ref: (ref: HTMLElement) => void;
    };
    protected handleKeyDown: (e: React.KeyboardEvent<any>) => void;
    protected handleKeyUp: (e: React.KeyboardEvent<any>) => void;
    protected renderChildren(): React.ReactNode;
}
