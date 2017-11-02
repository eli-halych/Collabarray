/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
var buttons_1 = require("../button/buttons");
var icon_1 = require("../icon/icon");
var Toast = (function (_super) {
    tslib_1.__extends(Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleActionClick = function (e) {
            utils_1.safeInvoke(_this.props.action.onClick, e);
            _this.triggerDismiss(false);
        };
        _this.handleCloseClick = function () { return _this.triggerDismiss(false); };
        _this.startTimeout = function () {
            if (_this.props.timeout > 0) {
                _this.setTimeout(function () { return _this.triggerDismiss(true); }, _this.props.timeout);
            }
        };
        return _this;
    }
    Toast.prototype.render = function () {
        var _a = this.props, className = _a.className, iconName = _a.iconName, intent = _a.intent, message = _a.message;
        return (React.createElement("div", { className: classNames(Classes.TOAST, Classes.intentClass(intent), className), onBlur: this.startTimeout, onFocus: this.clearTimeouts, onMouseEnter: this.clearTimeouts, onMouseLeave: this.startTimeout, tabIndex: 0 },
            React.createElement(icon_1.Icon, { iconName: iconName }),
            React.createElement("span", { className: Classes.TOAST_MESSAGE }, message),
            React.createElement("div", { className: classNames(Classes.BUTTON_GROUP, Classes.MINIMAL) },
                this.maybeRenderActionButton(),
                React.createElement(buttons_1.Button, { iconName: "cross", onClick: this.handleCloseClick }))));
    };
    Toast.prototype.componentDidMount = function () {
        this.startTimeout();
    };
    Toast.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.timeout <= 0 && this.props.timeout > 0) {
            this.startTimeout();
        }
        else if (prevProps.timeout > 0 && this.props.timeout <= 0) {
            this.clearTimeouts();
        }
    };
    Toast.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    Toast.prototype.maybeRenderActionButton = function () {
        var action = this.props.action;
        if (action == null) {
            return undefined;
        }
        else {
            return React.createElement(buttons_1.AnchorButton, tslib_1.__assign({}, action, { intent: undefined, onClick: this.handleActionClick }));
        }
    };
    Toast.prototype.triggerDismiss = function (didTimeoutExpire) {
        utils_1.safeInvoke(this.props.onDismiss, didTimeoutExpire);
        this.clearTimeouts();
    };
    return Toast;
}(abstractComponent_1.AbstractComponent));
Toast.defaultProps = {
    className: "",
    message: "",
    timeout: 5000,
};
Toast.displayName = "Blueprint.Toast";
Toast = tslib_1.__decorate([
    PureRender
], Toast);
exports.Toast = Toast;
exports.ToastFactory = React.createFactory(Toast);

//# sourceMappingURL=toast.js.map
