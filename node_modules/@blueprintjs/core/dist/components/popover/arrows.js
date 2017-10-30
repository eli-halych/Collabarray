/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var position_1 = require("../../common/position");
// this value causes popover and target edges to line up on 50px targets
exports.MIN_ARROW_SPACING = 18;
function computeArrowOffset(sideLength, arrowSize, minimum) {
    if (minimum === void 0) { minimum = exports.MIN_ARROW_SPACING; }
    return Math.max(Math.round((sideLength - arrowSize) / 2), minimum);
}
exports.computeArrowOffset = computeArrowOffset;
function getPopoverTransformOrigin(position, arrowSize, targetDimensions) {
    var offsetX = computeArrowOffset(targetDimensions.width, arrowSize);
    var offsetY = computeArrowOffset(targetDimensions.height, arrowSize);
    switch (position) {
        case position_1.Position.TOP_LEFT:
            return offsetX + "px bottom";
        case position_1.Position.TOP_RIGHT:
            return "calc(100% - " + offsetX + "px) bottom";
        case position_1.Position.BOTTOM_LEFT:
            return offsetX + "px top";
        case position_1.Position.BOTTOM_RIGHT:
            return "calc(100% - " + offsetX + "px) top";
        case position_1.Position.LEFT_TOP:
            return "right " + offsetY + "px";
        case position_1.Position.LEFT_BOTTOM:
            return "right calc(100% - " + offsetY + "px)";
        case position_1.Position.RIGHT_TOP:
            return "left " + offsetY + "px";
        case position_1.Position.RIGHT_BOTTOM:
            return "left calc(100% - " + offsetY + "px)";
        default:
            return undefined;
    }
}
exports.getPopoverTransformOrigin = getPopoverTransformOrigin;
function getArrowPositionStyles(position, arrowSize, ignoreTargetDimensions, targetDimensions, inline) {
    // compute the offset to center an arrow with given hypotenuse in a side of the given length
    var popoverOffset = function (sideLength) {
        var offset = computeArrowOffset(sideLength, arrowSize, 0);
        return offset < exports.MIN_ARROW_SPACING ? exports.MIN_ARROW_SPACING - offset : 0;
    };
    var popoverOffsetX = popoverOffset(targetDimensions.width);
    var popoverOffsetY = popoverOffset(targetDimensions.height);
    // TOP, RIGHT, BOTTOM, LEFT are handled purely in CSS because of centering transforms
    switch (position) {
        case position_1.Position.TOP_LEFT:
        case position_1.Position.BOTTOM_LEFT:
            return {
                arrow: ignoreTargetDimensions ? {} : { left: computeArrowOffset(targetDimensions.width, arrowSize) },
                container: { marginLeft: -popoverOffsetX },
            };
        case position_1.Position.TOP_RIGHT:
        case position_1.Position.BOTTOM_RIGHT:
            return {
                arrow: ignoreTargetDimensions ? {} : { right: computeArrowOffset(targetDimensions.width, arrowSize) },
                container: { marginLeft: popoverOffsetX },
            };
        case position_1.Position.RIGHT_TOP:
        case position_1.Position.LEFT_TOP:
            return {
                arrow: ignoreTargetDimensions ? {} : { top: computeArrowOffset(targetDimensions.height, arrowSize) },
                container: inline ? { top: -popoverOffsetY } : { marginTop: -popoverOffsetY },
            };
        case position_1.Position.RIGHT_BOTTOM:
        case position_1.Position.LEFT_BOTTOM:
            return {
                arrow: ignoreTargetDimensions ? {} : { bottom: computeArrowOffset(targetDimensions.height, arrowSize) },
                container: inline ? { bottom: -popoverOffsetY } : { marginTop: popoverOffsetY },
            };
        default:
            return {};
    }
}
exports.getArrowPositionStyles = getArrowPositionStyles;

//# sourceMappingURL=arrows.js.map
