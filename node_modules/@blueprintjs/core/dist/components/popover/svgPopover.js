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
var popover_1 = require("./popover");
var SVGPopover = (function (_super) {
    tslib_1.__extends(SVGPopover, _super);
    function SVGPopover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGPopover.prototype.render = function () {
        return (React.createElement(popover_1.Popover, tslib_1.__assign({ rootElementTag: "g" }, this.props), this.props.children));
    };
    return SVGPopover;
}(React.Component));
exports.SVGPopover = SVGPopover;
exports.SVGPopoverFactory = React.createFactory(SVGPopover);

//# sourceMappingURL=svgPopover.js.map
