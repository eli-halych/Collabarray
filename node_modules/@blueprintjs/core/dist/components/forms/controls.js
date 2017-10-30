/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// HACKHACK: these components should go in separate files
// tslint:disable max-classes-per-file
// we need some empty interfaces to show up in docs
// tslint:disable no-empty-interface
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var INVALID_PROPS = [
    // we spread props to `<input>` but render `children` as its sibling
    "children",
    "defaultIndeterminate",
    "indeterminate",
    "labelElement",
];
/** Base Component class for all Controls */
var Control = (function (_super) {
    tslib_1.__extends(Control, _super);
    function Control() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // generates control markup for given input type.
    // optional inputRef in case the component needs reference for itself (don't forget to invoke the prop!).
    Control.prototype.renderControl = function (type, typeClassName, inputRef) {
        if (inputRef === void 0) { inputRef = this.props.inputRef; }
        var className = classNames(Classes.CONTROL, typeClassName, (_a = {},
            _a[Classes.DISABLED] = this.props.disabled,
            _a[Classes.INLINE] = this.props.inline,
            _a), this.props.className);
        var inputProps = props_1.removeNonHTMLProps(this.props, INVALID_PROPS, true);
        return (React.createElement("label", { className: className, style: this.props.style },
            React.createElement("input", tslib_1.__assign({}, inputProps, { ref: inputRef, type: type })),
            React.createElement("span", { className: Classes.CONTROL_INDICATOR }),
            this.props.label,
            this.props.labelElement,
            this.props.children));
        var _a;
    };
    return Control;
}(React.Component));
exports.Control = Control;
var Checkbox = (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleInputRef = function (ref) {
            _this.input = ref;
            utils_1.safeInvoke(_this.props.inputRef, ref);
        };
        return _this;
    }
    Checkbox.prototype.render = function () {
        return this.renderControl("checkbox", "pt-checkbox", this.handleInputRef);
    };
    Checkbox.prototype.componentDidMount = function () {
        if (this.props.defaultIndeterminate != null) {
            this.input.indeterminate = this.props.defaultIndeterminate;
        }
        this.updateIndeterminate();
    };
    Checkbox.prototype.componentDidUpdate = function () {
        this.updateIndeterminate();
    };
    Checkbox.prototype.updateIndeterminate = function () {
        if (this.props.indeterminate != null) {
            this.input.indeterminate = this.props.indeterminate;
        }
    };
    return Checkbox;
}(Control));
Checkbox.displayName = "Blueprint.Checkbox";
exports.Checkbox = Checkbox;
var Switch = (function (_super) {
    tslib_1.__extends(Switch, _super);
    function Switch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Switch.prototype.render = function () {
        return this.renderControl("checkbox", "pt-switch");
    };
    return Switch;
}(Control));
Switch.displayName = "Blueprint.Switch";
exports.Switch = Switch;
var Radio = (function (_super) {
    tslib_1.__extends(Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.render = function () {
        return this.renderControl("radio", "pt-radio");
    };
    return Radio;
}(Control));
Radio.displayName = "Blueprint.Radio";
exports.Radio = Radio;
exports.CheckboxFactory = React.createFactory(Checkbox);
exports.SwitchFactory = React.createFactory(Switch);
exports.RadioFactory = React.createFactory(Radio);

//# sourceMappingURL=controls.js.map
