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
var PureRender = require("pure-render-decorator");
var React = require("react");
var common_1 = require("../../common");
var Icon = Icon_1 = (function (_super) {
    tslib_1.__extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        if (this.props.iconName == null) {
            return null;
        }
        var _a = this.props, className = _a.className, iconName = _a.iconName, intent = _a.intent, _b = _a.iconSize, iconSize = _b === void 0 ? Icon_1.SIZE_STANDARD : _b, restProps = tslib_1.__rest(_a, ["className", "iconName", "intent", "iconSize"]);
        var classes = classNames(getSizeClass(iconSize), common_1.Classes.iconClass(iconName), common_1.Classes.intentClass(intent), className);
        return React.createElement("span", tslib_1.__assign({ className: classes }, restProps));
    };
    return Icon;
}(React.Component));
Icon.displayName = "Blueprint.Icon";
Icon.SIZE_STANDARD = 16;
Icon.SIZE_LARGE = 20;
Icon.SIZE_INHERIT = "inherit";
Icon = Icon_1 = tslib_1.__decorate([
    PureRender
], Icon);
exports.Icon = Icon;
// NOTE: not using a type alias here so the full union will appear in the interface docs
function getSizeClass(size) {
    switch (size) {
        case Icon.SIZE_STANDARD:
            return common_1.Classes.ICON_STANDARD;
        case Icon.SIZE_LARGE:
            return common_1.Classes.ICON_LARGE;
        default:
            return common_1.Classes.ICON;
    }
}
var Icon_1;

//# sourceMappingURL=icon.js.map
