/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classNames = require("classnames");
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var utils_1 = require("../../common/utils");
var icon_1 = require("../icon/icon");
var overlay_1 = require("../overlay/overlay");
var Dialog = (function (_super) {
    tslib_1.__extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleContainerMouseDown = function (evt) {
            // quick re-implementation of canOutsideClickClose because .pt-dialog-container covers the backdrop
            var isClickOutsideDialog = evt.target.closest("." + Classes.DIALOG) == null;
            if (isClickOutsideDialog && _this.props.canOutsideClickClose) {
                utils_1.safeInvoke(_this.props.onClose, evt);
            }
        };
        return _this;
    }
    Dialog.prototype.render = function () {
        return (React.createElement(overlay_1.Overlay, tslib_1.__assign({}, this.props, { className: Classes.OVERLAY_SCROLL_CONTAINER, hasBackdrop: true }),
            React.createElement("div", { className: Classes.DIALOG_CONTAINER, onMouseDown: this.handleContainerMouseDown },
                React.createElement("div", { className: classNames(Classes.DIALOG, this.props.className), style: this.props.style },
                    this.maybeRenderHeader(),
                    this.props.children))));
    };
    Dialog.prototype.validateProps = function (props) {
        if (props.title == null) {
            if (props.iconName != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_ICON);
            }
            if (props.isCloseButtonShown != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_CLOSE_BUTTON);
            }
        }
    };
    Dialog.prototype.maybeRenderCloseButton = function () {
        // for now, show close button if prop is undefined or null
        // this gives us a behavior as if the default value were `true`
        if (this.props.isCloseButtonShown !== false) {
            var classes = classNames(Classes.DIALOG_CLOSE_BUTTON, Classes.iconClass("small-cross"));
            return React.createElement("button", { "aria-label": "Close", className: classes, onClick: this.props.onClose });
        }
        else {
            return undefined;
        }
    };
    Dialog.prototype.maybeRenderHeader = function () {
        var _a = this.props, iconName = _a.iconName, title = _a.title;
        if (title == null) {
            return undefined;
        }
        return (React.createElement("div", { className: Classes.DIALOG_HEADER },
            React.createElement(icon_1.Icon, { iconName: iconName, iconSize: 20 }),
            React.createElement("h5", null, title),
            this.maybeRenderCloseButton()));
    };
    return Dialog;
}(abstractComponent_1.AbstractComponent));
Dialog.defaultProps = {
    canOutsideClickClose: true,
    isOpen: false,
};
Dialog.displayName = "Blueprint.Dialog";
exports.Dialog = Dialog;
exports.DialogFactory = React.createFactory(Dialog);

//# sourceMappingURL=dialog.js.map
