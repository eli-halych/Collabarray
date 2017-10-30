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
var PureRender = require("pure-render-decorator");
var React = require("react");
var Classes = require("../../common/classes");
var TabTitle = (function (_super) {
    tslib_1.__extends(TabTitle, _super);
    function TabTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (e) { return _this.props.onClick(_this.props.id, e); };
        return _this;
    }
    TabTitle.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, id = _a.id, parentId = _a.parentId, selected = _a.selected;
        return (React.createElement("div", { "aria-controls": generateTabPanelId(parentId, id), "aria-disabled": disabled, "aria-expanded": selected, "aria-selected": selected, className: classNames(Classes.TAB, this.props.className), "data-tab-id": id, id: generateTabTitleId(parentId, id), onClick: disabled ? undefined : this.handleClick, role: "tab", selected: selected ? true : undefined, tabIndex: disabled ? undefined : 0 },
            this.props.title,
            this.props.children));
    };
    return TabTitle;
}(React.Component));
TabTitle.displayName = "Blueprint.TabTitle";
TabTitle = tslib_1.__decorate([
    PureRender
], TabTitle);
exports.TabTitle = TabTitle;
function generateTabPanelId(parentId, tabId) {
    return Classes.TAB_PANEL + "_" + parentId + "_" + tabId;
}
exports.generateTabPanelId = generateTabPanelId;
function generateTabTitleId(parentId, tabId) {
    return Classes.TAB + "-title_" + parentId + "_" + tabId;
}
exports.generateTabTitleId = generateTabTitleId;

//# sourceMappingURL=tabTitle.js.map
