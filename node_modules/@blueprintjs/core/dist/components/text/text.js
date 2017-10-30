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
var Classes = require("../../common/classes");
var Text = (function (_super) {
    tslib_1.__extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isContentOverflowing: false,
            textContent: "",
        };
        _this.refHandlers = {
            text: function (overflowElement) { return (_this.textRef = overflowElement); },
        };
        return _this;
    }
    Text.prototype.componentDidMount = function () {
        this.update();
    };
    Text.prototype.componentDidUpdate = function () {
        this.update();
    };
    Text.prototype.render = function () {
        var classes = classNames((_a = {},
            _a[Classes.TEXT_OVERFLOW_ELLIPSIS] = this.props.ellipsize,
            _a), this.props.className);
        return (React.createElement("div", { className: classes, ref: this.refHandlers.text, title: this.state.isContentOverflowing ? this.state.textContent : undefined }, this.props.children));
        var _a;
    };
    Text.prototype.update = function () {
        var newState = {
            isContentOverflowing: this.props.ellipsize && this.textRef.scrollWidth > this.textRef.clientWidth,
            textContent: this.textRef.textContent,
        };
        this.setState(newState);
    };
    return Text;
}(React.Component));
Text = tslib_1.__decorate([
    PureRender
], Text);
exports.Text = Text;

//# sourceMappingURL=text.js.map
