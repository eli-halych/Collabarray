/// <reference types="react" />
import * as React from "react";
import { IIntentProps, IProps } from "../../common/props";
export interface IFormGroupProps extends IIntentProps, IProps {
    /**
     * Whether form group should appear as non-interactive.
     * Remember that `input` elements must be disabled separately.
     */
    disabled?: boolean;
    /** Optional helper text. The given content will be wrapped in `.pt-form-helper-text` and displayed beneath `children`. */
    helperText?: React.ReactNode;
    /** Whether to render the label and children on a single line. */
    inline?: boolean;
    /** Label of this form group. */
    label?: React.ReactNode;
    /**
     * `id` attribute of the labelable form element that this `FormGroup` controls,
     * used as `<label for>` attribute.
     */
    labelFor?: string;
    /**
     * Whether this form input should appear as required (does not affect HTML form required status).
     * Providing a boolean `true` value will render a default "required" message after the `label` prop.
     * Providing a JSX value will render that content instead.
     *
     * _Note:_ the default message element is exposed as `FormGroup.DEFAULT_REQUIRED_CONTENT` and
     * can be changed to provide a new global default for your app.
     * @default false
     */
    requiredLabel?: boolean | React.ReactNode;
}
export declare class FormGroup extends React.Component<IFormGroupProps, {}> {
    /**
     * Element used to render `required` message when a boolean value is provided for that prop.
     * Modifying the value of this property will change the default globally in your app.
     *
     * Defaults to `<span class="pt-text-muted">(required)</span>`.
     */
    static DEFAULT_REQUIRED_CONTENT: JSX.Element;
    render(): JSX.Element;
    private getClassName();
    private maybeRenderRequiredLabel();
    private maybeRenderHelperText();
}
