/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../common/utils");
var hotkeysEvents_1 = require("./hotkeysEvents");
function HotkeysTarget(constructor) {
    var _a = constructor.prototype, componentWillMount = _a.componentWillMount, componentDidMount = _a.componentDidMount, componentWillUnmount = _a.componentWillUnmount, render = _a.render, renderHotkeys = _a.renderHotkeys;
    if (!utils_1.isFunction(renderHotkeys)) {
        throw new Error("@HotkeysTarget-decorated class must implement `renderHotkeys`. " + constructor);
    }
    // tslint:disable no-invalid-this only-arrow-functions
    constructor.prototype.componentWillMount = function () {
        this.localHotkeysEvents = new hotkeysEvents_1.HotkeysEvents(hotkeysEvents_1.HotkeyScope.LOCAL);
        this.globalHotkeysEvents = new hotkeysEvents_1.HotkeysEvents(hotkeysEvents_1.HotkeyScope.GLOBAL);
        if (componentWillMount != null) {
            componentWillMount.call(this);
        }
    };
    constructor.prototype.componentDidMount = function () {
        // attach global key event listeners
        document.addEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
        document.addEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
        if (componentDidMount != null) {
            componentDidMount.call(this);
        }
    };
    constructor.prototype.componentWillUnmount = function () {
        // detach global key event listeners
        document.removeEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
        document.removeEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
        this.globalHotkeysEvents.clear();
        this.localHotkeysEvents.clear();
        if (componentWillUnmount != null) {
            componentWillUnmount.call(this);
        }
    };
    constructor.prototype.render = function () {
        var _this = this;
        var element = render.call(this);
        var hotkeys = renderHotkeys.call(this);
        this.localHotkeysEvents.setHotkeys(hotkeys.props);
        this.globalHotkeysEvents.setHotkeys(hotkeys.props);
        // attach local key event listeners
        if (element != null && this.localHotkeysEvents.count() > 0) {
            var tabIndex = hotkeys.props.tabIndex === undefined ? 0 : hotkeys.props.tabIndex;
            var existingKeyDown_1 = element.props.onKeyDown;
            var onKeyDown = function (e) {
                _this.localHotkeysEvents.handleKeyDown(e.nativeEvent);
                utils_1.safeInvoke(existingKeyDown_1, e);
            };
            var existingKeyUp_1 = element.props.onKeyUp;
            var onKeyUp = function (e) {
                _this.localHotkeysEvents.handleKeyUp(e.nativeEvent);
                utils_1.safeInvoke(existingKeyUp_1, e);
            };
            return React.cloneElement(element, { tabIndex: tabIndex, onKeyDown: onKeyDown, onKeyUp: onKeyUp });
        }
        else {
            return element;
        }
    };
    // tslint:enable
}
exports.HotkeysTarget = HotkeysTarget;

//# sourceMappingURL=hotkeysTarget.js.map
