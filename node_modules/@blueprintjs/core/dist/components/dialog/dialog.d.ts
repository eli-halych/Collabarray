/// <reference types="react" />
import * as React from "react";
import { AbstractComponent } from "../../common/abstractComponent";
import { IProps } from "../../common/props";
import { IconName } from "../icon/icon";
import { IBackdropProps, IOverlayableProps } from "../overlay/overlay";
export interface IDialogProps extends IOverlayableProps, IBackdropProps, IProps {
    /**
     * Toggles the visibility of the overlay and its children.
     * This prop is required because the component is controlled.
     */
    isOpen: boolean;
    /**
     * Name of the icon (the part after `pt-icon-`) to appear in the dialog's header.
     * Note that the header will only be rendered if `title` is provided.
     */
    iconName?: IconName;
    /**
     * Whether to show the close button in the dialog's header.
     * Note that the header will only be rendered if `title` is provided.
     * @default true
     */
    isCloseButtonShown?: boolean;
    /**
     * CSS styles to apply to the dialog.
     * @default {}
     */
    style?: React.CSSProperties;
    /**
     * Title of the dialog.
     * If provided, a `.pt-dialog-header` element will be rendered inside the dialog
     * before any children elements.
     * In the next major version, this prop will be required.
     */
    title?: string | JSX.Element;
    /**
     * Name of the transition for internal `CSSTransitionGroup`.
     * Providing your own name here will require defining new CSS transition properties.
     */
    transitionName?: string;
}
export declare class Dialog extends AbstractComponent<IDialogProps, {}> {
    static defaultProps: IDialogProps;
    static displayName: string;
    render(): JSX.Element;
    protected validateProps(props: IDialogProps): void;
    private maybeRenderCloseButton();
    private maybeRenderHeader();
    private handleContainerMouseDown;
}
export declare const DialogFactory: React.ComponentFactory<IDialogProps & {
    children?: React.ReactNode;
}, Dialog>;
