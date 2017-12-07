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
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var TabList = (function (_super) {
    tslib_1.__extends(TabList, _super);
    function TabList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            shouldAnimate: false,
        };
        return _this;
    }
    TabList.prototype.render = function () {
        return (React.createElement("ul", { className: classNames(Classes.TAB_LIST, this.props.className), role: "tablist" },
            React.createElement("div", { className: classNames("pt-tab-indicator-wrapper", { "pt-no-animation": !this.state.shouldAnimate }), style: this.props.indicatorWrapperStyle },
                React.createElement("div", { className: "pt-tab-indicator" })),
            this.props.children));
    };
    TabList.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.indicatorWrapperStyle == null) {
            this.setTimeout(function () { return _this.setState({ shouldAnimate: true }); });
        }
    };
    return TabList;
}(abstractComponent_1.AbstractComponent));
TabList.displayName = "Blueprint.TabList";
TabList = tslib_1.__decorate([
    PureRender
], TabList);
exports.TabList = TabList;
exports.TabListFactory = React.createFactory(TabList);

//# sourceMappingURL=tabList.js.map
