/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ReactDOM = require("react-dom");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var REACT_CONTEXT_TYPES = {
    blueprintPortalClassName: function (obj, key) {
        if (obj[key] != null && typeof obj[key] !== "string") {
            return new Error(Errors.PORTAL_CONTEXT_CLASS_NAME_STRING);
        }
        return undefined;
    },
};
/**
 * This component detaches its contents and re-attaches them to document.body.
 * Use it when you need to circumvent DOM z-stacking (for dialogs, popovers, etc.).
 * Any class names passed to this element will be propagated to the new container element on document.body.
 */
var Portal = (function (_super) {
    tslib_1.__extends(Portal, _super);
    function Portal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Portal.prototype.render = function () {
        return null;
    };
    Portal.prototype.componentDidMount = function () {
        var targetElement = document.createElement("div");
        targetElement.classList.add(Classes.PORTAL);
        if (this.context.blueprintPortalClassName != null) {
            targetElement.classList.add(this.context.blueprintPortalClassName);
        }
        document.body.appendChild(targetElement);
        this.targetElement = targetElement;
        this.componentDidUpdate();
    };
    Portal.prototype.componentDidUpdate = function () {
        var _this = this;
        // use special render function to preserve React context, in case children need it
        ReactDOM.unstable_renderSubtreeIntoContainer(
        /* parentComponent */ this, React.createElement("div", tslib_1.__assign({}, props_1.removeNonHTMLProps(this.props), { ref: this.props.containerRef }), this.props.children), this.targetElement, function () { return utils_1.safeInvoke(_this.props.onChildrenMount); });
    };
    Portal.prototype.componentWillUnmount = function () {
        ReactDOM.unmountComponentAtNode(this.targetElement);
        this.targetElement.remove();
    };
    return Portal;
}(React.Component));
Portal.displayName = "Blueprint.Portal";
Portal.contextTypes = REACT_CONTEXT_TYPES;
exports.Portal = Portal;

//# sourceMappingURL=portal.js.map
