/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position;
(function (Position) {
    Position[Position["TOP_LEFT"] = 0] = "TOP_LEFT";
    Position[Position["TOP"] = 1] = "TOP";
    Position[Position["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    Position[Position["RIGHT_TOP"] = 3] = "RIGHT_TOP";
    Position[Position["RIGHT"] = 4] = "RIGHT";
    Position[Position["RIGHT_BOTTOM"] = 5] = "RIGHT_BOTTOM";
    Position[Position["BOTTOM_RIGHT"] = 6] = "BOTTOM_RIGHT";
    Position[Position["BOTTOM"] = 7] = "BOTTOM";
    Position[Position["BOTTOM_LEFT"] = 8] = "BOTTOM_LEFT";
    Position[Position["LEFT_BOTTOM"] = 9] = "LEFT_BOTTOM";
    Position[Position["LEFT"] = 10] = "LEFT";
    Position[Position["LEFT_TOP"] = 11] = "LEFT_TOP";
})(Position = exports.Position || (exports.Position = {}));
function isPositionHorizontal(position) {
    /* istanbul ignore next */
    return (position === Position.TOP ||
        position === Position.TOP_LEFT ||
        position === Position.TOP_RIGHT ||
        position === Position.BOTTOM ||
        position === Position.BOTTOM_LEFT ||
        position === Position.BOTTOM_RIGHT);
}
exports.isPositionHorizontal = isPositionHorizontal;
function isPositionVertical(position) {
    /* istanbul ignore next */
    return (position === Position.LEFT ||
        position === Position.LEFT_TOP ||
        position === Position.LEFT_BOTTOM ||
        position === Position.RIGHT ||
        position === Position.RIGHT_TOP ||
        position === Position.RIGHT_BOTTOM);
}
exports.isPositionVertical = isPositionVertical;

//# sourceMappingURL=position.js.map
