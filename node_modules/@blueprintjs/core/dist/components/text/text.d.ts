/// <reference types="react" />
import * as React from "react";
import { IProps } from "../../common/props";
export interface ITextProps extends IProps {
    /**
     * Indicates that this component should be truncated with an ellipsis if it overflows its container.
     * The `title` attribute will also be added when content overflows to show the full text of the children on hover.
     * @default false
     */
    ellipsize?: boolean;
}
export interface ITextState {
    textContent: string;
    isContentOverflowing: boolean;
}
export declare class Text extends React.Component<ITextProps, ITextState> {
    state: ITextState;
    private textRef;
    private refHandlers;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    private update();
}
