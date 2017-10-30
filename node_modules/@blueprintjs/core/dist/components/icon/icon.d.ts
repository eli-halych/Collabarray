/// <reference types="react" />
import * as React from "react";
import { IIntentProps, IProps } from "../../common";
import { IconName } from "../../generated/iconName";
export { IconName };
export interface IIconProps extends IIntentProps, IProps {
    /**
     * Name of the icon (with or without `"pt-icon-"` prefix).
     * If `undefined`, this component will render nothing.
     */
    iconName: IconName | undefined;
    /**
     * Size of the icon.
     * Blueprint provides each icon in two sizes: 16px and 20px. The keyword `"inherit"` will
     * render a 20px icon but inherit `font-size` from its parent.
     * Constants are exposed for each of these values on the component itself:
     * `Icon.SIZE_(STANDARD|LARGE|INHERIT)`,
     * @default 16
     */
    iconSize?: 16 | 20 | "inherit";
}
export declare class Icon extends React.Component<IIconProps & React.HTMLAttributes<HTMLSpanElement>, never> {
    static displayName: string;
    static readonly SIZE_STANDARD: 16;
    static readonly SIZE_LARGE: 20;
    static readonly SIZE_INHERIT: "inherit";
    render(): JSX.Element;
}
