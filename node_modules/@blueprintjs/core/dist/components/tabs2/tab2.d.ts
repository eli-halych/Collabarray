/// <reference types="react" />
import * as React from "react";
import { IProps } from "../../common/props";
export declare type TabId = string | number;
export interface ITab2Props extends IProps {
    /**
     * Whether the tab is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Unique identifier used to control which tab is selected
     * and to generate ARIA attributes for accessibility.
     */
    id: TabId;
    /**
     * Panel content, rendered by the parent `Tabs` when this tab is active.
     * If omitted, no panel will be rendered for this tab.
     */
    panel?: JSX.Element;
    /**
     * Content of tab title element, rendered in a list above the active panel.
     * Can also be set via React `children`.
     */
    title?: string | JSX.Element;
}
export declare class Tab2 extends React.Component<ITab2Props, {}> {
    static defaultProps: ITab2Props;
    static displayName: string;
    render(): JSX.Element;
}
export declare const Tab2Factory: React.ComponentFactory<ITab2Props & {
    children?: React.ReactNode;
}, Tab2>;
