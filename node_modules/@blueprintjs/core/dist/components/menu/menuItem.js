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
var ReactDOM = require("react-dom");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var position_1 = require("../../common/position");
var popover_1 = require("../popover/popover");
var menu_1 = require("./menu");
var REACT_CONTEXT_TYPES = {
    alignLeft: function (obj, key) {
        if (obj[key] != null && typeof obj[key] !== "boolean") {
            return new Error("[Blueprint] MenuItem context alignLeft must be boolean");
        }
        return undefined;
    },
};
var MenuItem = (function (_super) {
    tslib_1.__extends(MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            alignLeft: false,
        };
        _this.liRefHandler = function (r) { return (_this.liElement = r); };
        _this.measureSubmenu = function (el) {
            if (el != null) {
                var submenuRect = ReactDOM.findDOMNode(el).getBoundingClientRect();
                var parentWidth = _this.liElement.parentElement.getBoundingClientRect().width;
                var adjustmentWidth = submenuRect.width + parentWidth;
                // this ensures that the left and right measurements represent a submenu opened to the right
                var submenuLeft = submenuRect.left;
                var submenuRight = submenuRect.right;
                if (_this.state.alignLeft) {
                    submenuLeft += adjustmentWidth;
                    submenuRight += adjustmentWidth;
                }
                var _a = _this.props.submenuViewportMargin.left, left = _a === void 0 ? 0 : _a;
                var _b = _this.props.submenuViewportMargin.right, right = _b === void 0 ? 0 : _b;
                if (typeof document !== "undefined" &&
                    typeof document.documentElement !== "undefined" &&
                    Number(document.documentElement.clientWidth)) {
                    // we're in a browser context and the clientWidth is available,
                    // use it to set calculate 'right'
                    right = document.documentElement.clientWidth - right;
                }
                // uses context to prioritize the previous positioning
                var alignLeft = _this.context.alignLeft || false;
                if (alignLeft) {
                    if (submenuLeft - adjustmentWidth <= left) {
                        alignLeft = false;
                    }
                }
                else {
                    if (submenuRight >= right) {
                        alignLeft = true;
                    }
                }
                _this.setState({ alignLeft: alignLeft });
            }
        };
        _this.renderChildren = function () {
            var _a = _this.props, children = _a.children, submenu = _a.submenu;
            if (children != null) {
                var childProps_1 = _this.cascadeProps();
                if (Object.keys(childProps_1).length === 0) {
                    return children;
                }
                else {
                    return React.Children.map(children, function (child) {
                        return React.cloneElement(child, childProps_1);
                    });
                }
            }
            else if (submenu != null) {
                return submenu.map(_this.cascadeProps).map(renderMenuItem);
            }
            else {
                return undefined;
            }
        };
        /**
         * Evalutes this.props and cascades prop values into new props when:
         * - submenuViewportMargin is defined, but is undefined for the supplied input.
         * - useSmartPositioning is false, but is undefined for the supplied input.
         * @param {IMenuItemProps} newProps If supplied, object will be modified, otherwise, defaults to an empty object.
         * @returns An object to be used as child props.
         */
        _this.cascadeProps = function (newProps) {
            if (newProps === void 0) { newProps = {}; }
            var _a = _this.props, submenuViewportMargin = _a.submenuViewportMargin, useSmartPositioning = _a.useSmartPositioning;
            if (submenuViewportMargin != null && newProps.submenuViewportMargin == null) {
                newProps.submenuViewportMargin = submenuViewportMargin;
            }
            if (useSmartPositioning === false && newProps.useSmartPositioning == null) {
                newProps.useSmartPositioning = useSmartPositioning;
            }
            return newProps;
        };
        return _this;
    }
    MenuItem.prototype.render = function () {
        var _a = this.props, children = _a.children, disabled = _a.disabled, label = _a.label, submenu = _a.submenu, popoverProps = _a.popoverProps;
        var hasSubmenu = children != null || submenu != null;
        var liClasses = classNames((_b = {},
            _b[Classes.MENU_SUBMENU] = hasSubmenu,
            _b));
        var anchorClasses = classNames(Classes.MENU_ITEM, Classes.intentClass(this.props.intent), (_c = {},
            _c[Classes.DISABLED] = disabled,
            // prevent popover from closing when clicking on submenu trigger or disabled item
            _c[Classes.POPOVER_DISMISS] = this.props.shouldDismissPopover && !disabled && !hasSubmenu,
            _c), Classes.iconClass(this.props.iconName), this.props.className);
        var labelElement;
        if (label != null) {
            labelElement = React.createElement("span", { className: "pt-menu-item-label" }, label);
        }
        var content = (React.createElement("a", { className: anchorClasses, href: disabled ? undefined : this.props.href, onClick: disabled ? undefined : this.props.onClick, tabIndex: disabled ? undefined : 0, target: this.props.target },
            labelElement,
            this.props.text));
        if (hasSubmenu) {
            var measureSubmenu = this.props.useSmartPositioning ? this.measureSubmenu : null;
            var submenuElement = React.createElement(menu_1.Menu, { ref: measureSubmenu }, this.renderChildren());
            var popoverClasses = classNames(Classes.MINIMAL, Classes.MENU_SUBMENU, popoverProps.popoverClassName, (_d = {},
                _d[Classes.ALIGN_LEFT] = this.state.alignLeft,
                _d));
            content = (React.createElement(popover_1.Popover, tslib_1.__assign({ isDisabled: disabled, enforceFocus: false, hoverCloseDelay: 0, inline: true, interactionKind: popover_1.PopoverInteractionKind.HOVER, position: this.state.alignLeft ? position_1.Position.LEFT_TOP : position_1.Position.RIGHT_TOP, useSmartArrowPositioning: false }, popoverProps, { content: submenuElement, popoverClassName: popoverClasses }), content));
        }
        return (React.createElement("li", { className: liClasses, ref: this.liRefHandler }, content));
        var _b, _c, _d;
    };
    MenuItem.prototype.getChildContext = function () {
        return { alignLeft: this.state.alignLeft };
    };
    MenuItem.prototype.validateProps = function (props) {
        if (props.children != null && props.submenu != null) {
            console.warn(Errors.MENU_WARN_CHILDREN_SUBMENU_MUTEX);
        }
    };
    return MenuItem;
}(abstractComponent_1.AbstractComponent));
MenuItem.defaultProps = {
    disabled: false,
    popoverProps: {},
    shouldDismissPopover: true,
    submenuViewportMargin: {},
    text: "",
    useSmartPositioning: true,
};
MenuItem.displayName = "Blueprint.MenuItem";
MenuItem.contextTypes = REACT_CONTEXT_TYPES;
MenuItem.childContextTypes = REACT_CONTEXT_TYPES;
exports.MenuItem = MenuItem;
function renderMenuItem(props, key) {
    return React.createElement(MenuItem, tslib_1.__assign({ key: key }, props));
}
exports.renderMenuItem = renderMenuItem;
exports.MenuItemFactory = React.createFactory(MenuItem);

//# sourceMappingURL=menuItem.js.map
