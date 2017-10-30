/// <reference types="react" />
import * as React from "react";
import { IIntentProps, IProps } from "../../common/props";
export interface ITagProps extends IProps, IIntentProps, React.HTMLAttributes<HTMLSpanElement> {
    /**
     * If set to `true`, the tag will display in an active state.
     * This is equivalent to setting `className="pt-active"`.
     * @default false
     */
    active?: boolean;
    /**
     * Click handler for remove button.
     * Button will only be rendered if this prop is defined.
     */
    onRemove?: (e: React.MouseEvent<HTMLButtonElement>, tagProps: ITagProps) => void;
}
export declare class Tag extends React.Component<ITagProps, {}> {
    static displayName: string;
    render(): JSX.Element;
    private onRemoveClick;
}
export declare const TagFactory: React.ComponentFactory<ITagProps & {
    children?: React.ReactNode;
}, Tag>;
