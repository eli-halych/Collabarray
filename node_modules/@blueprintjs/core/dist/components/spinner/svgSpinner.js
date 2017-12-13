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
var React = require("react");
var Classes = require("../../common/classes");
// import * to avoid "cannot be named" error on factory
var spinner = require("./spinner");
var SVGSpinner = (function (_super) {
    tslib_1.__extends(SVGSpinner, _super);
    function SVGSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGSpinner.prototype.renderContainer = function (classes, content) {
        return (React.createElement("g", { className: classNames(Classes.SVG_SPINNER, classes) },
            React.createElement("g", { className: "pt-svg-spinner-transform-group" }, content)));
    };
    return SVGSpinner;
}(spinner.Spinner));
exports.SVGSpinner = SVGSpinner;
exports.SVGSpinnerFactory = React.createFactory(SVGSpinner);

//# sourceMappingURL=svgSpinner.js.map
