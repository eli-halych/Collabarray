/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var hotkeyParser_1 = require("./hotkeyParser");
var KeyIcons = {
    alt: "pt-icon-key-option",
    cmd: "pt-icon-key-command",
    ctrl: "pt-icon-key-control",
    delete: "pt-icon-key-delete",
    down: "pt-icon-arrow-down",
    enter: "pt-icon-key-enter",
    left: "pt-icon-arrow-left",
    meta: "pt-icon-key-command",
    right: "pt-icon-arrow-right",
    shift: "pt-icon-key-shift",
    up: "pt-icon-arrow-up",
};
var KeyCombo = (function (_super) {
    tslib_1.__extends(KeyCombo, _super);
    function KeyCombo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyCombo.prototype.render = function () {
        var keys = hotkeyParser_1.normalizeKeyCombo(this.props.combo);
        var components = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var icon = KeyIcons[key];
            if (icon != null) {
                components.push(React.createElement("kbd", { className: "pt-key pt-modifier-key", key: "key-" + i },
                    React.createElement("span", { className: "pt-icon-standard " + icon }),
                    key));
            }
            else {
                if (key.length === 1) {
                    key = key.toUpperCase();
                }
                components.push(React.createElement("kbd", { className: "pt-key", key: "key-" + i }, key));
            }
        }
        return React.createElement("div", { className: "pt-key-combo" }, components);
    };
    return KeyCombo;
}(React.Component));
exports.KeyCombo = KeyCombo;

//# sourceMappingURL=keyCombo.js.map
