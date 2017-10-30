/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var tooltip_1 = require("./tooltip");
var SVGTooltip = (function (_super) {
    tslib_1.__extends(SVGTooltip, _super);
    function SVGTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGTooltip.prototype.render = function () {
        return (React.createElement(tooltip_1.Tooltip, tslib_1.__assign({ rootElementTag: "g" }, this.props), this.props.children));
    };
    return SVGTooltip;
}(React.Component));
exports.SVGTooltip = SVGTooltip;
exports.SVGTooltipFactory = React.createFactory(SVGTooltip);

//# sourceMappingURL=svgTooltip.js.map
