/// <reference types="react" />
import * as React from "react";
import { IProps } from "../../common/props";
import { IconName } from "../icon/icon";
export interface INonIdealStateProps extends IProps {
    /**
     * An action that's attached to the non-ideal state.
     */
    action?: JSX.Element;
    /**
     * A longer description of the non-ideal state.
     */
    description?: string | JSX.Element;
    /**
     * The title of the non-ideal state.
     */
    title?: string;
    /**
     * The name of a Blueprint icon to display or a JSX Element (such as `<Spinner/>`).
     */
    visual?: IconName | JSX.Element;
}
export declare class NonIdealState extends React.Component<INonIdealStateProps, {}> {
    render(): JSX.Element;
    private maybeRenderAction();
    private maybeRenderDescription();
    private maybeRenderTitle();
    private maybeRenderVisual();
}
export declare const NonIdealStateFactory: React.ComponentFactory<INonIdealStateProps & {
    children?: React.ReactNode;
}, NonIdealState>;
