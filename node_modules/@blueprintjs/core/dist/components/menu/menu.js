/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var Menu = (function (_super) {
    tslib_1.__extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        return (React.createElement("ul", { className: classNames(Classes.MENU, this.props.className), ref: this.props.ulRef }, this.props.children));
    };
    return Menu;
}(React.Component));
Menu.displayName = "Blueprint.Menu";
exports.Menu = Menu;
exports.MenuFactory = React.createFactory(Menu);

//# sourceMappingURL=menu.js.map
