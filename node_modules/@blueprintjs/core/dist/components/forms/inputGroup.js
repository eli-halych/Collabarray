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
var Classes = require("../../common/classes");
var props_1 = require("../../common/props");
var icon_1 = require("../icon/icon");
var InputGroup = (function (_super) {
    tslib_1.__extends(InputGroup, _super);
    function InputGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            rightElementWidth: 30,
        };
        _this.refHandlers = {
            rightElement: function (ref) { return (_this.rightElement = ref); },
        };
        return _this;
    }
    InputGroup.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, leftIconName = _a.leftIconName;
        var classes = classNames(Classes.INPUT_GROUP, Classes.intentClass(intent), (_b = {},
            _b[Classes.DISABLED] = this.props.disabled,
            _b), className);
        var style = { paddingRight: this.state.rightElementWidth };
        return (React.createElement("div", { className: classes },
            React.createElement(icon_1.Icon, { iconName: leftIconName, iconSize: "inherit" }),
            React.createElement("input", tslib_1.__assign({ type: "text" }, props_1.removeNonHTMLProps(this.props), { className: Classes.INPUT, ref: this.props.inputRef, style: style })),
            this.maybeRenderRightElement()));
        var _b;
    };
    InputGroup.prototype.componentDidMount = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.componentDidUpdate = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.maybeRenderRightElement = function () {
        var rightElement = this.props.rightElement;
        if (rightElement == null) {
            return undefined;
        }
        return (React.createElement("span", { className: "pt-input-action", ref: this.refHandlers.rightElement }, rightElement));
    };
    InputGroup.prototype.updateInputWidth = function () {
        if (this.rightElement != null) {
            var clientWidth = this.rightElement.clientWidth;
            // small threshold to prevent infinite loops
            if (Math.abs(clientWidth - this.state.rightElementWidth) > 2) {
                this.setState({ rightElementWidth: clientWidth });
            }
        }
        else {
            this.setState({ rightElementWidth: 0 });
        }
    };
    return InputGroup;
}(React.Component));
InputGroup.displayName = "Blueprint.InputGroup";
InputGroup = tslib_1.__decorate([
    PureRender
], InputGroup);
exports.InputGroup = InputGroup;
exports.InputGroupFactory = React.createFactory(InputGroup);

//# sourceMappingURL=inputGroup.js.map
