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
var errors_1 = require("../../common/errors");
var hotkey_1 = require("./hotkey");
var hotkey_2 = require("./hotkey");
exports.Hotkey = hotkey_2.Hotkey;
var keyCombo_1 = require("./keyCombo");
exports.KeyCombo = keyCombo_1.KeyCombo;
var hotkeysTarget_1 = require("./hotkeysTarget");
exports.HotkeysTarget = hotkeysTarget_1.HotkeysTarget;
var hotkeyParser_1 = require("./hotkeyParser");
exports.comboMatches = hotkeyParser_1.comboMatches;
exports.getKeyCombo = hotkeyParser_1.getKeyCombo;
exports.getKeyComboString = hotkeyParser_1.getKeyComboString;
exports.parseKeyCombo = hotkeyParser_1.parseKeyCombo;
var hotkeysDialog_1 = require("./hotkeysDialog");
exports.hideHotkeysDialog = hotkeysDialog_1.hideHotkeysDialog;
exports.setHotkeysDialogProps = hotkeysDialog_1.setHotkeysDialogProps;
var Hotkeys = (function (_super) {
    tslib_1.__extends(Hotkeys, _super);
    function Hotkeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hotkeys.prototype.render = function () {
        var hotkeys = React.Children.map(this.props.children, function (child) { return child.props; });
        // sort by group label alphabetically, globals first
        hotkeys.sort(function (a, b) {
            if (a.global) {
                return b.global ? 0 : -1;
            }
            if (b.global) {
                return 1;
            }
            return a.group.localeCompare(b.group);
        });
        var lastGroup = null;
        var elems = [];
        for (var _i = 0, hotkeys_1 = hotkeys; _i < hotkeys_1.length; _i++) {
            var hotkey = hotkeys_1[_i];
            var groupLabel = hotkey.group;
            if (groupLabel !== lastGroup) {
                elems.push(React.createElement("h4", { key: "group-" + elems.length, className: "pt-hotkey-group" }, groupLabel));
                lastGroup = groupLabel;
            }
            elems.push(React.createElement(hotkey_1.Hotkey, tslib_1.__assign({ key: elems.length }, hotkey)));
        }
        return React.createElement("div", { className: "pt-hotkey-column" }, elems);
    };
    Hotkeys.prototype.validateProps = function (props) {
        React.Children.forEach(props.children, function (child) {
            if (!hotkey_1.Hotkey.isInstance(child)) {
                throw new Error(errors_1.HOTKEYS_HOTKEY_CHILDREN);
            }
        });
    };
    return Hotkeys;
}(common_1.AbstractComponent));
Hotkeys.defaultProps = {
    tabIndex: 0,
};
exports.Hotkeys = Hotkeys;

//# sourceMappingURL=hotkeys.js.map
