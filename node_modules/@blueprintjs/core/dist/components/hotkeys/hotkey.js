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
var common_1 = require("../../common");
var keyCombo_1 = require("./keyCombo");
var Hotkey = (function (_super) {
    tslib_1.__extends(Hotkey, _super);
    function Hotkey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hotkey.isInstance = function (element) {
        return element != null && element.type === Hotkey;
    };
    Hotkey.prototype.render = function () {
        var _a = this.props, label = _a.label, spreadableProps = tslib_1.__rest(_a, ["label"]);
        return (React.createElement("div", { className: "pt-hotkey" },
            React.createElement("div", { className: "pt-hotkey-label" }, label),
            React.createElement(keyCombo_1.KeyCombo, tslib_1.__assign({}, spreadableProps))));
    };
    Hotkey.prototype.validateProps = function (props) {
        if (props.global !== true && props.group == null) {
            throw new Error("non-global <Hotkey>s must define a group");
        }
    };
    return Hotkey;
}(common_1.AbstractComponent));
Hotkey.defaultProps = {
    allowInInput: false,
    disabled: false,
    global: false,
    preventDefault: false,
    stopPropagation: false,
};
exports.Hotkey = Hotkey;

//# sourceMappingURL=hotkey.js.map
