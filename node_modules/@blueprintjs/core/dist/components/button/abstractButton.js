/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var Keys = require("../../common/keys");
var utils_1 = require("../../common/utils");
var icon_1 = require("../icon/icon");
var spinner_1 = require("../spinner/spinner");
var AbstractButton = (function (_super) {
    tslib_1.__extends(AbstractButton, _super);
    function AbstractButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        _this.refHandlers = {
            button: function (ref) {
                _this.buttonRef = ref;
                utils_1.safeInvoke(_this.props.elementRef, ref);
            },
        };
        _this.currentKeyDown = null;
        // we're casting as `any` to get around a somewhat opaque safeInvoke error
        // that "Type argument candidate 'KeyboardEvent<T>' is not a valid type
        // argument because it is not a supertype of candidate
        // 'KeyboardEvent<HTMLElement>'."
        _this.handleKeyDown = function (e) {
            if (isKeyboardClick(e.which)) {
                e.preventDefault();
                if (e.which !== _this.currentKeyDown) {
                    _this.setState({ isActive: true });
                }
            }
            _this.currentKeyDown = e.which;
            utils_1.safeInvoke(_this.props.onKeyDown, e);
        };
        _this.handleKeyUp = function (e) {
            if (isKeyboardClick(e.which)) {
                _this.setState({ isActive: false });
                _this.buttonRef.click();
            }
            _this.currentKeyDown = null;
            utils_1.safeInvoke(_this.props.onKeyUp, e);
        };
        return _this;
    }
    AbstractButton.prototype.getCommonButtonProps = function () {
        var disabled = this.props.disabled || this.props.loading;
        var className = classNames(Classes.BUTTON, (_a = {},
            _a[Classes.ACTIVE] = this.state.isActive || this.props.active,
            _a[Classes.DISABLED] = disabled,
            _a[Classes.LOADING] = this.props.loading,
            _a), Classes.iconClass(this.props.iconName), Classes.intentClass(this.props.intent), this.props.className);
        return {
            className: className,
            disabled: disabled,
            onClick: disabled ? undefined : this.props.onClick,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            ref: this.refHandlers.button,
        };
        var _a;
    };
    AbstractButton.prototype.renderChildren = function () {
        var _a = this.props, loading = _a.loading, rightIconName = _a.rightIconName, text = _a.text;
        var children = React.Children.map(this.props.children, function (child, index) {
            // must wrap string children in spans so loading prop can hide them
            if (typeof child === "string") {
                return React.createElement("span", { key: "text-" + index }, child);
            }
            return child;
        });
        return [
            loading ? React.createElement(spinner_1.Spinner, { className: "pt-small pt-button-spinner", key: "spinner" }) : undefined,
            text != null ? React.createElement("span", { key: "text" }, text) : undefined
        ].concat(children, [
            React.createElement(icon_1.Icon, { className: Classes.ALIGN_RIGHT, iconName: rightIconName, key: "icon" }),
        ]);
    };
    return AbstractButton;
}(React.Component));
exports.AbstractButton = AbstractButton;
function isKeyboardClick(keyCode) {
    return keyCode === Keys.ENTER || keyCode === Keys.SPACE;
}

//# sourceMappingURL=abstractButton.js.map
