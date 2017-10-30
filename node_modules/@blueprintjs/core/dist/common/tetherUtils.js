/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var position_1 = require("./position");
// per https://github.com/HubSpot/tether/pull/204, Tether now exposes a `bodyElement` option that,
// when present, gets the tethered element injected into *it* instead of into the document body.
// but both approaches still cause React to freak out, because it loses its handle on the DOM
// element. thus, we pass a fake HTML bodyElement to Tether, with a no-op `appendChild` function
// (the only function the library uses from bodyElement).
var fakeHtmlElement = {
    appendChild: function () {
        /* No-op */
    },
};
/** @internal */
function createTetherOptions(element, target, position, tetherOptions) {
    if (tetherOptions === void 0) { tetherOptions = {}; }
    return tslib_1.__assign({}, tetherOptions, { attachment: getPopoverAttachment(position), bodyElement: fakeHtmlElement, classPrefix: "pt-tether", element: element,
        target: target, targetAttachment: getTargetAttachment(position) });
}
exports.createTetherOptions = createTetherOptions;
/** @internal */
function getTargetAttachment(position) {
    var attachments = (_a = {},
        _a[position_1.Position.TOP_LEFT] = "top left",
        _a[position_1.Position.TOP] = "top center",
        _a[position_1.Position.TOP_RIGHT] = "top right",
        _a[position_1.Position.RIGHT_TOP] = "top right",
        _a[position_1.Position.RIGHT] = "middle right",
        _a[position_1.Position.RIGHT_BOTTOM] = "bottom right",
        _a[position_1.Position.BOTTOM_RIGHT] = "bottom right",
        _a[position_1.Position.BOTTOM] = "bottom center",
        _a[position_1.Position.BOTTOM_LEFT] = "bottom left",
        _a[position_1.Position.LEFT_BOTTOM] = "bottom left",
        _a[position_1.Position.LEFT] = "middle left",
        _a[position_1.Position.LEFT_TOP] = "top left",
        _a);
    return attachments[position];
    var _a;
}
exports.getTargetAttachment = getTargetAttachment;
/** @internal */
function getPopoverAttachment(position) {
    var attachments = (_a = {},
        _a[position_1.Position.TOP_LEFT] = "bottom left",
        _a[position_1.Position.TOP] = "bottom center",
        _a[position_1.Position.TOP_RIGHT] = "bottom right",
        _a[position_1.Position.RIGHT_TOP] = "top left",
        _a[position_1.Position.RIGHT] = "middle left",
        _a[position_1.Position.RIGHT_BOTTOM] = "bottom left",
        _a[position_1.Position.BOTTOM_RIGHT] = "top right",
        _a[position_1.Position.BOTTOM] = "top center",
        _a[position_1.Position.BOTTOM_LEFT] = "top left",
        _a[position_1.Position.LEFT_BOTTOM] = "bottom right",
        _a[position_1.Position.LEFT] = "middle right",
        _a[position_1.Position.LEFT_TOP] = "top right",
        _a);
    return attachments[position];
    var _a;
}
exports.getPopoverAttachment = getPopoverAttachment;
/** @internal */
function getAttachmentClasses(position) {
    // this essentially reimplements the Tether logic for attachment classes so the same styles
    // can be reused outside of Tether-based popovers.
    return expandAttachmentClasses(getPopoverAttachment(position), "pt-tether-element-attached").concat(expandAttachmentClasses(getTargetAttachment(position), "pt-tether-target-attached"));
}
exports.getAttachmentClasses = getAttachmentClasses;
function expandAttachmentClasses(attachments, prefix) {
    var _a = attachments.split(" "), verticalAlign = _a[0], horizontalAlign = _a[1];
    return [prefix + "-" + verticalAlign, prefix + "-" + horizontalAlign];
}

//# sourceMappingURL=tetherUtils.js.map
