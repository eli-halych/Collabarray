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
var PureRender = require("pure-render-decorator");
var React = require("react");
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
// see http://stackoverflow.com/a/18473154/3124288 for calculating arc path
var SPINNER_TRACK = "M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89";
// unitless total length of SVG path, to which stroke-dash* properties are relative.
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength
// this value is the result of `<path d={SPINNER_TRACK} />.getTotalLength()` and works in all browsers:
var PATH_LENGTH = 280;
var Spinner = (function (_super) {
    tslib_1.__extends(Spinner, _super);
    function Spinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spinner.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, value = _a.value;
        var classes = classNames(Classes.SPINNER, Classes.intentClass(intent), {
            "pt-no-spin": value != null,
        }, className);
        var style = {
            strokeDasharray: PATH_LENGTH + " " + PATH_LENGTH,
            // default to quarter-circle when indeterminate
            // IE11: CSS transitions on SVG elements are Not Supported :(
            strokeDashoffset: PATH_LENGTH - PATH_LENGTH * (value == null ? 0.25 : utils_1.clamp(value, 0, 1)),
        };
        // HACKHACK to squash error regarding React.SVGProps missing prop pathLength
        var svgPathAttributes = {
            className: "pt-spinner-head",
            d: SPINNER_TRACK,
            pathLength: PATH_LENGTH,
            style: style,
        };
        return this.renderContainer(classes, React.createElement("svg", { viewBox: classes.indexOf(Classes.SMALL) >= 0 ? "-15 -15 130 130" : "0 0 100 100" },
            React.createElement("path", { className: "pt-spinner-track", d: SPINNER_TRACK }),
            React.createElement("path", tslib_1.__assign({}, svgPathAttributes))));
    };
    // abstract away the container elements so SVGSpinner can do its own thing
    Spinner.prototype.renderContainer = function (classes, content) {
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: "pt-spinner-svg-container" }, content)));
    };
    return Spinner;
}(React.Component));
Spinner.displayName = "Blueprint.Spinner";
Spinner = tslib_1.__decorate([
    PureRender
], Spinner);
exports.Spinner = Spinner;
exports.SpinnerFactory = React.createFactory(Spinner);

//# sourceMappingURL=spinner.js.map
