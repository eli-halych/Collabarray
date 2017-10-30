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
var utils_1 = require("../../common/utils");
var ProgressBar = (function (_super) {
    tslib_1.__extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, value = _a.value;
        var classes = classNames("pt-progress-bar", Classes.intentClass(intent), className);
        // don't set width if value is null (rely on default CSS value)
        var width = value == null ? null : 100 * utils_1.clamp(value, 0, 1) + "%";
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: "pt-progress-meter", style: { width: width } })));
    };
    return ProgressBar;
}(React.Component));
ProgressBar.displayName = "Blueprint.ProgressBar";
ProgressBar = tslib_1.__decorate([
    PureRender
], ProgressBar);
exports.ProgressBar = ProgressBar;
exports.ProgressBarFactory = React.createFactory(ProgressBar);

//# sourceMappingURL=progressBar.js.map
