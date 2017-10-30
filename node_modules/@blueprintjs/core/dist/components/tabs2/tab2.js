/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
var Tab2 = (function (_super) {
    tslib_1.__extends(Tab2, _super);
    function Tab2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // this component is never rendered directly; see Tabs2#renderTabPanel()
    /* istanbul ignore next */
    Tab2.prototype.render = function () {
        var _a = this.props, className = _a.className, panel = _a.panel;
        return (React.createElement("div", { className: classNames(Classes.TAB_PANEL, className), role: "tablist" }, panel));
    };
    return Tab2;
}(React.Component));
Tab2.defaultProps = {
    disabled: false,
    id: undefined,
};
Tab2.displayName = "Blueprint.Tab2";
Tab2 = tslib_1.__decorate([
    PureRender
], Tab2);
exports.Tab2 = Tab2;
exports.Tab2Factory = React.createFactory(Tab2);

//# sourceMappingURL=tab2.js.map
