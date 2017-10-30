/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";
var browser = {
    isEdge: !!userAgent.match(/Edge/),
    isInternetExplorer: !!userAgent.match(/Trident/) || !!userAgent.match(/rv:11/),
    isWebkit: !!userAgent.match(/AppleWebKit/),
};
exports.Browser = {
    isEdge: function () { return browser.isEdge; },
    isInternetExplorer: function () { return browser.isInternetExplorer; },
    isWebkit: function () { return browser.isWebkit; },
};

//# sourceMappingURL=browser.js.map
