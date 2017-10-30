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
var Errors = require("../../common/errors");
var position_1 = require("../../common/position");
var menu_1 = require("../menu/menu");
var menuItem_1 = require("../menu/menuItem");
var popover_1 = require("../popover/popover");
var CollapseFrom;
(function (CollapseFrom) {
    CollapseFrom[CollapseFrom["START"] = 0] = "START";
    CollapseFrom[CollapseFrom["END"] = 1] = "END";
})(CollapseFrom = exports.CollapseFrom || (exports.CollapseFrom = {}));
var CollapsibleList = (function (_super) {
    tslib_1.__extends(CollapsibleList, _super);
    function CollapsibleList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollapsibleList.prototype.render = function () {
        var _this = this;
        var collapseFrom = this.props.collapseFrom;
        var childrenLength = React.Children.count(this.props.children);
        var _a = this.partitionChildren(), visibleChildren = _a[0], collapsedChildren = _a[1];
        var visibleItems = visibleChildren.map(function (child, index) {
            var absoluteIndex = collapseFrom === CollapseFrom.START ? childrenLength - 1 - index : index;
            return (React.createElement("li", { className: _this.props.visibleItemClassName, key: absoluteIndex }, _this.props.renderVisibleItem(child.props, absoluteIndex)));
        });
        if (collapseFrom === CollapseFrom.START) {
            // reverse START list so separators appear before items
            visibleItems.reverse();
        }
        // construct dropdown menu for collapsed items
        var collapsedPopover;
        if (collapsedChildren.length > 0) {
            var position = collapseFrom === CollapseFrom.END ? position_1.Position.BOTTOM_RIGHT : position_1.Position.BOTTOM_LEFT;
            collapsedPopover = (React.createElement("li", { className: this.props.visibleItemClassName },
                React.createElement(popover_1.Popover, tslib_1.__assign({ content: React.createElement(menu_1.Menu, null, collapsedChildren), position: position }, this.props.dropdownProps), this.props.dropdownTarget)));
        }
        return (React.createElement("ul", { className: classNames(Classes.COLLAPSIBLE_LIST, this.props.className) },
            collapseFrom === CollapseFrom.START ? collapsedPopover : null,
            visibleItems,
            collapseFrom === CollapseFrom.END ? collapsedPopover : null));
    };
    // splits the list of children into two arrays: visible and collapsed
    CollapsibleList.prototype.partitionChildren = function () {
        if (this.props.children == null) {
            return [[], []];
        }
        var childrenArray = React.Children.map(this.props.children, function (child, index) {
            if (child.type !== menuItem_1.MenuItem) {
                throw new Error(Errors.COLLAPSIBLE_LIST_INVALID_CHILD);
            }
            return React.cloneElement(child, { key: "visible-" + index });
        });
        if (this.props.collapseFrom === CollapseFrom.START) {
            // reverse START list so we can always slice visible items from the front of the list
            childrenArray.reverse();
        }
        var visibleItemCount = this.props.visibleItemCount;
        return [childrenArray.slice(0, visibleItemCount), childrenArray.slice(visibleItemCount)];
    };
    return CollapsibleList;
}(React.Component));
CollapsibleList.displayName = "Blueprint.CollapsibleList";
CollapsibleList.defaultProps = {
    collapseFrom: CollapseFrom.START,
    dropdownTarget: null,
    renderVisibleItem: null,
    visibleItemCount: 3,
};
exports.CollapsibleList = CollapsibleList;
exports.CollapsibleListFactory = React.createFactory(CollapsibleList);

//# sourceMappingURL=collapsibleList.js.map
