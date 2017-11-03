/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interactionMode_1 = require("../common/interactionMode");
exports.FOCUS_DISABLED_CLASS = "pt-focus-disabled";
/* istanbul ignore next */
var fakeFocusEngine = {
    isActive: function () { return true; },
    start: function () { return true; },
    stop: function () { return true; },
};
/* istanbul ignore next */
var focusEngine = typeof document !== "undefined"
    ? new interactionMode_1.InteractionModeEngine(document.documentElement, exports.FOCUS_DISABLED_CLASS)
    : fakeFocusEngine;
// this is basically meaningless to unit test; it requires manual UI testing
/* istanbul ignore next */
exports.FocusStyleManager = {
    alwaysShowFocus: function () { return focusEngine.stop(); },
    isActive: function () { return focusEngine.isActive(); },
    onlyShowFocusOnTabs: function () { return focusEngine.start(); },
};

//# sourceMappingURL=focusStyleManager.js.map
