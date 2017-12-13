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
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var utils_1 = require("../../common/utils");
var CoreSlider = (function (_super) {
    tslib_1.__extends(CoreSlider, _super);
    function CoreSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.className = Classes.SLIDER;
        _this.refHandlers = {
            track: function (el) { return (_this.trackElement = el); },
        };
        _this.maybeHandleTrackClick = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackClick(event);
            }
        };
        _this.maybeHandleTrackTouch = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackTouch(event);
            }
        };
        _this.canHandleTrackEvent = function (event) {
            var target = event.target;
            // ensure event does not come from inside the handle
            return !_this.props.disabled && target.closest("." + Classes.SLIDER_HANDLE) == null;
        };
        _this.state = {
            labelPrecision: _this.getLabelPrecision(props),
            tickSize: 0,
        };
        return _this;
    }
    CoreSlider.prototype.render = function () {
        var disabled = this.props.disabled;
        var classes = classNames(this.className, (_a = {},
            _a[Classes.DISABLED] = disabled,
            _a[Classes.SLIDER + "-unlabeled"] = this.props.renderLabel === false,
            _a), this.props.className);
        return (React.createElement("div", { className: classes, onMouseDown: this.maybeHandleTrackClick, onTouchStart: this.maybeHandleTrackTouch },
            React.createElement("div", { className: Classes.SLIDER + "-track", ref: this.refHandlers.track }),
            this.maybeRenderFill(),
            this.maybeRenderAxis(),
            this.renderHandles()));
        var _a;
    };
    CoreSlider.prototype.componentDidMount = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.componentDidUpdate = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.componentWillReceiveProps = function (props) {
        _super.prototype.componentWillReceiveProps.call(this, props);
        this.setState({ labelPrecision: this.getLabelPrecision(props) });
    };
    CoreSlider.prototype.formatLabel = function (value) {
        var renderLabel = this.props.renderLabel;
        if (renderLabel === false) {
            return undefined;
        }
        else if (utils_1.isFunction(renderLabel)) {
            return renderLabel(value);
        }
        else {
            return value.toFixed(this.state.labelPrecision);
        }
    };
    CoreSlider.prototype.validateProps = function (props) {
        if (props.stepSize <= 0) {
            throw new Error(Errors.SLIDER_ZERO_STEP);
        }
        if (props.labelStepSize <= 0) {
            throw new Error(Errors.SLIDER_ZERO_LABEL_STEP);
        }
    };
    CoreSlider.prototype.maybeRenderAxis = function () {
        // explicit typedefs are required because tsc (rightly) assumes that props might be overriden with different
        // types in subclasses
        var max = this.props.max;
        var min = this.props.min;
        var labelStepSize = this.props.labelStepSize;
        if (this.props.renderLabel === false) {
            return undefined;
        }
        var stepSize = Math.round(this.state.tickSize * labelStepSize);
        var labels = [];
        // tslint:disable-next-line:one-variable-per-declaration
        for (var i = min, left = 0; i < max || utils_1.approxEqual(i, max); i += labelStepSize, left += stepSize) {
            labels.push(React.createElement("div", { className: Classes.SLIDER + "-label", key: i, style: { left: left } }, this.formatLabel(i)));
        }
        return React.createElement("div", { className: Classes.SLIDER + "-axis" }, labels);
    };
    CoreSlider.prototype.maybeRenderFill = function () {
        if (this.props.showTrackFill && this.trackElement != null) {
            return this.renderFill();
        }
        return undefined;
    };
    CoreSlider.prototype.getLabelPrecision = function (_a) {
        var labelPrecision = _a.labelPrecision, stepSize = _a.stepSize;
        // infer default label precision from stepSize because that's how much the handle moves.
        return labelPrecision == null ? utils_1.countDecimalPlaces(stepSize) : labelPrecision;
    };
    CoreSlider.prototype.updateTickSize = function () {
        if (this.trackElement != null) {
            var tickSize = this.trackElement.clientWidth / (this.props.max - this.props.min);
            this.setState({ tickSize: tickSize });
        }
    };
    return CoreSlider;
}(abstractComponent_1.AbstractComponent));
CoreSlider = tslib_1.__decorate([
    PureRender
], CoreSlider);
exports.CoreSlider = CoreSlider;

//# sourceMappingURL=coreSlider.js.map
