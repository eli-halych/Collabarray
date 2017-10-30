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
var icon_1 = require("../icon/icon");
var NonIdealState = (function (_super) {
    tslib_1.__extends(NonIdealState, _super);
    function NonIdealState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NonIdealState.prototype.render = function () {
        return (React.createElement("div", { className: classNames(Classes.NON_IDEAL_STATE, this.props.className) },
            this.maybeRenderVisual(),
            this.maybeRenderTitle(),
            this.maybeRenderDescription(),
            this.maybeRenderAction()));
    };
    NonIdealState.prototype.maybeRenderAction = function () {
        if (this.props.action == null) {
            return undefined;
        }
        return React.createElement("div", { className: Classes.NON_IDEAL_STATE_ACTION }, this.props.action);
    };
    NonIdealState.prototype.maybeRenderDescription = function () {
        if (this.props.description == null) {
            return undefined;
        }
        return React.createElement("div", { className: Classes.NON_IDEAL_STATE_DESCRIPTION }, this.props.description);
    };
    NonIdealState.prototype.maybeRenderTitle = function () {
        if (this.props.title == null) {
            return undefined;
        }
        return React.createElement("h4", { className: Classes.NON_IDEAL_STATE_TITLE }, this.props.title);
    };
    NonIdealState.prototype.maybeRenderVisual = function () {
        var visual = this.props.visual;
        if (visual == null) {
            return undefined;
        }
        else if (typeof visual === "string") {
            return (React.createElement("div", { className: classNames(Classes.NON_IDEAL_STATE_VISUAL, Classes.NON_IDEAL_STATE_ICON) },
                React.createElement(icon_1.Icon, { iconName: visual, iconSize: "inherit" })));
        }
        else {
            return React.createElement("div", { className: Classes.NON_IDEAL_STATE_VISUAL }, visual);
        }
    };
    return NonIdealState;
}(React.Component));
NonIdealState = tslib_1.__decorate([
    PureRender
], NonIdealState);
exports.NonIdealState = NonIdealState;
exports.NonIdealStateFactory = React.createFactory(NonIdealState);

//# sourceMappingURL=nonIdealState.js.map
