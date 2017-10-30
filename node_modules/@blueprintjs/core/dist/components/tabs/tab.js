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
var Tab = (function (_super) {
    tslib_1.__extends(Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tab.prototype.render = function () {
        return (React.createElement("li", { "aria-controls": this.props.panelId, "aria-disabled": this.props.isDisabled, "aria-expanded": this.props.isSelected, "aria-selected": this.props.isSelected, className: classNames(Classes.TAB, this.props.className), id: this.props.id, role: "tab", selected: this.props.isSelected ? true : null, tabIndex: this.props.isDisabled ? null : 0 }, this.props.children));
    };
    return Tab;
}(React.Component));
Tab.defaultProps = {
    isDisabled: false,
    isSelected: false,
};
Tab.displayName = "Blueprint.Tab";
Tab = tslib_1.__decorate([
    PureRender
], Tab);
exports.Tab = Tab;
exports.TabFactory = React.createFactory(Tab);

//# sourceMappingURL=tab.js.map
