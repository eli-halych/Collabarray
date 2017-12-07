/// <reference types="react" />
import * as React from "react";
export interface IContextMenuTarget extends React.Component<any, any> {
    renderContextMenu(e: React.MouseEvent<HTMLElement>): JSX.Element;
    onContextMenuClose?(): void;
}
export declare function ContextMenuTarget<T extends {
    prototype: IContextMenuTarget;
}>(constructor: T): void;
