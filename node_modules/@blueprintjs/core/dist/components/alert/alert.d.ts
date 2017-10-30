/// <reference types="react" />
import * as React from "react";
import { AbstractComponent, Intent, IProps } from "../../common";
import { IconName } from "../icon/icon";
export interface IAlertProps extends IProps {
    /**
     * The text for the cancel button.
     */
    cancelButtonText?: string;
    /**
     * The text for the confirm (right-most) button.
     * @default "OK"
     */
    confirmButtonText?: string;
    /** Name of the icon (the part after `pt-icon-`) to add next to the alert message */
    iconName?: IconName;
    /**
     * The intent to be applied to the confirm (right-most) button.
     */
    intent?: Intent;
    /**
     * Toggles the visibility of the alert.
     * This prop is required because the component is controlled.
     */
    isOpen: boolean;
    /**
     * CSS styles to apply to the alert.
     */
    style?: React.CSSProperties;
    /**
     * Handler invoked when the cancel button is clicked.
     */
    onCancel?(e: React.MouseEvent<HTMLButtonElement>): void;
    /**
     * Handler invoked when the confirm button is clicked.
     */
    onConfirm(e: React.MouseEvent<HTMLButtonElement>): void;
}
export declare class Alert extends AbstractComponent<IAlertProps, {}> {
    static defaultProps: IAlertProps;
    static displayName: string;
    render(): JSX.Element;
    protected validateProps(props: IAlertProps): void;
    private maybeRenderSecondaryAction();
}
